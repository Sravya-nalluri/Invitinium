import SectionHeading from './SectionHeading'
import { site } from '../data/site'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container reveal about" ref={ref}>
        <SectionHeading id="about-title" align="left" title="We Design Invitations That Feel Like You." />
        <div className="about__text">
          <p>Invitinium creates modern, personal and memorable invitations for every kind of occasion, from weddings and birthdays to housewarmings and corporate events.</p>
          <p>{site.mission}</p>
        </div>
      </div>
    </section>
  )
}
