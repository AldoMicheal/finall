// src/components/Dynamic/JobCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const JobCard = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    // Fallbacks to handle missing backend fields gracefully
    const jobTitle = job.name || 'Job Title Not Provided';
    const jobCountry = job.country || 'Global';
    const jobSalary = job.salary || 'Competitive';
    const jobType = job.type || 'Full-time';
    const jobDescription = job.description || 'No detailed description available.';

    return (
        <div className={`job-card ${isOpen ? 'open' : ''}`}>
            <div className="job-header">
                <div className="job-info">
                    <h4>{jobTitle}</h4> 
                    <div className="job-location">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{jobCountry}</span>
                    </div>
                </div>
                <div className="job-apply">
                    {/* Updated to use Link for React Router */}
                    <Link to="/contact" className="btn btn-primary btn-small">Apply Now</Link>
                </div>
            </div>
            <div className="job-meta">
                <div className="meta-item">
                    <i className="fas fa-money-bill-wave"></i>
                    <span>{jobSalary}</span> 
                </div>
                <div className="meta-item">
                    <i className="fas fa-briefcase"></i>
                    <span>{jobType}</span> 
                </div>
            </div>
            <div className="job-description">
                <p>{jobDescription}</p> 
            </div>
            <button className="job-toggle" onClick={toggleDescription}>
                {isOpen ? 'Read Less' : 'Read More'} 
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </button>
        </div>
    );
};

export default JobCard;