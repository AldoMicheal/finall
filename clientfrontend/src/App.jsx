// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';



// Import Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppFloat from './components/Layout/WhatsAppFloat'; // Assuming you create this simple component

// Import Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';

// --- Utility Component to handle Scroll-to-Top and Anchor Links ---
const ScrollToTopAndAnchor = () => {
    const location = useLocation();

    useEffect(() => {
        // 1. Handle Anchor Links (like /#jobs)
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
            // Wait for elements to render, then smooth scroll to the target
            setTimeout(() => {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                window.scrollTo({
                    top: element.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            // 2. Default Scroll-to-Top on new page navigation
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);

    return null;
};
// ------------------------------------------------------------------

function App() {
    return (
        <Router>
            {/* The Header and Footer wrap the content and remain visible */}
            <Header />
            
            {/* Utility component for handling scrolling logic */}
            <ScrollToTopAndAnchor /> 

            {/* Main content area based on the route */}
            <Routes>
                {/* Home Page Route */}
                <Route path="/" element={<Home />} />
                
                {/* Converted Static Pages */}
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/service" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Fallback for 404 - You can create a simple 404 page if desired */}
                <Route path="*" element={<Home />} /> 
            </Routes>

            <Footer />
            <WhatsAppFloat />
        </Router>
    );
}

export default App;