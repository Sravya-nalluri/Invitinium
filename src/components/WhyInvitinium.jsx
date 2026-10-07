import { reasons } from '../data/services'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function WhyInvitinium() {
  const ref = useReveal()
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="why-title" title="Designed Around Your Moment" />
        <div className="grid grid--4">
          {reasons.map(r => (
            <div key={r.title} className="feature">
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
