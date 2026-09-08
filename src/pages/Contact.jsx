import React, { useState, useRef } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { OWNER, PHONE_DISPLAY, PHONE_TEL, EMAIL, CITY } from '../content/site';
import './Contact.css';

const EMPTY = { user_name: '', user_email: '', business: '', phone: '', service: 'web-design', message: '' };

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState(EMPTY);
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
          setFormData(EMPTY);
        },
        (error) => {
          console.error(error?.text);
          setErrorMsg(`Something went wrong sending your message. Please try again, or call ${PHONE_DISPLAY}.`);
          setIsSubmitting(false);
        }
      );
  };

  const set = (k) => (e) => setFormData({ ...formData, [k]: e.target.value });

  const phoneLink = (
    <a href={`tel:${PHONE_TEL}`} aria-label={`Call Jonathon at ${PHONE_DISPLAY}`}>{PHONE_DISPLAY}</a>
  );

  return (
    <div className="contact-page">
      <SEO
        path="/contact"
        title="Get a Free Website Quote · Calhoun, GA"
        description="Get a free, fixed-price quote for a website in Calhoun, GA. Call or message Jonathon Pope — replies within one business day."
      />

      <section className="phead section--tight">
        <div className="container">
          <div className="contact__grid">
            {/* LEFT — statement + details (rendered below the form on mobile via CSS order) */}
            <Reveal className="contact__intro">
              <p className="kicker kicker--dot"><span>Free quote · No obligation</span></p>
              <h1 className="contact__title">Get a free <em>quote.</em></h1>
              <p className="contact__lead">
                Tell me a little about your business and I&rsquo;ll reply within one business day
                with a straight answer on price and timeline. No sales call unless you want one.
              </p>

              <dl className="contact__details">
                <div className="contact__detail">
                  <dt>Phone</dt>
                  <dd>{phoneLink}</dd>
                </div>
                <div className="contact__detail">
                  <dt>Email</dt>
                  <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                </div>
                <div className="contact__detail">
                  <dt>Owner</dt>
                  <dd>{OWNER}</dd>
                </div>
                <div className="contact__detail">
                  <dt>Studio</dt>
                  <dd>{CITY}</dd>
                </div>
                <div className="contact__detail">
                  <dt>Hours</dt>
                  <dd>Mon–Fri · 9–6 ET</dd>
                </div>
              </dl>
            </Reveal>

            {/* RIGHT — form */}
            <Reveal delay={120} className="contact__form-col">
              <div className="contact__form">
                {isSubmitted ? (
                  <div className="contact__success">
                    <div className="contact__success-mark"><Check size={28} /></div>
                    <h2>Got it.</h2>
                    <p>
                      I&rsquo;ll reply within one business day. Need it faster? Call{' '}
                      {phoneLink}.
                    </p>
                    <button className="btn btn--ghost-light" onClick={() => setIsSubmitted(false)}>Send another</button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div className="contact__form-head">
                      <span className="kicker kicker--bare">Free quote</span>
                      <span className="kicker kicker--bare">Takes 1 minute</span>
                    </div>

                    {errorMsg && <div className="contact__error" role="alert">{errorMsg}</div>}

                    <div className="field">
                      <label htmlFor="user_name">Your name</label>
                      <input id="user_name" name="user_name" type="text" required autoComplete="name"
                        value={formData.user_name} onChange={set('user_name')} placeholder="Jane Calhoun" />
                    </div>

                    <div className="contact__row">
                      <div className="field">
                        <label htmlFor="user_email">Email address</label>
                        <input id="user_email" name="user_email" type="email" required autoComplete="email" inputMode="email"
                          value={formData.user_email} onChange={set('user_email')} placeholder="jane@business.com" />
                      </div>

                      <div className="field">
                        <label htmlFor="phone">Phone (optional)</label>
                        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel"
                          value={formData.phone} onChange={set('phone')} placeholder="706 555 0100" />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="business">Business name</label>
                      <input id="business" name="business" type="text" autoComplete="organization"
                        value={formData.business} onChange={set('business')} placeholder="e.g. Main Street Boutique" />
                    </div>

                    <div className="field contact__select-wrap">
                      <label htmlFor="service">What do you need?</label>
                      <select id="service" name="service" value={formData.service} onChange={set('service')}>
                        <option value="web-design">A new business website</option>
                        <option value="ecommerce">An online store</option>
                        <option value="app-dev">A web app or portal</option>
                        <option value="redesign">Fixing / redesigning my current site</option>
                        <option value="other">Not sure yet</option>
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="message">Tell me about it</label>
                      <textarea id="message" name="message" required rows="4"
                        value={formData.message} onChange={set('message')}
                        placeholder="What does your business do, and what do you want the website to do for you?" />
                    </div>

                    <button type="submit" className="btn btn--primary btn--lg contact__submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send my request'} <ArrowUpRight size={18} />
                    </button>
                    <p className="contact__form-foot">
                      Prefer to talk? Call {phoneLink}.
                    </p>
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
