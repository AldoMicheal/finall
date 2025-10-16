// src/pages/Services.jsx (COMPLETE VERSION)
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartnerLogos from '../components/Common/PartnerLogos';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
        // NOTE: Additional JS/Animation logic from service.js would be ported here
    }, []);

    return (
        <main>
            {/* --------------------------------- */}
            {/* 1. Our Services Header Section */}
            {/* --------------------------------- */}
            <section className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Your One-Stop Destination for Comprehensive Guidance,<br/>
                    Customized Solutions, and Expert Support to Ensure a Smooth, Stress-Free, and Successful Transition to Your Dream Destination</p>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 2. Main Service Cards Section */}
            {/* --------------------------------- */}
            <section className="main-services">
                <div className="container">
                    <div className="services-grid-main">
                        <div className="service-card-main">
                            <img src="asset/simage/interview.jpg" alt="Interview Scheduling"/>
                            <div className="service-overlay"><p>Streamlining interviews for seamless hiring.</p><h3>Interview Scheduling</h3></div>
                        </div>
                        <div className="service-card-main verification">
                            <img src="asset/simage/candidates.jpg" alt="Candidate Verification"/>
                            <div className="service-overlay"><p>Ensuring authentic credentials for trusted hiring.</p><h3>Candidate Verification</h3></div>
                        </div>
                        <div className="service-card-main">
                            <img src="asset/simage/doc.jpg" alt="Documentation"/>
                            <div className="service-overlay"><p>Organizing and managing essential records.</p><h3>Documentation</h3></div>
                        </div>
                        <div className="service-card-main">
                            <img src="asset/simage/visa.jpg" alt="Visa Processing"/>
                            <div className="service-overlay"><p>Ensuring seamless handling of all visa-related requirements.</p><h3>Visa Processing</h3></div>
                        </div>
                        <div className="service-card-main">
                            <img src="asset/simage/job.jpg" alt="Job Assistance"/>
                            <div className="service-overlay"><p>Connecting talent with the best global opportunities.</p><h3>Job Assistance</h3></div>
                        </div>
                        <div className="service-card-main">
                            <img src="asset/simage/clear.jpg" alt="PCC"/>
                            <div className="service-overlay"><p>Coordinating and managing PCC applications efficiently.</p><h3>Police Clearnce Certificate</h3></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 3. Visa Types Section */}
            {/* --------------------------------- */}
            <section className="visa-types">
                <div className="container">
                    <h2>Explore Our Visa Services</h2>
                    <p className="subtitle">Comprehensive Visa Solutions for Your Global Journey</p>
                    <div className="visa-grid">
                        <div className="visa-card">
                            <img src="asset/simage/work.jpg" alt="Work Visa"/>
                            <div className="visa-overlay">
                                <span className="visa-category">Work</span><h3>Work Visa</h3>
                                <p>Work visa services streamline documentation, enabling professionals to explore global employment opportunities.</p>
                                <Link to="/contact" className="apply-btn">Apply Now</Link>
                            </div>
                        </div>
                        <div className="visa-card">
                            <img src="asset/simage/study.jpg" alt="Study Visa"/>
                            <div className="visa-overlay">
                                <span className="visa-category">Study</span><h3>Study Visa</h3>
                                <p>Study visa services streamline documentation, enabling students to explore global educational opportunities.</p>
                                <Link to="/contact" className="apply-btn">Apply Now</Link>
                            </div>
                        </div>
                        <div className="visa-card">
                            <img src="asset/simage/business.jpg" alt="Business Visa"/>
                            <div className="visa-overlay">
                                <span className="visa-category">Business</span><h3>Business Visa</h3>
                                <p>Business visa support facilitates smooth documentation, enabling entrepreneurs to explore global markets and seize international opportunities.</p>
                                <Link to="/contact" className="apply-btn">Apply Now</Link>
                            </div>
                        </div>
                        <div className="visa-card">
                            <img src="asset/simage/tourist.jpg" alt="Tourist Visa"/>
                            <div className="visa-overlay">
                                <span className="visa-category">Tourist</span><h3>Tourist Visa</h3>
                                <p>Tourist visa services handle all necessary paperwork for a stress-free international travel experience.</p>
                                <Link to="/contact" className="apply-btn">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 4. Why Choose Work Abroad Section */}
            {/* --------------------------------- */}
            <section className="why-choose">
                <div className="container">
                    <h2>Why Choose Work Abroad?</h2>
                    <p className="subtitle">Global Career Opportunities Made Easy with WorkAbroad</p>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><img src="asset/simage/global.png" alt="Global Reach"/></div>
                            <h3>Global Reach</h3><p>WorkAbroad connects you with top job opportunities across the world, ensuring access to the best roles, no matter where you are.</p><Link to="#" className="learn-more">Learn more →</Link>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><img src="asset/simage/jobmatch.png" alt="Tailored Job Matches"/></div>
                            <h3>Tailored Job Matches</h3><p>We match your skills and aspirations with roles that fit your profile, helping you find the ideal job abroad.</p><Link to="#" className="learn-more">Learn more →</Link>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><img src="asset/simage/support.png" alt="Personalized Support"/></div>
                            <h3>Personalized Support</h3><p>Our team offers expert guidance throughout your job search, from application to placement, ensuring a smooth transition to your new role.</p><Link to="#" className="learn-more">Learn more →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 5. Global Employment Services Section */}
            {/* --------------------------------- */}
            <section className="employment-services">
                <div className="container">
                    <h2>Discover Our Global Employment Services</h2>
                    <p className="intro-text">At <strong>Work Abroad</strong>, we are committed to simplifying your journey toward a successful international career. Our carefully curated range of services ensures that you receive expert guidance and unwavering support at every step of your overseas employment journey. Here's what we offer:</p>
                    <div className="services-list">
                        <div className="service-item"><h3>1. Overseas Job Consultancy</h3><p>We connect skilled professionals with reputable employers across the globe. Whether you're seeking opportunities in healthcare, IT, construction, or other industries, our team ensures you find the right job that matches your skills and aspirations.</p></div>
                        <div className="service-item"><h3>2. Recruitment Solutions for Employers</h3><p>For businesses seeking top talent, our recruitment services are designed to deliver highly skilled and qualified candidates. We handle everything from screening to placement, ensuring a seamless hiring process.</p></div>
                        <div className="service-item"><h3>3. Work Visa Assistance</h3><p>Navigating visa applications can be daunting, but not with us! Our visa experts provide step-by-step assistance to ensure your application is processed smoothly and efficiently.</p></div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 6. Partners (Dynamic Logo Slider) */}
            {/* --------------------------------- */}
            <section className="media-mentions">
                <div className="container">
                    <h2>Our Trusted Business Partners</h2>
                    <div className="logo-slider">
                        <PartnerLogos />
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 7. CTA Section */}
            {/* --------------------------------- */}
            <section className="malaysia-cta">
                <div className="container">
                    <h2>Ready to Migrate <span className="highlight">ABROAD ?</span></h2>
                    <Link to="/contact" className="apply-now-btn">APPLY NOW</Link>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 8. Contact Form Section */}
            {/* --------------------------------- */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-left"><h2>Work Abroad.</h2><h3>Our Services</h3><p>Why Choose Ordinary,<br/>Choose WorkAbroad!!</p></div>
                        <div className="form-right">
                            <h3>Get in <span className="touch-highlight">Touch</span></h3>
                            <form className="contact-form">
                                <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" placeholder="Name" required/></div>
                                <div className="form-group"><label htmlFor="email">Email *</label><input type="email" id="email" name="email" placeholder="Email" required/></div>
                                <div className="form-group"><label htmlFor="country">Country *</label><input type="text" id="country" name="country" placeholder="Country" required/></div>
                                <div className="form-group"><label htmlFor="mobile">Mobile No. *</label><input type="tel" id="mobile" name="mobile" placeholder="Phone" required/></div>
                                <div className="form-group checkbox-group"><label className="checkbox-label"><input type="checkbox" name="terms" required/><span className="checkmark"></span>I agree to terms & conditions</label></div>
                                <div className="form-group checkbox-group"><label className="checkbox-label"><input type="checkbox" name="newsletter"/><span className="checkmark"></span>Subscribe to our newsletter</label></div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;