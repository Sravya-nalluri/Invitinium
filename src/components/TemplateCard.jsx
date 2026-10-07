import InvitePreview from './InvitePreview'

export default function TemplateCard({ template }) {
  return (
    <article className="card template-card">
      <InvitePreview tone={template.tone} kind={template.category} title={template.name} />
      <div className="template-card__body">
        <p className="template-card__cat">{template.category}</p>
        <h3>{template.name}</h3>
        <p className="template-card__price">{template.price}</p>
        <a href="#contact" className="btn btn--outline btn--sm" aria-label={`Request ${template.name}`}>Request this design</a>
      </div>
    </article>
  )
}
