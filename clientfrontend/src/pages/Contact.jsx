// src/pages/Contact.jsx (COMPLETE VERSION)
import React, { useState, useEffect } from 'react';
import { submitContactForm } from '../api/api'; 

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setStatusMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');

        // The logic for handling form submission (using your placeholder API helper)
        const result = await submitContactForm(formData); 

        if (result.success) {
            setStatusMessage('Message sent successfully! We will contact you soon.');
            setFormData({ name: '', email: '', phone: '', country: '', message: '' });
        } else {
            setStatusMessage(`Failed to send message: ${result.message}`);
        }
        setIsSubmitting(false);
    };

    return (
        <main>
            {/* --------------------------------- */}
            {/* 1. Hero Contact Section */}
            {/* --------------------------------- */}
            <section className="hero-contact">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Lenhart Global Consultancy.</h1>
                            <h2>Mission Zero Defect</h2>
                            <p>Why Choose Ordinary,<br/>Choose Lenhart Global!</p>
                        </div>
                        <div className="contact-form-card">
                            <h3>Get in Touch</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                <select name="country" value={formData.country} onChange={handleChange} required>
                                    <option value="">Select Country</option>
                                    <option value="canada">Canada</option>
                                    <option value="germany">Germany</option>
                                    <option value="australia">Australia</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="usa">United States</option>
                                    <option value="Other">Other</option>
                                </select>
                                <textarea name="message" placeholder="Message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                                
                                <label className="checkbox-label">
                                    <input type="checkbox" required/>
                                    <span>I agree to terms & conditions</span>
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox"/>
                                    <span>Subscribe to our newsletter</span>
                                </label>
                                
                                {statusMessage && <p style={{color: statusMessage.includes('success') ? 'green' : 'red', fontWeight: 'bold'}}>{statusMessage}</p>}
                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 2. Contact Information Section (Static HTML converted to JSX) */}
            {/* --------------------------------- */}
            <section className="contact-info">
                <div className="container">
                    <div className="contact-info-content">
                        <div className="info-text">
                            <h2>Feel Free To Enquire About Any Questions You Got</h2>
                            <div className="map-placeholder">
                                <img src="/placeholder.svg?height=300&width=400" alt="Global Locations Map"/>
                                <div className="location-info">
                                    <p><i className="fas fa-map-marker-alt"></i>Shiyas Tower 1st Floor Pravachambalam,Trivandrum</p>
                                    <p><i className="fas fa-phone"></i> +91 92073 09005,+91 97449 00508</p>
                                </div>
                            </div>
                        </div>
                        <div className="message-form-card">
                            <h3>Send a message</h3>
                            <form className="message-form" id="messageForm">
                                <input type="text" placeholder="Full Name" required/>
                                <input type="email" placeholder="Email Address" required/>
                                <input type="tel" placeholder="Phone Number" required/>
                                <select required>
                                    <option value="">Select Service</option>
                                    <option value="job-placement">Job Placement</option>
                                    <option value="visa-consultation">Visa Consultation</option>
                                    <option value="study-abroad">Study Abroad</option>
                                    <option value="immigration">Immigration Support</option>
                                </select>
                                <textarea placeholder="Your Message" rows="4" required></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --------------------------------- */}
            {/* 3. Full Width Map */}
            {/* --------------------------------- */}
            <section className="full-width-map">
                <iframe 
                    className="location-maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15684.090620138952!2d76.94098993886567!3d8.485122709141006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a5a1b329c323%3A0x6b701265f9797d74!2sPravachambalam%2C%20Thiruvananthapuram%2C%20Kerala%20695020%2C%20India!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                    width="800" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>

            {/* --------------------------------- */}
            {/* 4. CTA Section */}
            {/* --------------------------------- */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Start Your Global Career Journey?</h2>
                    <button className="cta-btn">APPLY NOW</button>
                </div>
            </section>
        </main>
    );
};

export default Contact;