// src/components/Sidebar.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FaUserShield, FaSignOutAlt, FaBriefcase, FaImages, FaStar, FaBuilding } from 'react-icons/fa';
import '../styles/Sidebar.css'; // Create this CSS file

const Sidebar = ({ setActiveComponent }) => {
    const { logout, user } = useAuth();

    const menuItems = [
        { name: 'Job Management', key: 'JobManagement', icon: <FaBriefcase /> },
        { name: 'Banner Management', key: 'ImageManagement', icon: <FaImages /> },
        { name: 'Logo Management', key: 'LogoManagement', icon: <FaBuilding /> },
        { name: 'Review Management', key: 'ReviewManagement', icon: <FaStar /> },
    ];

    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <span className="user-icon"><FaUserShield /></span>
                <span className="username">{user?.email || 'Admin'}</span>
            </div>
            <ul className="sidebar-menu">
                {menuItems.map(item => (
                    <li key={item.key} onClick={() => setActiveComponent(item.key)}>
                        {item.icon} {item.name}
                    </li>
                ))}
            </ul>
            <div className="sidebar-footer">
                <button onClick={logout} className="logout-button">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </nav>
    );
};

export default Sidebar;