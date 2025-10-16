// src/components/ImageManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPlus, FaListAlt } from 'react-icons/fa';
import '../styles/Management.css'; // Reusing the same styles

const API_BASE_URL = 'https://finall-backend-v2bn.onrender.com/img';

const ImageManagement = () => {
    const [images, setImages] = useState([]);
    const [viewMode, setViewMode] = useState('list');
    const [formData, setFormData] = useState({ id: '', name: '', image: null });
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (viewMode === 'list') {
            fetchImages();
        }
    }, [viewMode]);

    const fetchImages = async () => {
        try {
            // Note: Your backend returns Base64 strings for display
            const response = await axios.get(`${API_BASE_URL}/images/getall`);
            setImages(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to fetch images/banners.');
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
            setMessage("Please select an image file.");
            return;
        }

        const data = new FormData();
        data.append('id', formData.id);
        data.append('name', formData.name);
        data.append('image', formData.image); // Key must match 'upload.single("image")' in imgroute.js

        try {
            await axios.post(`${API_BASE_URL}/upload`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage('Banner image uploaded successfully!');
            setFormData({ id: '', name: '', image: null });
            setViewMode('list');
        } catch (error) {
            // Your middleware ensures token is required for /upload
            setMessage(error.response?.data?.message || 'Error uploading image. Check console for details.');
        }
    };

    const handleDelete = async (imageId) => {
        if (!window.confirm(`Are you sure you want to delete image ID: ${imageId}?`)) return;
        try {
            await axios.delete(`${API_BASE_URL}/images/delete/${imageId}`);
            setMessage('Image deleted successfully!');
            fetchImages(); 
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error deleting image.');
        }
    };

    // --- Render Functions ---

    const renderAddForm = () => (
        <form onSubmit={handleAddSubmit} className="management-form">
            <h3>Upload New Banner Image</h3>
            <input name="id" type="number" placeholder="Banner ID (Must be unique)" value={formData.id} onChange={handleTextChange} required />
            <input name="name" type="text" placeholder="Banner Title" value={formData.name} onChange={handleTextChange} />
            <input name="image" type="file" onChange={handleFileChange} required />
            <button type="submit"><FaPlus /> Upload Banner</button>
        </form>
    );

    const renderImageList = () => (
        <div className="management-list-container">
            <h3>All Banners ({images.length})</h3>
            <table className="management-table">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {images.map((img, index) => (
                        <tr key={img._id}>
                            <td>{index + 1}</td>
                            <td>{img.id}</td>
                            <td>{img.name}</td>
                            <td>
                                {/* Display image using the Base64 string */}
                                {img.image && <img src={img.image} alt={img.name} style={{ width: '100px', height: 'auto' }} />}
                            </td>
                            <td>
                                <button className="action-btn delete" onClick={() => handleDelete(img.id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="image-management">
            <div className="management-actions">
                <button 
                    onClick={() => { setViewMode('add'); setMessage(''); setFormData({ id: '', name: '', image: null }) }} 
                    className={viewMode === 'add' ? 'active' : ''}
                >
                    <FaPlus /> Add Banner
                </button>
                <button 
                    onClick={() => setViewMode('list')} 
                    className={viewMode === 'list' ? 'active' : ''}
                >
                    <FaListAlt /> View All Banners
                </button>
            </div>

            {message && <p className={`status-message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}

            {viewMode === 'add' && renderAddForm()}
            {viewMode === 'list' && renderImageList()}
        </div>
    );
};

export default ImageManagement;
