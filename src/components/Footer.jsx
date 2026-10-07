import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="navbar__brand">{site.name}</p>
          <p className="footer__tag">{site.tagline}</p>
        </div>
        <nav aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>{site.nav.map(n => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
        </nav>
        <nav aria-label="Occasions">
          <h3>Occasions</h3>
          <ul>{site.footerOccasions.map(o => <li key={o}><a href="#templates">{o}</a></li>)}</ul>
        </nav>
        <nav aria-label="Follow us">
          <h3>Follow Us</h3>
          <ul>{site.social.map(s => <li key={s.label}><a href={s.href}>{s.label}</a></li>)}</ul>
        </nav>
      </div>
      <p className="footer__copy">© 2026 Invitinium. All rights reserved.</p>
    </footer>
  )
}
