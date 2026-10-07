import { steps } from '../data/services'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="process-title" title="From Idea to Invitation" />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__icon" aria-hidden="true">{s.icon}</span>
              <span className="step__num">Step {i + 1}</span>
              <h3>{s.title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
