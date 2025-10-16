// src/pages/AboutUs.jsx (COMPLETE VERSION)
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // NOTE: Additional JS/Animation logic from aboutus.js would be ported here
    }, []);

    return (
        <main>
            {/* --------------------------------- */}
            {/* 1. Hero Section */}
            {/* --------------------------------- */}
            <section className="hero">
                <div className="hero-particles" id="heroParticles"></div>
                <div className="hero-content">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <i className="fas fa-chevron-right"></i>
                        <span>About Us</span>
                    </div>
                    <h1>About Lenhart Global Consultancy</h1>
                    <p className="hero-subtitle">Empowering dreams and transforming careers across the globe since our inception</p>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 2. Company Overview */}
            {/* --------------------------------- */}
            <section className="company-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <div className="section-badge">
                                <i className="fas fa-building"></i>
                                <span>Our Story</span>
                            </div>
                            <h2>Your Trusted Partner in Global Career Success</h2>
                            <p>Founded with a vision to bridge the gap between talented professionals and international opportunities, Leart Global Consultancy has emerged as a leading force in the global recruitment and migration industry.</p>
                            <p>Our journey began with a simple belief: that talent knows no borders, and every skilled professional deserves the opportunity to pursue their dreams on a global stage. Today, we stand proud as facilitators of over 1000+ successful international career transitions.</p>
                            
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-number" data-target="1000">1000</div>
                                    <div className="stat-label">Successful Placements</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" data-target="20">20</div>
                                    <div className="stat-label">Countries Served</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" data-target="95">95</div>
                                    <div className="stat-label">Success Rate %</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" data-target="5">5</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                            </div>
                        </div>
                        <div className="overview-image">
                            <div className="image-placeholder">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 3. Mission Vision Values */}
            {/* --------------------------------- */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mvv-grid">
                        <div className="mvv-card mission">
                            <div className="mvv-icon"><i className="fas fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>To democratize global opportunities by making international career transitions seamless, accessible, and successful for skilled professionals worldwide. We strive to eliminate barriers and create pathways to global success.</p>
                        </div>
                        <div className="mvv-card vision">
                            <div className="mvv-icon"><i className="fas fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To become the world's most trusted and comprehensive platform for international career development, where every professional can access global opportunities regardless of their geographical location.</p>
                        </div>
                        <div className="mvv-card values">
                            <div className="mvv-icon"><i className="fas fa-heart"></i></div>
                            <h3>Our Values</h3>
                            <p>Integrity, Excellence, Innovation, and Inclusivity form the cornerstone of our operations. We believe in transparent processes, continuous improvement, and creating equal opportunities for all.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 4. Director's Message */}
            {/* --------------------------------- */}
            <section className="director-message">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge"><i className="fas fa-quote-left"></i><span>A Message From Our Director</span></div>
                        <h2>Shaping a Successful Future, Together</h2>
                    </div>
                    <div className="message-content">
                        <div className="director-photo">
                            {/* Assuming owner.jpeg is in public/asset/ */}
                            <img src="asset/owner.jpeg" alt="Lenin Lopez, Managing Partner"/>
                        </div>
                        <div className="director-text">
                            <h3>Welcome to Lenhart Global Consultancy.</h3>
                            <blockquote>
                                <p>In today’s rapidly evolving world, businesses need more than just strategies — they need trusted partners who understand their vision, anticipate challenges, and deliver sustainable solutions. At Lenhart Global Consultancy, we take pride in being that partner.</p>
                                <p>Our journey began with a clear mission: to empower organizations around the world to achieve growth through innovation, expertise, and integrity. Over the years, we have built a strong reputation for excellence, helping clients navigate complex global markets with confidence and clarity.</p>
                                <p>What sets us apart is our people. Our team of dedicated professionals brings deep industry knowledge, global perspective, and a passion for driving real results. Together, we create impactful solutions that inspire change and build lasting value.</p>
                                <p>As we look to the future, we remain committed to our core values — excellence, trust, and innovation. We will continue to expand our global reach, embrace new technologies, and help businesses thrive in an ever-changing landscape.</p>
                                <p>Thank you for choosing Lenhart Global Consultancy as your trusted consultancy partner. We look forward to shaping a successful future — together.</p>
                            </blockquote>
                            <div className="signature">
                                <p>Warm regards,</p>
                                <p className="director-name">Lenin Lopez</p>
                                <p className="director-title">Managing Partner, Lenhart Global Consultancy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 5. Why Choose Us */}
            {/* --------------------------------- */}
            <section className="why-choose-us">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge"><i className="fas fa-star"></i><span>Why Choose Us</span></div>
                        <h2>What Sets Us Apart</h2>
                        <p>Discover the unique advantages that make Leart Global Consultancy the preferred choice for international career development.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item"><div className="feature-icon"><i className="fas fa-globe-americas"></i></div><h4>Global Network</h4><p>Extensive partnerships with employers and institutions across 20+ countries, ensuring diverse opportunities for our clients.</p></div>
                        <div className="feature-item"><div className="feature-icon"><i className="fas fa-certificate"></i></div><h4>Certified Experts</h4><p>Our team consists of certified immigration consultants, career coaches, and recruitment specialists with proven track records.</p></div>
                        <div className="feature-item"><div className="feature-icon"><i className="fas fa-handshake"></i></div><h4>Personalized Service</h4><p>Every client receives individualized attention with customized solutions tailored to their specific career goals and circumstances.</p></div>
                        <div className="feature-item"><div className="feature-icon"><i className="fas fa-clock"></i></div><h4>24/7 Support</h4><p>Round-the-clock assistance throughout your journey, from initial consultation to successful placement and beyond.</p></div>
                        <div className="feature-item"><div className="feature-icon"><i className="fas fa-shield-alt"></i></div><h4>Guaranteed Results</h4><p>Our 95% success rate speaks for itself. We're committed to achieving positive outcomes for every client we serve.</p></div>
                        <div className="feature-item"><div className="feature-icon"><i className="fas fa-graduation-cap"></i></div><h4>Continuous Learning</h4><p>We provide ongoing training and development opportunities to ensure our clients remain competitive in the global market.</p></div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 6. Timeline Section */}
            {/* --------------------------------- */}
            <section className="timeline-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge"><i className="fas fa-history"></i><span>Our Journey</span></div>
                        <h2>Milestones & Achievements</h2>
                        <p>A timeline of our growth and the key milestones that have shaped our journey to becoming a global leader.</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item"><div className="timeline-date">2020</div><div className="timeline-content"><h4>Company Founded</h4><p>Lenhart Global Consultancy was established with a vision to connect global talent with international opportunities.</p></div></div>
                        <div className="timeline-item"><div className="timeline-date">2021</div><div className="timeline-content"><h4>First 100 Placements</h4><p>Successfully placed our first 100 professionals in various countries, establishing our reputation for excellence.</p></div></div>
                        <div className="timeline-item"><div className="timeline-date">2022</div><div className="timeline-content"><h4>International Expansion</h4><p>Expanded our services to 15+ countries and established partnerships with leading global employers.</p></div></div>
                        <div className="timeline-item"><div className="timeline-date">2023</div><div className="timeline-content"><h4>La Travlin Partnership</h4><p>Launched our travel services division to provide comprehensive relocation support for our clients.</p></div></div>
                        <div className="timeline-item"><div className="timeline-date">2024</div><div className="timeline-content"><h4>1000+ Success Stories</h4><p>Celebrated our 1000th successful placement, marking a significant milestone in our journey.</p></div></div>
                        <div className="timeline-item"><div className="timeline-date">2025</div><div className="timeline-content"><h4>Future Vision</h4><p>Continuing to innovate and expand our services to serve professionals across 25+ countries worldwide.</p></div></div>
                    </div>
                </div>
            </section>
            
            {/* --------------------------------- */}
            {/* 7. CTA Section */}
            {/* --------------------------------- */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Global Career Journey?</h2>
                        <p>Join thousands of professionals who have transformed their careers with Leart Global Consultancy. Your international dream is just one consultation away.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary"><i className="fas fa-calendar"></i>Book Free Consultation</Link>
                            <Link to="/service" className="btn btn-secondary"><i className="fas fa-arrow-left"></i>Explore Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;