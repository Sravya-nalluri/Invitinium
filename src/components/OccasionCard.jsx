import InvitePreview from './InvitePreview'

export default function OccasionCard({ occasion }) {
  return (
    <a href="#templates" className="card occasion-card">
      <InvitePreview tone={occasion.tone} kind={occasion.name} title="You're invited" className="invite--mini" />
      <h3>{occasion.name}</h3>
      <p>{occasion.description}</p>
      <span className="link-arrow">View Templates <span aria-hidden="true">→</span></span>
    </a>
  )
}
