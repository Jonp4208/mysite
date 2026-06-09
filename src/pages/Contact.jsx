import React, { useState, useRef } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', service: 'web-design', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsSubmitting(false);
          setFormData({ user_name: '', user_email: '', service: 'web-design', message: '' });
        },
        (error) => {
          console.error(error?.text);
          setErrorMsg('Something went wrong sending your message. Please try again, or email us directly.');
          setIsSubmitting(false);
        }
      );
  };

  const set = (k) => (e) => setFormData({ ...formData, [k]: e.target.value });

  return (
    <div className="contact-page">
      <SEO
        path="/contact"
        title="Contact"
        description="Start a project with Calhoun Web Creations. Tell us about your web design, app development or e-commerce goals — we reply within one business day."
      />

      <section className="phead section--tight">
        <div className="container">
          <div className="contact__grid">
            {/* LEFT — statement + details */}
            <Reveal>
              <p className="kicker kicker--dot"><span>Start a project</span></p>
              <h1 className="contact__title">Tell us what you&rsquo;re <em>building.</em></h1>
              <p className="contact__lead">
                Tell us where you&rsquo;re headed. We reply within one business day to set up
                a free, no-pressure consultation.
              </p>

              <dl className="contact__details">
                <div className="contact__detail">
                  <dt>Email</dt>
                  <dd><a href="mailto:jonp4208@gmail.com">jonp4208@gmail.com</a></dd>
                </div>
                <div className="contact__detail">
                  <dt>Phone</dt>
                  <dd><a href="tel:+14044254758">404 · 425 · 4758</a></dd>
                </div>
                <div className="contact__detail">
                  <dt>Studio</dt>
                  <dd>Calhoun, Georgia</dd>
                </div>
                <div className="contact__detail">
                  <dt>Hours</dt>
                  <dd>Mon–Fri · 9–6 ET</dd>
                </div>
              </dl>
            </Reveal>

            {/* RIGHT — form */}
            <Reveal delay={120}>
              <div className="contact__form">
                {isSubmitted ? (
                  <div className="contact__success">
                    <div className="contact__success-mark"><Check size={28} /></div>
                    <h2>Message received.</h2>
                    <p>Thanks for reaching out — we&rsquo;ll be in touch shortly to talk through your project.</p>
                    <button className="btn btn--ghost-light" onClick={() => setIsSubmitted(false)}>Send another</button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div className="contact__form-head">
                      <span className="kicker kicker--bare">Project brief</span>
                      <span className="kicker kicker--bare">01 / 04</span>
                    </div>

                    {errorMsg && <div className="contact__error">{errorMsg}</div>}

                    <div className="field">
                      <label htmlFor="user_name">Your name</label>
                      <input id="user_name" name="user_name" type="text" required
                        value={formData.user_name} onChange={set('user_name')} placeholder="Jane Calhoun" />
                    </div>

                    <div className="field">
                      <label htmlFor="user_email">Email address</label>
                      <input id="user_email" name="user_email" type="email" required
                        value={formData.user_email} onChange={set('user_email')} placeholder="jane@business.com" />
                    </div>

                    <div className="field contact__select-wrap">
                      <label htmlFor="service">What do you need?</label>
                      <select id="service" name="service" value={formData.service} onChange={set('service')}>
                        <option value="web-design">Website / Interface design</option>
                        <option value="app-dev">App / Custom software</option>
                        <option value="ecommerce">E-commerce storefront</option>
                        <option value="other">Something in between</option>
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="message">Tell us about it</label>
                      <textarea id="message" name="message" required rows="4"
                        value={formData.message} onChange={set('message')} placeholder="What are you building, and what does success look like?" />
                    </div>

                    <button type="submit" className="btn btn--primary btn--lg contact__submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send the brief'} <ArrowUpRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
