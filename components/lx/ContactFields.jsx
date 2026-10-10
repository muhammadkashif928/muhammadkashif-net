// The enquiry form used by the contact pop-up and the contact page. lib/lumora/runtime.js
// posts it to /api/contact with the same payload as components/Contact.jsx: name, email,
// message, the "website" honeypot and the first-touch attribution.
import { Pill } from './Icons'

export default function ContactFields({ location, rows = 4, placeholder = 'Your product, your goals and what you need designed.' }) {
  return (
    <form className="mform" data-contact-form={location} noValidate={false}>
      <label><span>Name</span><input type="text" name="name" required minLength={2} maxLength={100} placeholder="Your name" autoComplete="name" /></label>
      <label><span>Email</span><input type="email" name="email" required placeholder="you@company.com" autoComplete="email" /></label>
      <label><span>Project</span><textarea name="message" rows={rows} required minLength={10} maxLength={3000} placeholder={placeholder} /></label>
      {/* Honeypot: hidden from people, filled in by bots. The API drops anything that sets it. */}
      <div className="hp-field" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className="mform__error" role="alert" />
      <div className="mform__row">
        <p className="mform__note">Typical response: within 24 hours.</p>
        <Pill variant="dark" arrow="up-right" type="submit"><span data-submit-label="">Send request</span></Pill>
      </div>
    </form>
  )
}
