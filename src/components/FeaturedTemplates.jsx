import { useState } from 'react'
import { templates } from '../data/templates'
import TemplateCard from './TemplateCard'
import SectionHeading from './SectionHeading'
import VideoModal from './VideoModal'
import useReveal from '../hooks/useReveal'

export default function FeaturedTemplates() {
  const ref = useReveal()
  const [playing, setPlaying] = useState(null)

  return (
    <section id="templates" className="section section--beige" aria-labelledby="templates-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="templates-title" title="Featured Invitations"
          subtitle="Start with a design you love and make it completely yours." />
        <div className="grid grid--4">
          {templates.map(t => <TemplateCard key={t.id} template={t} onPlay={setPlaying} />)}
        </div>
        <p className="section-link"><a href="#contact" className="link-arrow">View All Templates <span aria-hidden="true">→</span></a></p>
      </div>
      <VideoModal template={playing} onClose={() => setPlaying(null)} />
    </section>
  )
}