import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import gymSableImg from '../assets/gym_sable.png';
import pinkLabImg from '../assets/pink_lab.png';
import forgeTrainerImg from '../assets/forge_trainer.png';
import ldGrowthImg from '../assets/ld_growth.png';

const Portfolio = () => {
    const projects = [
        {
            title: "The Pink Label",
            url: "https://pinklab.vercel.app/",
            description: "A chic, modern e-commerce storefront for a boutique fashion brand featuring modern styles with a southern twist.",
            challenge: "The client needed an elegant transition from a brick-and-mortar boutique to a scalable, user-friendly online shopping experience.",
            solution: "Designed and developed a responsive, fast-loading e-commerce platform that highlights their trendy collections and drives higher conversion rates.",
            tags: ["E-commerce", "Fashion", "React"],
            color: "#e83e8c", // Matched to the brand's primary pink
            image: pinkLabImg
        },
        {
            title: "Forge Trainer",
            url: "https://forge-trainer.com/",
            description: "A comprehensive application for personal trainers to manage clients, routines, and track real-time progress.",
            challenge: "Trainers were managing clients across spreadsheets, text messages, and multiple apps, leading to lost revenue and poor client retention.",
            solution: "Built an all-in-one SaaS dashboard serving as a single source of truth for scheduling, custom workout programming, and client analytics.",
            tags: ["SaaS", "Dashboard", "E-commerce"],
            color: "var(--accent-purple)",
            image: forgeTrainerImg
        },
        {
            title: "LD Growth",
            url: "https://ld-growth.com/",
            description: "A corporate landing page focused on lead generation and highlighting B2B growth services with an elegant UI.",
            challenge: "The agency's legacy site was failing to convert high-ticket B2B traffic into booked consultations due to an outdated and confusing layout.",
            solution: "Redesigned a conversion-optimized marketing site featuring clear value propositions, trust signals, and integrated scheduling.",
            tags: ["Lead Gen", "Corporate", "SEO"],
            color: "#00d2ff",
            image: ldGrowthImg
        }
    ];

    return (
        <div className="portfolio-page">
            <SEO
                title="Our Portfolio"
                description="Explore our recent projects, including custom high-ticket e-commerce storefronts, B2B lead generation corporate sites, and specialized digital dashboards."
            />
            <section className="section-padding text-center" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <h1 className="text-gradient animate-fade-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>Our Selected Work</h1>
                    <p className="animate-fade-up delay-100" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', marginBottom: '4rem' }}>
                        We've helped businesses across various industries transform their digital presence. Here are a few highlights.
                    </p>

                    <div className="grid" style={{ gridTemplateColumns: 'minmax(320px, 1fr)', gap: '4rem', textAlign: 'left' }}>
                        {projects.map((project, index) => (
                            <div key={index} className="card animate-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', padding: '0', overflow: 'hidden', animationDelay: `${(index + 2) * 100}ms` }}>

                                {/* Image Section */}
                                <div style={{ position: 'relative', height: '100%', minHeight: '400px', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
                                    <img
                                        src={project.image}
                                        alt={`${project.title} Screenshot`}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto' }}
                                    />
                                </div>

                                {/* Content Section */}
                                <div style={{ padding: '3rem 3rem 3rem 0', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h3>

                                    <div className="flex gap-2" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        {project.description}
                                    </p>

                                    <div style={{ marginBottom: '2rem', flex: 1 }}>
                                        <h4 style={{ color: project.color, marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The Challenge</h4>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.challenge}</p>

                                        <h4 style={{ color: project.color, marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The Solution</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.solution}</p>
                                    </div>

                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
                                        Visit Live Website <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding text-center" style={{ background: 'var(--bg-secondary)', marginTop: '2rem' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Like What You See?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Let's add your project to our portfolio of success stories.</p>
                    <Link to="/contact" className="btn btn-primary">Start Your Project <ArrowRight size={20} /></Link>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
