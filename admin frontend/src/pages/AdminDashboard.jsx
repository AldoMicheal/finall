// src/pages/AdminDashboard.jsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import JobManagement from '../components/JobManagement';
import ImageManagement from '../components/ImageManagement';
import LogoManagement from '../components/LogoManagement';
import ReviewManagement from '../components/ReviewManagement';
import '../styles/AdminDashboard.css'; // Create this CSS file

const componentMap = {
    JobManagement,
    ImageManagement,
    LogoManagement,
    ReviewManagement,
};

const AdminDashboard = () => {
    const { user } = useAuth();
    const [activeComponent, setActiveComponent] = useState('JobManagement');

    // A simple, basic dashboard content for when no option is selected
    const DefaultContent = () => (
        <div className="default-content">
            <h1>Welcome to the Admin Panel, {user?.name || user?.email}!</h1>
            <p>Use the navigation panel on the left to manage Jobs, Banners, Logos, and Reviews.</p>
        </div>
    );

    const CurrentComponent = componentMap[activeComponent] || DefaultContent;

    return (
        <div className="admin-dashboard-container">
            <Sidebar setActiveComponent={setActiveComponent} />
            <main className="admin-content">
                <div className="admin-content-header">
                    <h2>Dashboard / {activeComponent.replace(/([A-Z])/g, ' $1').trim()}</h2>
                </div>
                <CurrentComponent />
            </main>
        </div>
    );
};

export default AdminDashboard;