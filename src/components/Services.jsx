import { services } from '../data/services'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Services() {
  const ref = useReveal()
  return (
    <section id="services" className="section section--navy" aria-labelledby="services-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="services-title" title="More Than Just Invitations" />
        <div className="grid grid--3">
          {services.map(s => (
            <article key={s.id} className="card card--dark service-card">
              <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
