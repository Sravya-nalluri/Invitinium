import InvitePreview from './InvitePreview'

export default function TemplateCard({ template, onPlay }) {
  const preview = (
    <InvitePreview tone={template.tone} kind={template.category} title={template.name} />
  )

  return (
    <article className="card template-card">
      {template.video ? (
        <button
          type="button"
          className="template-card__play"
          onClick={() => onPlay(template)}
          aria-label={`Watch ${template.name} video`}
        >
          {preview}
          <span className="play-badge" aria-hidden="true">▶</span>
        </button>
      ) : (
        preview
      )}

      <div className="template-card__body">
        <p className="template-card__cat">{template.category}</p>
        <h3>{template.name}</h3>
        <p className="template-card__price">{template.price}</p>
        <a href="#contact" className="btn btn--outline btn--sm" aria-label={`Request ${template.name}`}>
          Request this design
        </a>
      </div>
    </article>
  )
}