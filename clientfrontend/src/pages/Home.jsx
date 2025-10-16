// src/pages/Home.jsx (COMPLETE VERSION)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs, fetchReviews, fetchBanners } from '../api/api';
import JobCard from '../components/Dynamic/JobCard';
import TestimonialCard from '../components/Dynamic/TestimonialCard';
import PartnerLogos from '../components/Common/PartnerLogos';
import HeroBannerSlider from '../components/Dynamic/HeroBannerSlider';
import ScrollProgress from '../components/Common/ScrollProgress'; 

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch Jobs and Reviews on mount
        Promise.all([fetchJobs(), fetchReviews()]).then(([jobData, reviewData]) => {
            setJobs(jobData);
            setReviews(reviewData);
            setLoading(false);
        }).catch(err => {
            console.error("Failed to load initial data:", err);
            setLoading(false); // Still stop loading even if API fails
        });
    }, []);

    // Placeholder for loading overlay logic
    if (loading) {
        return (
            <div className="loading-overlay" style={{display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #ed1c24, #cc1b21)', zIndex: 9999, alignItems: 'center', justifyContent: 'center'}}>
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <main>
            <ScrollProgress />
            
            {/* --------------------------------- */}
            {/* 1. Hero Section (Dynamic Banner) */}
            {/* --------------------------------- */}
            <section id="home" className="hero">
                <HeroBannerSlider />
            </section>

            {/* --------------------------------- */}
            {/* 2. About Section (Static JSX) */}
            {/* --------------------------------- */}
            <section id="about" className="about">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-star"></i>
                            <span>About Us</span>
                        </div>
                        <h2 className="section-title">Your Gateway to Global Career Opportunities</h2>
                        <p className="section-subtitle">Connecting skilled professionals with international jobs, visas, and travel solutions all under one roof. Our comprehensive services simplify your journey to a thriving international career.</p>
                    </div>

                    <div className="about-content">
                        <div className="about-text">
                            <h3>Who We Are & What We Do</h3>
                            <p>Lenhart Global Consultancy stands as a premier bridge between ambitious job seekers and leading international employers. We don't just find you a job; we pave your entire path to a new life abroad.</p>
                            <p>With our extensive network spanning 20+ countries and a track record of 1000+ successful placements, we're your trusted partner in achieving global career success.</p>
                        </div>
                        <div className="about-text">
                            <h3>Our Mission</h3>
                            <p>To democratize global opportunities by making international career transitions seamless, accessible, and successful for skilled professionals worldwide.</p>
                            <p>We believe that talent knows no borders, and every professional deserves the chance to pursue their dreams on a global stage.</p>
                        </div>
                    </div>
                    
                    <div className="features">
                        <div className="feature-card">
                            <div className="icon">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h4>Global Placement Experts</h4>
                            <p>Specializing in overseas job placements and skilled migration support, connecting you with opportunities across 20+ countries with our verified partner network.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <h4>Seamless Transition Support</h4>
                            <p>From comprehensive visa assistance and expert career training to international travel arrangements via our La Travlin service, we handle every detail of your journey.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h4>Proven Track & Results</h4>
                            <p>With over 1000 professionals successfully placed worldwide and a 95% success rate, your international dream is not just possible—it's probable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 3. Services Section (Static JSX) */}
            {/* --------------------------------- */}
            <section id="services" className="services">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-cogs"></i>
                            <span>Our Services</span>
                        </div>
                        <h2 className="section-title">Comprehensive Services</h2>
                        <p className="section-subtitle">Lenhart Global Consultancy offers a full spectrum of services designed to facilitate your successful transition to an international career.</p>
                    </div>
                    
                    <div className="services-grid">
                        <div className="service-card"><h4>Job Placement Abroad</h4><p>Connecting you with exclusive international job openings tailored to your skills and aspirations. Our partnerships with leading global employers ensure quality opportunities.</p></div>
                        <div className="service-card"><h4>Visa Consultation</h4><p>Expert guidance through complex visa applications, ensuring a smooth and compliant process. Our visa specialists have a 98% approval rate.</p></div>
                        <div className="service-card"><h4>Skilled Migration Support</h4><p>Comprehensive assistance with immigration pathways for skilled professionals seeking permanent residency abroad through various skilled migration programs.</p></div>
                        <div className="service-card"><h4>Interview Training</h4><p>Hone your interview skills with personalized coaching sessions designed to help you excel in international hiring processes and cultural nuances.</p></div>
                        <div className="service-card"><h4>La Travlin: International Tours</h4><p>Exclusive travel packages for relocation and leisure, ensuring a comfortable arrival in your new home with our sister company's premium services.</p></div>
                        <div className="service-card"><h4>Resume & Language Coaching</h4><p>Craft compelling international-standard resumes and enhance language proficiency for global employment success with our certified coaches.</p></div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 4. Testimonials (Dynamic Reviews) */}
            {/* --------------------------------- */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-quote-left"></i>
                            <span>Success Stories</span>
                        </div>
                        <h2 className="section-title" style={{color: 'white'}}>Your Success, Our Story</h2>
                        <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>Hear directly from professionals who achieved their global career aspirations with Lenhart Global Consultancy.</p>
                    </div>
                    
                    <div className="testimonials-grid">
                        {reviews.length > 0 ? (
                            reviews.map(review => <TestimonialCard key={review._id} review={review} />)
                        ) : (
                            <p style={{textAlign: 'center', color: 'white', width: '100%'}}>Be the first to leave a review!</p>
                        )}
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 5. Countries Section (Static JSX) */}
            {/* --------------------------------- */}
            <section className="countries">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-map"></i>
                            <span>Global Reach</span>
                        </div>
                        <h2 className="section-title">Countries We Empower</h2>
                        <p className="section-subtitle">Our extensive network spans the globe, connecting you with premier opportunities in diverse and welcoming nations. Explore the possibilities!</p>
                    </div>

                    <div className="countries-grid">
                        <div className="country-card"><div className="flag"><img src="asset/flags/canada.png" alt="Canada Flag"/></div><h4>Canada</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/germany.png" alt="Germany Flag"/></div><h4>Germany</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/australia.png" alt="Australia Flag"/></div><h4>Australia</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/uk.png" alt="UK Flag"/></div><h4>United Kingdom</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/italy.png" alt="Italy Flag"/></div><h4>Italy</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/singapore.png" alt="Singapore Flag"/></div><h4>Singapore</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/nz.png" alt="New Zealand Flag"/></div><h4>New Zealand</h4></div>
                        <div className="country-card"><div className="flag"><img src="asset/flags/uae.png" alt="UAE Flag"/></div><h4>UAE</h4></div>
                        <h1>And Many More.</h1>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
           { /* 6. Jobs Section (Dynamic Job Cards) */
            /* --------------------------------- */}
            <section id="jobs" className="jobs">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-briefcase"></i>
                            <span>Current Openings</span>
                        </div>
                        <h2 className="section-title">Global Job Openings</h2>
                        <p className="section-subtitle">Discover your next international career move. Filter by country, industry, and experience level to find your perfect match.</p>
                    </div>
                    
                    <div className="jobs-grid">
                        {jobs.length > 0 ? (
                            jobs.map(job => <JobCard key={job._id} job={job} />)
                        ) : (
                            <p style={{textAlign: 'center', width: '100%'}}>We have no current job openings.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* 7. Industries Section (Static Slider JSX) */
            /* --------------------------------- */}
            <section className="industries">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-industry"></i>
                            <span>Our Expertise</span>
                        </div>
                        <h2 className="section-title">Industries We Serve</h2>
                        <p className="section-subtitle">From skilled trades to specialized professions, we connect talent to global industries.</p>
                    </div>
                    <div className="industry-slider">
                        <div className="industry-track">
                            {/* Duplicated list for infinite scroll effect (Original HTML structure maintained) */}
                            <div className="industry-card"><img src="asset/industries/welder.png" alt="Welder"/><h4>Welding</h4></div>
                            <div className="industry-card"><img src="asset/industries/plumber.jpg" alt="Plumber"/><h4>Plumbing</h4></div>
                            <div className="industry-card"><img src="asset/industries/fabricator.jpg" alt="Fabricator"/><h4>Fabrication</h4></div>
                            <div className="industry-card"><img src="asset/industries/painter.jpg" alt="Spray Painter"/><h4>Spray Painter</h4></div>
                            <div className="industry-card"><img src="asset/industries/electrician.jpg" alt="Electrician"/><h4>Electrical</h4></div>
                            <div className="industry-card"><img src="asset/industries/oil.jpg" alt="Oil & Refinery"/><h4>Oil Refineries</h4></div>
                            <div className="industry-card"><img src="asset/industries/Logistics.jpg" alt="Logistics"/><h4>Logistics</h4></div>
                            <div className="industry-card"><img src="asset/industries/construction.jpg" alt="construction"/><h4>construction</h4></div>
                            <div className="industry-card"><img src="asset/industries/welder.png" alt="Welder"/><h4>Welding</h4></div>
                            <div className="industry-card"><img src="asset/industries/plumber.jpg" alt="Plumber"/><h4>Plumbing</h4></div>
                            <div className="industry-card"><img src="asset/industries/fabricator.jpg" alt="Fabricator"/><h4>Fabrication</h4></div>
                            <div className="industry-card"><img src="asset/industries/painter.jpg" alt="Spray Painter"/><h4>Spray Painter</h4></div>
                            <div className="industry-card"><img src="asset/industries/electrician.jpg" alt="Electrician"/><h4>Electrical</h4></div>
                            <div className="industry-card"><img src="asset/industries/oil.jpg" alt="Oil & Refinery"/><h4>Oil Refineries</h4></div>
                            <div className="industry-card"><img src="asset/industries/Logistics.jpg" alt="Logistics"/><h4>Logistics</h4></div>
                            <div className="industry-card"><img src="asset/industries/construction.jpg" alt="construction"/><h4>Construction</h4></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --------------------------------- */}
            {/* 8. Contact Section (Static JSX) */
            /* --------------------------------- */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <i className="fas fa-phone"></i>
                            <span>Get In Touch</span>
                        </div>
                        <h2 className="section-title" style={{color: 'white'}}>Book Your Free Consultation</h2>
                        <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>Ready to take the first step towards your international career? Contact us today for a personalized, no-obligation consultation.</p>
                    </div>
                    
                    <div className="contact-info">
                        <div className="contact-item"><i className="fas fa-map-marker-alt"></i><h4>Visit Us</h4><p>Shiyas Tower, Pravachambalam<br/>Trivandrum, Kerala</p></div>
                        <div className="contact-item"><i className="fas fa-phone"></i><h4>Call Us</h4><p>+91 92073 09005<br/>+91 97449 00508<br/>Available 24/7</p></div>
                        <div className="contact-item"><i className="fas fa-envelope"></i><h4>Email Us</h4><p>workabroadwithlenhart@gmail.com<br/>support@leartglobal.com</p></div>
                    </div>
                </div>
            </section>
            
            {/* --------------------------------- */}
           { /* 9. Partners (Dynamic Logo Slider) */}
            {/* --------------------------------- */}
            <section className="media-mentions">
                <div className="container">
                    <h2>Our Trusted Business Partners</h2>
                    <div className="logo-slider">
                        <PartnerLogos />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;