import { useEffect, useState } from 'react'
import { site } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={close}>{site.name}</a>
        <button className="navbar__toggle" aria-expanded={open} aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
        <nav id="nav-menu" className={`navbar__menu ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {site.nav.map(item => (
              <li key={item.href}><a href={item.href} onClick={close}>{item.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--gold" onClick={close}>Get a Quote</a>
        </nav>
      </div>
    </header>
  )
}
