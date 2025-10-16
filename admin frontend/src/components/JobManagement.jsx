// src/components/JobManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaListAlt } from 'react-icons/fa';
import '../styles/Management.css'; // Create a generic CSS file for all management components

const API_BASE_URL = 'https://finall-backend-v2bn.onrender.com/job';

const JobManagement = () => {
    const [jobs, setJobs] = useState([]);
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'add' or 'edit'
    const [formData, setFormData] = useState({ id: '', country: '', name: '', description: '', type: '', salary: '' });
    const [message, setMessage] = useState('');
    const [editingJob, setEditingJob] = useState(null);

    useEffect(() => {
        if (viewMode === 'list') {
            fetchJobs();
        }
    }, [viewMode]);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getall`);
            setJobs(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to fetch jobs.');
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
            setMessage('Job added successfully!');
            setFormData({ id: '', country: '', name: '', description: '', type: '', salary: '' });
            setViewMode('list'); // Switch to list view after adding
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error adding job.');
        }
    };

    const handleDelete = async (jobId) => {
        if (!window.confirm(`Are you sure you want to delete job ID: ${jobId}?`)) return;
        try {
            await axios.delete(`${API_BASE_URL}/delete/${jobId}`);
            setMessage('Job deleted successfully!');
            fetchJobs(); // Refresh list
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error deleting job.');
        }
    };
    
    // NOTE: Your backend doesn't have an explicit 'edit' endpoint, 
    // but a PUT/PATCH route (e.g., /job/update/:id) would be needed for a full 'Edit' feature.
    // For this example, I'll only implement Add and Delete, and set up the Edit button 
    // to show where the logic would go.

    const handleEditClick = (job) => {
        setMessage('Edit functionality requires a PATCH/PUT endpoint on the backend.');
        // setEditingJob(job);
        // setFormData(job);
        // setViewMode('edit');
    };


    // --- Render Functions ---

    const renderAddForm = () => (
        <form onSubmit={handleAddSubmit} className="management-form">
            <h3>Add New Job</h3>
            <input name="id" type="number" placeholder="Job ID (Must be unique)" value={formData.id} onChange={handleChange} required />
            <input name="name" type="text" placeholder="Job Title" value={formData.name} onChange={handleChange} required />
            <input name="country" type="text" placeholder="Country" value={formData.country} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <input name="salary" type="text" placeholder="Salary/Compensation" value={formData.salary} onChange={handleChange} />
            <input name="type" type="text" placeholder="Job Type (e.g., Full-time)" value={formData.type} onChange={handleChange} />
            <button type="submit"><FaPlus /> Add Job</button>
        </form>
    );

    const renderJobList = () => (
        <div className="management-list-container">
            <h3>All Jobs ({jobs.length})</h3>
            <table className="management-table">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={job._id}>
                            <td>{index + 1}</td>
                            <td>{job.id}</td>
                            <td>{job.name}</td>
                            <td>{job.country}</td>
                            <td>{job.salary}</td>
                            <td>
                                <button className="action-btn edit" onClick={() => handleEditClick(job)}><FaEdit /></button>
                                <button className="action-btn delete" onClick={() => handleDelete(job.id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="job-management">
            <div className="management-actions">
                <button 
                    onClick={() => { setViewMode('add'); setEditingJob(null); setMessage(''); setFormData({ id: '', country: '', name: '', description: '', type: '', salary: '' }) }} 
                    className={viewMode === 'add' ? 'active' : ''}
                >
                    <FaPlus /> Add Job
                </button>
                <button 
                    onClick={() => setViewMode('list')} 
                    className={viewMode === 'list' ? 'active' : ''}
                >
                    <FaListAlt /> View All Jobs
                </button>
            </div>

            {message && <p className={`status-message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}

            {viewMode === 'add' && renderAddForm()}
            {viewMode === 'list' && renderJobList()}
            {/* {viewMode === 'edit' && renderEditForm()} */}
        </div>
    );
};

export default JobManagement;
