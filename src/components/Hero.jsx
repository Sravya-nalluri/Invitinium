import InvitePreview from './InvitePreview'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__label">Digital invitations • made personal</p>
          <h1 id="hero-title">Make Every<br />Moment<br /><span className="script">Unforgettable.</span></h1>
          <p className="hero__text">
            Beautifully designed digital invitations for weddings, birthdays, celebrations, and every special occasion.
          </p>
          <div className="hero__actions">
            <a href="#templates" className="btn btn--navy">Explore Templates</a>
            <a href="#contact" className="btn btn--outline">Get a Custom Invitation</a>
          </div>
        </div>
        <div className="hero__collage" aria-label="Sample invitation designs">
          <InvitePreview className="c1" tone="rose" kind="Wedding" title="Aarav & Meera" />
          <InvitePreview className="c2" tone="sun" kind="Birthday" title="Turning Five" />
          <InvitePreview className="c3" tone="sky" kind="Baby Shower" title="Little Bloom" />
          <InvitePreview className="c4" tone="sage" kind="Housewarming" title="Open House" />
          <span className="hero__orn hero__orn--a" aria-hidden="true">❦</span>
          <span className="hero__orn hero__orn--b" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
  )
}
