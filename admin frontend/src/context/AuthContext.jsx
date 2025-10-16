// // src/context/AuthContext.jsx

// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// const API_URL = 'http://localhost:5000/user'; // Base URL for admin routes

// export const AuthProvider = ({ children }) => {
//     // State to hold the user data and token
//     const [user, setUser] = useState(null);
//     const [token, setToken] = useState(localStorage.getItem('token'));
//     const [isLoading, setIsLoading] = useState(true);

//     // Set up axios interceptor to include the token in every request
//     useEffect(() => {
//         if (token) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         } else {
//             delete axios.defaults.headers.common['Authorization'];
//         }
//         setIsLoading(false);
//     }, [token]);

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post(`${API_URL}/login`, { email, password });
//             const { token, userdata } = response.data;
            
//             // Store token in local storage and update state
//             localStorage.setItem('token', token);
//             setToken(token);
//             setUser(userdata);
//             return { success: true };
//         } catch (error) {
//             console.error("Login failed:", error.response ? error.response.data : error.message);
//             return { success: false, message: error.response?.data?.message || "Login failed" };
//         }
//     };

//     const signup = async (name, email, password, address) => {
//         try {
//             const response = await axios.post(`${API_URL}/signup`, { name, email, password, address });
//             // For admin, successful signup should probably redirect to login, 
//             // but your controller returns a token, so we'll log them in.
//             const { token, newuser } = response.data;
//             localStorage.setItem('token', token);
//             setToken(token);
//             setUser(newuser);
//             return { success: true };
//         } catch (error) {
//             console.error("Signup failed:", error.response ? error.response.data : error.message);
//             return { success: false, message: error.response?.data?.message || "Signup failed" };
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         setToken(null);
//         setUser(null);
//         delete axios.defaults.headers.common['Authorization'];
//     };

//     return (
//         <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

// export default AuthContext;

// src/context/AuthContext.jsx (Complete & Corrected)

import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://localhost:5000/user'; // Base URL for admin routes

export const AuthProvider = ({ children }) => {
    // 1. Initial State: Start unauthenticated to force login screen on load
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    
    // 2. useEffect to clear token and set initial loading state
    useEffect(() => {
        // Force logout/clear state on initial mount
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setToken(null);
        setUser(null);
        setIsLoading(false);
    }, []); // Runs once on mount

    const login = async (email, password) => {
    try {
        // Axios throws an error for 4xx and 5xx status codes
        const response = await axios.post(`${API_URL}/login`, { email, password });
        
        // If we reach here, the status was 200 (Success)
        const { token, userdata } = response.data;
        
        localStorage.setItem('token', token);
        setToken(token);
        setUser(userdata);
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return { success: true };
        
    } catch (error) {
        // 🚨 This catch block handles the 401 error from your backend 🚨
        console.error("Login failed:", error.response ? error.response.data : error.message);
        
        // Return failure status based on the backend message
        return { success: false, message: error.response?.data?.message || "Invalid credentials" };
    }
};

    // 🚨 THIS WAS THE MISSING FUNCTION CAUSING THE ERROR 🚨
    // const signup = async (name, email, password, address) => {
    //     try {
    //         const response = await axios.post(`${API_URL}/signup`, { name, email, password, address });
            
    //         // Assuming successful signup immediately logs them in based on your backend logic
    //         const { token, newuser } = response.data;
            
    //         localStorage.setItem('token', token);
    //         setToken(token);
    //         setUser(newuser);

    //         // Set axios header immediately
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //         return { success: true };
    //     } catch (error) {
    //         console.error("Signup failed:", error.response ? error.response.data : error.message);
    //         return { success: false, message: error.response?.data?.message || "Signup failed" };
    //     }
    // };
    
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;