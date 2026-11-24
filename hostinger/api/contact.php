<?php
// Hostinger (PHP) version of api/contact.js: emails the contact-form brief
// through Hostinger SMTP. Settings live in config.php next to this file.

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

const MIN_FILL_MS = 3000;
const LIMITS = ['name' => 120, 'email' => 200, 'services' => 120, 'budget' => 60, 'message' => 5000, 'lang' => 5];

function respond($code, $data)
{
    http_response_code($code);
    echo json_encode($data);
    exit;
}

// Bots get a fake success so they don't learn to adapt.
function trap($reason)
{
    error_log("contact: spam blocked ($reason)");
    respond(200, ['ok' => true]);
}

function clean($v, $max)
{
    if (!is_scalar($v)) return '';
    $s = trim(str_replace("\r", '', (string) $v));
    $s = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $s) ?? '';
    return function_exists('mb_substr') ? mb_substr($s, 0, $max, 'UTF-8') : substr($s, 0, $max);
}

function one_line($s)
{
    return preg_replace('/\n+/', ' ', $s);
}

function esc($s)
{
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

// RFC 2047 encoded words, folded so no header line gets too long.
function enc_header($s)
{
    $chars = preg_split('//u', $s, -1, PREG_SPLIT_NO_EMPTY) ?: str_split($s);
    $words = [];
    $chunk = '';
    foreach ($chars as $ch) {
        if (strlen($chunk . $ch) > 45) {
            $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
            $chunk = '';
        }
        $chunk .= $ch;
    }
    $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
    return implode("\r\n ", $words);
}

/** Minimal SMTP client: SSL on 465, STARTTLS on 587, AUTH LOGIN. */
function smtp_send(array $c, $from, $to, $message)
{
    $port = (int) $c['smtp_port'];
    $remote = ($port === 465 ? 'ssl://' : 'tcp://') . $c['smtp_host'] . ':' . $port;
    $fp = @stream_socket_client($remote, $errno, $errstr, 15);
    if (!$fp) throw new RuntimeException("connect failed: $errstr ($errno)");
    stream_set_timeout($fp, 20);

    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 1024)) !== false) {
            $data .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return [(int) substr($data, 0, 3), trim($data)];
    };
    $cmd = function ($line, array $expect, $label = null) use ($fp, $read) {
        if ($line !== null) fwrite($fp, $line . "\r\n");
        [$code, $text] = $read();
        if (!in_array($code, $expect, true)) {
            throw new RuntimeException(($label ?? strtok((string) $line, ' ')) . " failed: $text");
        }
        return $text;
    };

    try {
        $helo = preg_replace('/[^A-Za-z0-9.-]/', '', $_SERVER['SERVER_NAME'] ?? 'localhost') ?: 'localhost';
        $cmd(null, [220], 'greeting');
        $cmd("EHLO $helo", [250]);
        if ($port !== 465) {
            $cmd('STARTTLS', [220]);
            if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('STARTTLS negotiation failed');
            }
            $cmd("EHLO $helo", [250]);
        }
        $cmd('AUTH LOGIN', [334]);
        $cmd(base64_encode($c['smtp_user']), [334], 'AUTH user');
        $cmd(base64_encode($c['smtp_pass']), [235], 'AUTH password');
        $cmd("MAIL FROM:<$from>", [250]);
        $cmd("RCPT TO:<$to>", [250, 251]);
        $cmd('DATA', [354]);
        $message = preg_replace('/(?<!\r)\n/', "\r\n", $message);
        $message = preg_replace('/^\./m', '..', $message); // dot-stuffing
        $cmd($message . "\r\n.", [250], 'DATA body');
        @fwrite($fp, "QUIT\r\n");
    } finally {
        fclose($fp);
    }
}

// ---------------------------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$body = json_decode((string) file_get_contents('php://input', false, null, 0, 20000), true);
if (!is_array($body)) $body = $_POST;

// Spam traps: 1) hidden honeypot field, 2) minimum time the form was open.
if (clean($body['bs_hp_url'] ?? '', 500) !== '') trap('honeypot');
$elapsed = $body['elapsed'] ?? null;
if (!is_numeric($elapsed) || (float) $elapsed < MIN_FILL_MS) trap('too_fast');

$name = one_line(clean($body['name'] ?? '', LIMITS['name']));
$email = one_line(clean($body['email'] ?? '', LIMITS['email']));
$services = one_line(clean($body['services'] ?? '', LIMITS['services']));
$budget = one_line(clean($body['budget'] ?? '', LIMITS['budget']));
$message = clean($body['message'] ?? '', LIMITS['message']);
$lang = one_line(clean($body['lang'] ?? '', LIMITS['lang']));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $services === '' || $budget === '') {
    respond(400, ['ok' => false, 'error' => 'invalid']);
}

$cfg = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$cfg += ['smtp_host' => 'smtp.hostinger.com', 'smtp_port' => 465, 'smtp_user' => '', 'smtp_pass' => '', 'mail_to' => ''];
if ($cfg['smtp_user'] === '' || $cfg['smtp_pass'] === '' || $cfg['smtp_pass'] === 'PASTE_MAILBOX_PASSWORD_HERE') {
    error_log('contact: SMTP settings are missing in api/config.php');
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}
$user = $cfg['smtp_user'];
$to = $cfg['mail_to'] !== '' ? $cfg['mail_to'] : $user;

$rows = ['Name' => $name, 'Email' => $email, 'Service' => $services, 'Budget' => $budget, 'Language' => $lang !== '' ? $lang : '—'];
$msg = $message !== '' ? $message : '(no message)';

$text = '';
foreach ($rows as $k => $v) $text .= "$k: $v\n";
$text .= "\n$msg\n";

$html = '<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">';
foreach ($rows as $k => $v) {
    $html .= '<tr><td style="padding:4px 16px 4px 0;color:#666">' . $k . '</td><td style="padding:4px 0"><strong>' . esc($v) . '</strong></td></tr>';
}
$html .= '</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:20px">' . esc($msg) . '</p>';

$boundary = 'b_' . bin2hex(random_bytes(12));
$domain = substr(strrchr($user, '@') ?: '@localhost', 1);
$headers = [
    'Date: ' . date('r'),
    'From: ' . enc_header('Blueism Studio Website') . " <$user>",
    "To: <$to>",
    'Reply-To: ' . enc_header($name) . " <$email>",
    'Subject: ' . enc_header("New project — $services — $name"),
    'Message-ID: <' . bin2hex(random_bytes(16)) . "@$domain>",
    'MIME-Version: 1.0',
    "Content-Type: multipart/alternative; boundary=\"$boundary\"",
];
$data = implode("\r\n", $headers) . "\r\n\r\n"
    . "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($text))
    . "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($html))
    . "--$boundary--";

try {
    // Hostinger only relays mail sent from the authenticated mailbox.
    smtp_send($cfg, $user, $to, $data);
    respond(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('contact: send failed: ' . $e->getMessage());
    respond(502, ['ok' => false, 'error' => 'send_failed']);
}
