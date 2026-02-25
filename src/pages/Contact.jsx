import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        service: 'web-design',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setIsSubmitted(true);
                setIsSubmitting(false);
                setFormData({ user_name: '', user_email: '', service: 'web-design', message: '' });
            }, (error) => {
                console.error(error.text);
                setErrorMsg('There was an issue sending your message. Please try again.');
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-page">
            <SEO
                title="Contact Us"
                description="Get in touch with Calhoun Web Creations for a free consultation on your web design, app development, or e-commerce project."
            />
            <section className="section-padding" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <div className="grid contact-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                        <div className="contact-info animate-fade-up">
                            <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>Let's Work Together</h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                                Fill out the form and our team will get back to you within 24 hours to schedule a free consultation.
                            </p>

                            <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="flex gap-4 items-center">
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Mail size={24} />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Email Us</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>hello@calhounweb.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(155, 81, 224, 0.1)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Phone size={24} />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Call Us</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card form-container animate-fade-up delay-100">
                            {isSubmitted ? (
                                <div className="text-center" style={{ padding: '3rem 0' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                        <Send size={40} />
                                    </div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h2>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We'll be in touch shortly to discuss your project.</p>
                                    <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
                                </div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {errorMsg && (
                                        <div style={{ padding: '1rem', background: 'rgba(255,50,50,0.1)', border: '1px solid rgba(255,50,50,0.3)', borderRadius: 'var(--radius-md)', color: '#ff8a8a', textAlign: 'center' }}>
                                            {errorMsg}
                                        </div>
                                    )}
                                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="user_name" style={{ fontWeight: '500' }}>Your Name</label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            value={formData.user_name}
                                            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                            style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="user_email" style={{ fontWeight: '500' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            required
                                            value={formData.user_email}
                                            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                                            style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="service" style={{ fontWeight: '500' }}>Service of Interest</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none', appearance: 'none' }}
                                        >
                                            <option value="web-design">Custom Web Design</option>
                                            <option value="ecommerce">E-commerce Solution</option>
                                            <option value="app-dev">App Development</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="message" style={{ fontWeight: '500' }}>Project Details</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none', resize: 'vertical' }}
                                            placeholder="Tell us about your goals..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '1.1rem', padding: '1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }} disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
