// src/components/Dynamic/HeroBannerSlider.jsx (FINAL FIX for visibility)

import React, { useState, useEffect } from 'react';
import { fetchBanners } from '../../api/api';
import { Link } from 'react-router-dom'; 

const InitialBannerContent = () => (
    // This is the static content layer that needs to disappear
    <div className="hero-content">
        <div className="hero-badge floating">
            <i className="fas fa-globe"></i>
            <span>Trusted by 1000+ Professionals Worldwide</span>
        </div>
        <h1>Lenhart Global Consultancy</h1>
        <p className="hero-subtitle">Empowering Dreams. Globally.</p>
        <div className="cta-buttons">
            <Link to="#jobs" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Get Hired Abroad
            </Link>
            <Link to="#services" className="btn btn-secondary">
                <i className="fas fa-compass"></i>
                Explore Our Services
            </Link>
        </div>
    </div>
);


const HeroBannerSlider = () => {
    const [banners, setBanners] = useState([]);
    const [showSlider, setShowSlider] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBanners().then(data => {
            setBanners(data);
            setLoading(false);
        });

        const initialTimer = setTimeout(() => {
            // If data is present, start the slider after 5s
            if (banners.length > 0) {
                 setShowSlider(true);
            }
        }, 5000);

        return () => clearTimeout(initialTimer);
    }, [banners.length]); 

    // useEffect(() => {
    //     if (!showSlider || banners.length === 0) return;

    //     // Set up the sliding interval (5 seconds total cycle time per banner)
    //     const slideInterval = setInterval(() => {
    //         setIsAnimating(true); 

    //         setTimeout(() => {
    //             setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    //             setIsAnimating(false);
    //         }, 500); // Wait for animation to initiate before changing index

    //     }, 5000); 

    //     return () => clearInterval(slideInterval);
    // }, [showSlider, banners.length]);
    // src/components/Dynamic/HeroBannerSlider.jsx (FINAL SYNCHRONIZATION)

// ... (All imports, states, and the first useEffect remain the same) ...

useEffect(() => {
    if (!showSlider || banners.length === 0) return;

    // Set up the sliding interval (5 seconds total cycle time per banner)
    const slideInterval = setInterval(() => {
        // 1. Force Rerender (to trigger new animation instance)
        setIsAnimating(true); 

        // 2. Schedule the next index change and animation reset 
        //    to happen EXACTLY when the 5s interval completes.
        setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
            setIsAnimating(false); // Reset animation state
        }, 4900); // Fired just before the 5000ms mark

    }, 5000); // The full animation and hold time

    return () => clearInterval(slideInterval);
}, [showSlider, banners.length]);
    
    // Fallback: If still loading or no data, show initial content.
    if (loading || banners.length === 0) {
         return <InitialBannerContent />;
    }
    
    // --- Render Slider and/or Static Content ---
    const currentBanner = banners[currentIndex];
    
    return (
        // The hero section's content wrapper
        <React.Fragment> 
            {/* RENDER STATIC CONTENT ONLY IF SLIDER HAS NOT STARTED */}
            {!showSlider && <InitialBannerContent />}

            {/* RENDER SLIDER CONTAINER ALWAYS, BUT ONLY ACTIVATE IF READY */}
            {showSlider && (
                <div className="banner-slider-container">
                    <div 
                        key={currentIndex} 
                        className={`current-banner ${isAnimating ? 'slide-active' : ''}`}
                        style={{
                            backgroundImage: `url(${currentBanner.image})`,
                            // Ensure it does not inherit the dark background from the red hero section
                            backgroundColor: 'transparent' 
                        }}
                    >
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default HeroBannerSlider;