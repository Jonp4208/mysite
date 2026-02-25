import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="text-gradient">Calhoun Web Creations</h2>
                        <p>Empowering local businesses and e-commerce stores with premium web design and custom app development.</p>
                        <div className="flex gap-4" style={{ marginTop: '1.5rem' }}>
                            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                <Mail size={18} />
                                <span>jonp4208@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/services" className="footer-link">Services</Link></li>
                            <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services" className="footer-link">Custom Web Design</Link></li>
                            <li><Link to="/services" className="footer-link">E-commerce Solutions</Link></li>
                            <li><Link to="/services" className="footer-link">iOS/Android App</Link></li>
                            <li><Link to="/services" className="footer-link">Lead Generation</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Calhoun Web Creations. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link to="#" className="footer-link">Privacy Policy</Link>
                        <Link to="#" className="footer-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
