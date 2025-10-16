// src/components/Dynamic/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ review }) => {
    const reviewerName = review.name || 'Anonymous';
    const reviewText = review.review_d || 'No review text provided.';
    const authorInitials = reviewerName.charAt(0).toUpperCase();

    return (
        <div className="testimonial-card">
            <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
            </div>
            <p>"{reviewText}"</p> 
            <div className="testimonial-author">
                <div className="author-avatar">{authorInitials}</div>
                <div className="author-info">
                    <h5>{reviewerName}</h5> 
                    {/* Static placeholder for title/location */}
                    <span>Client / Global Placement</span> 
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;