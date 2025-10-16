// src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 

// ----------------------------------------------------
// Axios instance (No token needed for client side)
// ----------------------------------------------------
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ----------------------------------------------------
// Public Fetch Functions
// ----------------------------------------------------

// Jobs: GET /job/getall
export const fetchJobs = async () => {
    try {
        const response = await apiClient.get('/job/getall');
        return response.data;
    } catch (error) {
        console.error("API Error: Failed to fetch jobs", error);
        return []; // Return empty array on failure
    }
};

// Reviews: GET /review/getall
export const fetchReviews = async () => {
    try {
        const response = await apiClient.get('/review/getall');
        return response.data;
    } catch (error) {
        console.error("API Error: Failed to fetch reviews", error);
        return [];
    }
};

// Logos: GET /logo/getall
export const fetchLogos = async () => {
    try {
        const response = await apiClient.get('/logo/getall');
        // Your backend returns logos as an array of objects with a 'image' base64 field
        return response.data;
    } catch (error) {
        console.error("API Error: Failed to fetch logos", error);
        return [];
    }
};

// Banners: GET /img/images/getall
export const fetchBanners = async () => {
    try {
        const response = await apiClient.get('/img/images/getall');
        // Your backend returns banners as an array of objects with a 'image' base64 field
        return response.data;
    } catch (error) {
        console.error("API Error: Failed to fetch banners", error);
        return [];
    }
};

// Contact Form Submission (Placeholder - Assuming a new backend route /contact/submit)
export const submitContactForm = async (formData) => {
    try {
        // You would need to create this route on your Node.js backend
        const response = await apiClient.post('/contact/submit', formData);
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Contact Form Submission Error:", error);
        return { success: false, message: error.response?.data?.message || 'Submission failed.' };
    }
};