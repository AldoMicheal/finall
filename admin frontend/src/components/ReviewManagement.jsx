// src/components/ReviewManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaListAlt } from 'react-icons/fa';
import '../styles/Management.css'; 

const API_BASE_URL = 'http://localhost:5000/review';

const ReviewManagement = () => {
    const [reviews, setReviews] = useState([]);
    const [viewMode, setViewMode] = useState('list');
    const [formData, setFormData] = useState({ id: '', name: '', review_d: '' });
    const [message, setMessage] = useState('');
    // const [editingReview, setEditingReview] = useState(null); // Edit is not supported by your backend yet

    useEffect(() => {
        if (viewMode === 'list') {
            fetchReviews();
        }
    }, [viewMode]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getall`);
            setReviews(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to fetch reviews.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...formData, id: parseInt(formData.id) };
            await axios.post(`${API_BASE_URL}/add`, payload);
            setMessage('Review added successfully!');
            setFormData({ id: '', name: '', review_d: '' });
            setViewMode('list'); 
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error adding review.');
        }
    };

    const handleDelete = async (reviewId) => {
        if (!window.confirm(`Are you sure you want to delete review ID: ${reviewId}?`)) return;
        try {
            await axios.delete(`${API_BASE_URL}/delete/${reviewId}`);
            setMessage('Review deleted successfully!');
            fetchReviews(); 
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error deleting review.');
        }
    };

    const handleEditClick = (review) => {
        setMessage('Edit functionality requires a PATCH/PUT endpoint on the backend.');
    };

    // --- Render Functions ---

    const renderAddForm = () => (
        <form onSubmit={handleAddSubmit} className="management-form">
            <h3>Add New Review</h3>
            <input name="id" type="number" placeholder="Reviewer ID (Must be unique)" value={formData.id} onChange={handleChange} required />
            <input name="name" type="text" placeholder="Reviewer Name" value={formData.name} onChange={handleChange} required />
            <textarea name="review_d" placeholder="Review Description" value={formData.review_d} onChange={handleChange} required />
            <button type="submit"><FaPlus /> Add Review</button>
        </form>
    );

    const renderReviewList = () => (
        <div className="management-list-container">
            <h3>All Reviews ({reviews.length})</h3>
            <table className="management-table">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>ID</th>
                        <th>Reviewer Name</th>
                        <th>Review Text</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review, index) => (
                        <tr key={review._id}>
                            <td>{index + 1}</td>
                            <td>{review.id}</td>
                            <td>{review.name}</td>
                            <td>{review.review_d.substring(0, 50)}...</td> {/* Truncate for display */}
                            <td>
                                {/* Edit button is placeholder until backend is updated */}
                                <button className="action-btn edit" onClick={() => handleEditClick(review)}><FaEdit /></button>
                                <button className="action-btn delete" onClick={() => handleDelete(review.id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="review-management">
            <div className="management-actions">
                <button 
                    onClick={() => { setViewMode('add'); setMessage(''); setFormData({ id: '', name: '', review_d: '' }) }} 
                    className={viewMode === 'add' ? 'active' : ''}
                >
                    <FaPlus /> Add Review
                </button>
                <button 
                    onClick={() => setViewMode('list')} 
                    className={viewMode === 'list' ? 'active' : ''}
                >
                    <FaListAlt /> View All Reviews
                </button>
            </div>

            {message && <p className={`status-message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}

            {viewMode === 'add' && renderAddForm()}
            {viewMode === 'list' && renderReviewList()}
        </div>
    );
};

export default ReviewManagement;