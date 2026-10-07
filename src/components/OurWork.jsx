import { useState } from 'react'
import { work, workFilters } from '../data/work'
import InvitePreview from './InvitePreview'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function OurWork() {
  const [active, setActive] = useState('All')
  const ref = useReveal()
  const items = active === 'All' ? work : work.filter(w => w.filter === active)

  return (
    <section id="work" className="section section--beige" aria-labelledby="work-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="work-title" title="A Few Moments We've Designed"
          subtitle="Placeholder designs for V1. Real work will replace these." />
        <div className="filters" role="group" aria-label="Filter our work">
          {workFilters.map(f => (
            <button key={f} type="button" className={`chip ${active === f ? 'chip--active' : ''}`}
              aria-pressed={active === f} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="masonry">
          {items.map(w => (
            <InvitePreview key={w.id} className={`masonry__item masonry__item--${w.size}`}
              tone={w.tone} kind={w.kind} title={w.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
