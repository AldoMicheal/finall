// src/components/Common/ScrollProgress.jsx
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            // Get current vertical scroll position
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            // Calculate the total scrollable height (total height - viewport height)
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            
            let scrollPercent = 0;
            if (scrollHeight > 0) {
                // Calculate percentage, matching the logic in your original script.js
                scrollPercent = (scrollTop / scrollHeight) * 100;
            }
            
            setProgress(scrollPercent);
        };

        // Event listener setup from original JS
        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Run once on mount

        // Cleanup
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        // Replicates the original HTML structure and class
        <div 
            id="scrollProgress" 
            className="scroll-progress"
            // Applies the calculated width dynamically via React state
            style={{ width: `${progress}%` }}
        />
    );
};

export default ScrollProgress;