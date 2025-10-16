// src/components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Scroll effect logic
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when navigating
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Function to handle anchor link click (for #jobs)
    const handleAnchorClick = (e, targetId) => {
        if (location.pathname === '/' && targetId) {
            e.preventDefault();
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - document.querySelector('header').offsetHeight - 20,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <header id="header" className={isScrolled ? 'scrolled' : ''}>
            <nav>
                <div className="logo">
                    <Link to="/">
                        {/* Assuming logo.png is in public/asset/ */}
                        <img src="asset/logo.png" alt="Lenhart Global Consultancy Logo" />
                    </Link>
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/aboutus">About</NavLink></li>
                    <li><NavLink to="/service">Services</NavLink></li>
                    {/* Special handling for #jobs: if on home, smooth scroll; otherwise, navigate to home */}
                    <li>
                        <Link 
                            to="/#jobs" 
                            onClick={(e) => handleAnchorClick(e, 'jobs')}
                            className={location.hash === '#jobs' ? 'active' : ''}
                        >
                            Jobs
                        </Link>
                    </li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <button className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
                </button>
            </nav>
        </header>
    );
};

export default Header;