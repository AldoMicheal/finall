// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Lenhart Global Consultancy</h4>
                        <p>Empowering dreams globally through expert consultancy services. Your trusted partner for international opportunities.</p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1CeQBsGxGv/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/lenhart-global-consultancy-247621358/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/lenhart_global_consultancy?igsh=Zmh6Y2JoajR3ZHY3" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/service">Services</Link>
                        <Link to="/#jobs">Jobs</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Services</h4>
                        <Link to="/service">Job Placement</Link>
                        <Link to="/service">Visa Consultation</Link>
                        <Link to="/service">Study Abroad</Link>
                        <Link to="/service">Immigration</Link>
                        <Link to="/service">Professional Training</Link>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <p><i className="fas fa-map-marker-alt"></i>Shiyas Tower 1st Floor Pravachambalam,Trivandrum,India</p>
                        <p><i className="fas fa-phone"></i> +91 92073 09005<br/>+91 97449 00508</p>
                        <p><i className="fas fa-envelope"></i><a href="mailto:workabroadwithlenhart@gmail.com">workabroadwithlenhart@gmail.com</a></p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2024 Lenhart Global Consultancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;