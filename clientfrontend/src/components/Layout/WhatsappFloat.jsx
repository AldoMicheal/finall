// src/components/Layout/WhatsAppFloat.jsx
import React from 'react';

const WhatsAppFloat = () => {
    const whatsappLink = "https://wa.me/919207309005?text=Hello%2C%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more.";
    
    return (
        <a 
          href={whatsappLink} 
          className="whatsapp-float" 
          aria-label="Chat with us on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppFloat;