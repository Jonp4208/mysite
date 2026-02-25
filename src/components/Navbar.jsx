import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <h1 className="text-gradient">Calhoun Web</h1>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book Consultation</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
