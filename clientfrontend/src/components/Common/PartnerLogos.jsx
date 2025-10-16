// src/components/Common/PartnerLogos.jsx
import React, { useState, useEffect } from 'react';
import { fetchLogos } from '../../api/api';

const PartnerLogos = () => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLogos().then(data => {
            // Duplicate the logos array to create the seamless loop
            if (data.length > 0) {
                 setLogos([...data, ...data]);
            }
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading Partners...</div>;
    if (logos.length === 0) return null; // Hide the section if no logos

    // NOTE: The CSS animation (scrollLogos keyframe) and layout logic 
    // are entirely handled by the classes: .logo-slider and .media-logos
    return (
        <div className="logo-slider">
            <div className="media-logos">
                {logos.map((logo, index) => (
                    // The logo.image holds the Base64 string from your backend
                    <div className="media-logo" key={index}> 
                        <img 
                            src={logo.image} 
                            alt={logo.name || `Partner Logo ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerLogos;