<?php
// Contact-form mail settings for Hostinger.
// Edit this file ON THE SERVER (hPanel → File Manager → public_html/api/config.php)
// and paste the mailbox password. Never commit the real password to git.
return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,                          // 465 = SSL, 587 = STARTTLS
    'smtp_user' => 'support@blueismstudio.com',  // the Hostinger mailbox
    'smtp_pass' => 'PASTE_MAILBOX_PASSWORD_HERE',
    'mail_to'   => 'support@blueismstudio.com',  // where briefs are delivered
];
