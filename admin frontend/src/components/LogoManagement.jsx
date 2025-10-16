// src/components/LogoManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPlus, FaListAlt } from 'react-icons/fa';
import '../styles/Management.css'; 

const API_BASE_URL = 'https://finall-backend-v2bn.onrender.com/logo';

const LogoManagement = () => {
    const [logos, setLogos] = useState([]);
    const [viewMode, setViewMode] = useState('list');
    const [formData, setFormData] = useState({ id: '', name: '', image: null });
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (viewMode === 'list') {
            fetchLogos();
        }
    }, [viewMode]);

    const fetchLogos = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getall`);
            setLogos(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to fetch logos.');
        }
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleTextChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.image) {
            setMessage("Please select a logo file.");
            return;
        }

        const data = new FormData();
        data.append('id', formData.id);
        data.append('name', formData.name);
        data.append('image', formData.image); // Key must match 'upload.single("image")' in logoroute.js (your route uses /uploadlogo)

        try {
            // 🚨 Use the specific route: /uploadlogo
            await axios.post(`${API_BASE_URL}/uploadlogo`, data, { 
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage('Logo uploaded successfully!');
            setFormData({ id: '', name: '', image: null });
            setViewMode('list');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error uploading logo. Check console for details.');
        }
    };

    const handleDelete = async (logoId) => {
        if (!window.confirm(`Are you sure you want to delete logo ID: ${logoId}?`)) return;
        try {
            // 🚨 Use the specific route: /delete/:id
            await axios.delete(`${API_BASE_URL}/delete/${logoId}`);
            setMessage('Logo deleted successfully!');
            fetchLogos(); 
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error deleting logo.');
        }
    };

    // --- Render Functions ---

    const renderAddForm = () => (
        <form onSubmit={handleAddSubmit} className="management-form">
            <h3>Upload New Logo</h3>
            <input name="id" type="number" placeholder="Logo ID (Must be unique)" value={formData.id} onChange={handleTextChange} required />
            <input name="name" type="text" placeholder="Logo Name (e.g., Header Logo)" value={formData.name} onChange={handleTextChange} />
            <input name="image" type="file" onChange={handleFileChange} required />
            <button type="submit"><FaPlus /> Upload Logo</button>
        </form>
    );

    const renderLogoList = () => (
        <div className="management-list-container">
            <h3>All Logos ({logos.length})</h3>
            <table className="management-table">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {logos.map((logo, index) => (
                        <tr key={logo._id}>
                            <td>{index + 1}</td>
                            <td>{logo.id}</td>
                            <td>{logo.name}</td>
                            <td>
                                {logo.image && <img src={logo.image} alt={logo.name} style={{ width: '50px', height: 'auto' }} />}
                            </td>
                            <td>
                                <button className="action-btn delete" onClick={() => handleDelete(logo.id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="logo-management">
            <div className="management-actions">
                <button 
                    onClick={() => { setViewMode('add'); setMessage(''); setFormData({ id: '', name: '', image: null }) }} 
                    className={viewMode === 'add' ? 'active' : ''}
                >
                    <FaPlus /> Add Logo
                </button>
                <button 
                    onClick={() => setViewMode('list')} 
                    className={viewMode === 'list' ? 'active' : ''}
                >
                    <FaListAlt /> View All Logos
                </button>
            </div>

            {message && <p className={`status-message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}

            {viewMode === 'add' && renderAddForm()}
            {viewMode === 'list' && renderLogoList()}
        </div>
    );
};

export default LogoManagement;
