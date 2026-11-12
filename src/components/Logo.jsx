import wordmark from './wordmark.svg?raw'
import logomark from './logomark.svg?raw'

export function Wordmark({ className = '' }) {
  return (
    <span
      className={`logo-svg wordmark ${className}`}
      role="img"
      aria-label="Blueism Studio"
      dangerouslySetInnerHTML={{ __html: wordmark }}
    />
  )
}

export function Logomark({ className = '' }) {
  return (
    <span
      className={`logo-svg logomark ${className}`}
      role="img"
      aria-label="Blueism"
      dangerouslySetInnerHTML={{ __html: logomark }}
    />
  )
}
