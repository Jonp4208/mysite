import React, { useState } from 'react';
import { MonitorSmartphone, ShoppingCart, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Code2, PenTool, Rocket, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Services.css';

const Services = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does a typical website project take?",
            answer: "Most standard business websites take 4-6 weeks from initial discovery to final launch. More complex e-commerce stores or custom web applications can take 8-12 weeks depending on specific feature requirements."
        },
        {
            question: "Do you offer ongoing maintenance and support?",
            answer: "Yes! We offer monthly retainer packages for priority support, regular software updates, security monitoring, and content changes to ensure your site stays fast and secure long after launch."
        },
        {
            question: "Will my website be mobile-friendly and SEO optimized?",
            answer: "Absolutely. Every site we build is strictly 'mobile-first' and responsive across all devices. We also implement foundational on-page technical SEO (meta tags, sitemaps, semantic HTML, fast load times) so you rank well on Google right out of the gate."
        },
        {
            question: "What platforms do you build on?",
            answer: "We specialize in custom React applications (Next.js, Vite) for maximum performance and unique functionality. For straight e-commerce, we frequently build custom headless Shopify storefronts or integrate robust payment solutions like Stripe."
        }
    ];

    return (
        <div className="services-page">
            <SEO
                title="Our Services"
                description="Custom web design, robust e-commerce development, and responsive digital solutions to elevate your brand and grow your revenue."
            />
            {/* Enhanced Hero Section */}
            <section className="section-padding text-center services-hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem' }}>
                {/* Background Glows */}
                <div className="hero-glow bg-shape bg-shape-purple animate-pulse" style={{ width: '600px', height: '600px', right: '-10%', top: '-20%' }}></div>
                <div className="hero-glow bg-shape bg-shape-blue animate-pulse" style={{ width: '400px', height: '400px', left: '-5%', bottom: '-10%', animationDelay: '2s' }}></div>

                <div className="container relative z-10">
                    <div className="badge animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--radius-full)', marginBottom: '2rem', color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: '500' }}>
                        <Code2 size={16} /> Digital Solutions
                    </div>
                    <h1 className="text-gradient animate-fade-up delay-100" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>Elevate Your Digital Operations</h1>
                    <p className="animate-fade-up delay-200" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Stop wrestling with generic templates. We engineer custom, high-converting digital storefronts and web apps that do the heavy lifting for your business.
                    </p>
                </div>
            </section>

            {/* Alternating Services Layout */}
            <section className="services-details-section" style={{ padding: '6rem 0' }}>
                <div className="container">

                    {/* Service 1: Web Design */}
                    <div className="service-row animate-fade-up delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>
                        <div className="service-content">
                            <div className="service-icon-wrapper" style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-blue)', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
                                <MonitorSmartphone size={32} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Custom Web Design & App Development</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                A website is your digital handshake. We construct premium, lightning-fast interfaces that immediately establish trust. From high-converting corporate landing pages to complex, data-driven web applications, we deliver pixel-perfect code that scales with your ambition.
                            </p>
                            <ul className="service-features" style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Responsive, mobile-first layouts',
                                    'Conversion-rate optimized (CRO) user interfaces',
                                    'Progressive Web Apps (PWAs) serving native-like experiences',
                                    'Secure, custom REST & GraphQL API integrations'
                                ].map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                                        <CheckCircle2 size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn btn-primary shadow-glow">Start Your Build</Link>
                        </div>

                        {/* Abstract Visual Card Placeholder for Service 1 */}
                        <div className="service-visual card glass effect-tilt" style={{ minHeight: '500px', background: 'linear-gradient(145deg, rgba(20,20,40,0.8), rgba(0,210,255,0.15))', border: '1px solid rgba(0,210,255,0.4)', position: 'relative', padding: '2rem' }}>
                            <div className="code-mockup" style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div className="header" style={{ display: 'flex', gap: '0.5rem' }}>
                                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
                                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
                                </div>
                                <div className="code-lines" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                                    <div style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                    <div style={{ width: '60%', height: '8px', background: 'rgba(0,210,255,0.2)', borderRadius: '4px' }}></div>
                                    <div style={{ width: '90%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                    <div style={{ width: '40%', height: '8px', background: 'rgba(155,81,224,0.2)', borderRadius: '4px' }}></div>
                                    <br />
                                    <div style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px dashed rgba(255,255,255,0.2)' }}></div>
                                </div>
                            </div>
                            <div className="floating-element" style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)', opacity: 0.3, filter: 'blur(20px)' }}></div>
                        </div>
                    </div>

                    {/* Service 2: E-commerce */}
                    <div className="service-row animate-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Reverse order on desktop for abstract visual */}
                        <div className="service-visual card glass effect-tilt desktop-first" style={{ minHeight: '500px', background: 'linear-gradient(145deg, rgba(20,20,40,0.8), rgba(155,81,224,0.15))', border: '1px solid rgba(155,81,224,0.4)', position: 'relative', padding: '2rem' }}>
                            <div className="store-mockup" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {/* Mockup Header */}
                                <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', padding: '0 1rem', justifyContent: 'space-between' }}>
                                    <div style={{ width: '80px', height: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ width: '30px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                                        <div style={{ width: '30px', height: '10px', background: 'rgba(155,81,224,0.4)', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                                {/* Mockup Body Layout */}
                                <div style={{ display: 'flex', gap: '1.5rem', flex: 1 }}>
                                    <div style={{ flex: 1, background: 'linear-gradient(to bottom right, rgba(255,255,255,0.03), rgba(155,81,224,0.05))', borderRadius: 'var(--radius-md)' }}></div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ width: '70%', height: '24px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}></div>
                                        <div style={{ width: '40%', height: '32px', background: 'rgba(155,81,224,0.3)', borderRadius: '4px' }}></div>
                                        <div style={{ width: '100%', height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginTop: 'auto' }}></div>
                                        <div style={{ width: '100%', height: '45px', background: 'var(--accent-purple)', borderRadius: '4px', opacity: 0.8 }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="floating-element" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '200px', height: '200px', background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)', opacity: 0.3, filter: 'blur(30px)' }}></div>
                        </div>

                        <div className="service-content">
                            <div className="service-icon-wrapper" style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(155, 81, 224, 0.1)', color: 'var(--accent-purple)', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
                                <ShoppingCart size={32} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>High-Performance E-commerce</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                Stop losing sales to slow carts and confusing navigation. We build digital retail environments engineered specifically to reduce friction and maximize average order value. Give your customers the seamless shopping experience they expect.
                            </p>
                            <ul className="service-features" style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Platform migrations (Shopify, WooCommerce, Custom)',
                                    'Frictionless custom checkouts and payment routing',
                                    'Backend inventory and CRM system synchronizations',
                                    'Subscription models and custom pricing tiers'
                                ].map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                                        <CheckCircle2 size={24} style={{ color: 'var(--accent-purple)', flexShrink: 0, marginTop: '2px' }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn btn-primary shadow-glow">Discuss Your Store</Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* NEW: Process Section */}
            <section className="process-section section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
                <div className="container">
                    <div className="text-center animate-fade-up" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How We Build</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>A transparent, streamlined process ensuring your project is delivered on time, perfectly aligned with your goals.</p>
                    </div>

                    <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {[
                            { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals, target audience, and technical requirements.', icon: <MessageSquareText size={28} /> },
                            { step: '02', title: 'Strategy & UI', desc: 'Wireframing, user-flow mapping, and crafting a high-fidelity visual design system.', icon: <PenTool size={28} /> },
                            { step: '03', title: 'Development', desc: 'Writing clean, scalable code while keeping you updated via staging environments.', icon: <Code2 size={28} /> },
                            { step: '04', title: 'Launch', desc: 'Rigorous QA testing, final optimizations, and deploying your application to the world.', icon: <Rocket size={28} /> },
                        ].map((item, i) => (
                            <div key={i} className="process-card card animate-fade-up" style={{ animationDelay: `${(i + 1) * 150}ms`, padding: '2.5rem 2rem', borderTop: i % 2 === 0 ? '2px solid var(--accent-blue)' : '2px solid var(--accent-purple)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ color: 'var(--text-primary)', opacity: 0.8 }}>{item.icon}</div>
                                    <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}>{item.step}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: FAQ Section */}
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
                        <div className="faq-header animate-fade-up">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Everything you need to know about working with us.</p>
                            <Link to="/contact" className="btn btn-secondary">Still have questions?</Link>
                        </div>

                        <div className="faq-accordion animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item glass ${openFaq === index ? 'active' : ''}`}
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: 'var(--radius-lg)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        border: openFaq === index ? '1px solid var(--accent-purple)' : '1px solid rgba(255,255,255,0.1)',
                                        background: openFaq === index ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)'
                                    }}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '500', fontSize: '1.1rem' }}>
                                        {faq.question}
                                        {openFaq === index ? <ChevronUp size={20} className="text-accent" /> : <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />}
                                    </div>
                                    <div
                                        className="faq-answer"
                                        style={{
                                            maxHeight: openFaq === index ? '200px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.3s ease, margin-top 0.3s ease',
                                            marginTop: openFaq === index ? '1rem' : '0',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="section-padding text-center animate-fade-up delay-200 services-cta" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container relative z-10">
                    <div className="card glass" style={{ padding: '5rem 2rem', background: 'linear-gradient(145deg, rgba(25,25,50,0.9), rgba(10,10,20,0.95))', border: '1px solid rgba(0,210,255,0.3)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--accent-gradient)' }}></div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Ready to Scale Your Business?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                            We thrive on unique challenges. Let's schedule a deep dive into your vision and build exactly what you need.
                        </p>
                        <Link to="/contact" className="btn btn-primary shadow-glow" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Book a Priority Consultation <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
