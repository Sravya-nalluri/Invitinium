export default function SectionHeading({ id, title, subtitle, align = 'center' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
