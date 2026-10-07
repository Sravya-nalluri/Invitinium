import { templates } from '../data/templates'
import TemplateCard from './TemplateCard'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function FeaturedTemplates() {
  const ref = useReveal()
  return (
    <section id="templates" className="section section--beige" aria-labelledby="templates-title">
      <div className="container reveal" ref={ref}>
        <SectionHeading id="templates-title" title="Featured Invitations"
          subtitle="Start with a design you love and make it completely yours." />
        <div className="grid grid--4">
          {templates.map(t => <TemplateCard key={t.id} template={t} />)}
        </div>
        <p className="section-link"><a href="#contact" className="link-arrow">View All Templates <span aria-hidden="true">→</span></a></p>
      </div>
    </section>
  )
}
