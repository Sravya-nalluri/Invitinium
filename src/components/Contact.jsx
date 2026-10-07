import { useState } from 'react'
import { occasions } from '../data/occasions'
import { site } from '../data/site'
import SectionHeading from './SectionHeading'

const eventTypes = [...occasions.map(o => o.name), 'Corporate Event', 'Festival', 'Other']
const empty = { name: '', email: '', phone: '', eventType: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a phone number with at least 10 digits.'
  if (!v.eventType) e.eventType = 'Choose an event type.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters).'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }))
  const onSubmit = e => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) { setSent(true); setValues(empty) } // V1: no backend
  }

  const common = name => ({
    id: name, name, value: values[name], onChange,
    'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-err` : undefined,
  })
  const FieldError = ({ name }) => errors[name]
    ? <p className="field__error" id={`${name}-err`} role="alert">{errors[name]}</p> : null

  return (
    <section id="contact" className="section section--beige" aria-labelledby="contact-title">
      <div className="container contact">
        <div>
          <SectionHeading id="contact-title" align="left" title="Let's Create Something Beautiful" />
          <ul className="contact__list">
            {site.contacts.map(c => (
              <li key={c.label}><strong>{c.label}</strong><a href={c.href}>{c.value}</a></li>
            ))}
          </ul>
        </div>
        {sent ? (
          <div className="card contact__success" role="status">
            <h3>Thank you!</h3>
            <p>Your inquiry is noted. We'll get back to you soon.</p>
            <button type="button" className="btn btn--outline btn--sm" onClick={() => setSent(false)}>Send another</button>
          </div>
        ) : (
          <form className="card contact__form" onSubmit={onSubmit} noValidate>
            <div className="field"><label htmlFor="name">Name</label>
              <input type="text" autoComplete="name" {...common('name')} /><FieldError name="name" /></div>
            <div className="field"><label htmlFor="email">Email</label>
              <input type="email" autoComplete="email" {...common('email')} /><FieldError name="email" /></div>
            <div className="field"><label htmlFor="phone">Phone / WhatsApp</label>
              <input type="tel" autoComplete="tel" {...common('phone')} /><FieldError name="phone" /></div>
            <div className="field"><label htmlFor="eventType">Event Type</label>
              <select {...common('eventType')}>
                <option value="">Select an event</option>
                {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select><FieldError name="eventType" /></div>
            <div className="field"><label htmlFor="message">Message</label>
              <textarea rows="4" {...common('message')} /><FieldError name="message" /></div>
            <button type="submit" className="btn btn--navy">Send Inquiry</button>
          </form>
        )}
      </div>
    </section>
  )
}
