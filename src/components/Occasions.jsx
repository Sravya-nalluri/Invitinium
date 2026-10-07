import { occasions } from '../data/occasions'
import OccasionCard from './OccasionCard'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Occasions() {
  const ref = useReveal()
  return (
    <section id="occasions" className="section" aria-labelledby="occasions-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="occasions-title" title="Celebrate Every Occasion"
          subtitle="Whatever you're celebrating, we'll help you invite your people in style." />
        <div className="grid grid--4">
          {occasions.map(o => <OccasionCard key={o.id} occasion={o} />)}
        </div>
      </div>
    </section>
  )
}
