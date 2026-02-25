import React from 'react';
import { Link } from 'react-router-dom';
import { MonitorSmartphone, ShoppingCart, TrendingUp, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <SEO
                title="Web Design & App Development"
                description="Calhoun Web Creations builds premium, high-converting digital storefronts and custom web apps for ambitious businesses in the local area and beyond."
            />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-glow"></div>
                <div className="container">
                    <h1 className="hero-title animate-fade-up">
                        Digital Experiences That <br />
                        <span className="text-gradient">Drive Results</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-up delay-100">
                        Premium web design and custom app development for local businesses and ambitious e-commerce brands.
                        We build platforms that look stunning and convert visitors into loyal customers.
                    </p>
                    <div className="hero-ctas animate-fade-up delay-200">
                        <Link to="/contact" className="btn btn-primary">
                            Book a Free Consultation
                        </Link>
                        <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '0.75rem 2.5rem' }}>
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Proof / Trust Section */}
            <section className="trust-section animate-fade-up delay-300">
                <div className="container">
                    <p className="text-center" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Trusted by growing businesses
                    </p>
                    <div className="trust-badges flex justify-center gap-6 flex-wrap" style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div className="badge flex items-center gap-2 text-secondary"><ShieldCheck size={20} color="var(--accent-blue)" /> Enterprise Security</div>
                        <div className="badge flex items-center gap-2 text-secondary"><Zap size={20} color="var(--accent-purple)" /> Lightning Fast PWAs</div>
                        <div className="badge flex items-center gap-2 text-secondary"><Users size={20} color="#00d2ff" /> Conversion Optimized</div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <h2 className="section-title">What We Do Best</h2>
                        <p className="section-subtitle">
                            We specialize in creating digital solutions that elevate your brand and streamline your business operations.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="card animate-fade-up delay-100">
                            <div className="service-icon">
                                <MonitorSmartphone size={32} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Custom Web Design</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Beautiful, responsive, and blazing-fast websites tailored to your brand identity. We ensure an optimal user experience across all devices.
                            </p>
                        </div>

                        <div className="card animate-fade-up delay-200">
                            <div className="service-icon">
                                <ShoppingCart size={32} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>E-commerce Solutions</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                High-converting online stores built for growth. From seamless checkouts to inventory management, we power your digital retail.
                            </p>
                        </div>

                        <div className="card animate-fade-up delay-300">
                            <div className="service-icon">
                                <TrendingUp size={32} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>App Development</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Powerful iOS, Android, and web applications that solve complex problems and provide your customers with immense value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding text-center">
                <div className="container animate-fade-up">
                    <h2 className="section-title">Ready to Elevate Your Business?</h2>
                    <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                        Let's discuss how we can help you achieve your digital goals.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Start Your Project <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
