// CSS-only invitation mockup. Swap for <img> from /assets when real designs exist.
export default function InvitePreview({ tone = 'rose', kind = 'Wedding', title = 'Save the Date', className = '' }) {
  return (
    <div className={`invite tone-${tone} ${className}`} role="img" aria-label={`${kind} invitation preview: ${title}`}>
      <span className="invite__kind">{kind}</span>
      <span className="invite__orn" aria-hidden="true">❦</span>
      <span className="invite__title">{title}</span>
      <span className="invite__line" aria-hidden="true" />
      <span className="invite__sub">You're invited</span>
    </div>
  )
}
