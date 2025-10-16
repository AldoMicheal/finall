// // src/pages/AuthPage.jsx

// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Navigate } from 'react-router-dom';
// import '../styles/AuthPage.css'; // Create this CSS file

// const AuthPage = () => {
//     const { login, signup, token } = useAuth();
//     const navigate = useNavigate();
//     const [isLogin, setIsLogin] = useState(true);
//     const [formData, setFormData] = useState({ name: '', email: '', password: '', address: '' });
//     const [message, setMessage] = useState('');

//     // If already logged in, redirect to admin panel
//     if (token) {
//         return <Navigate to="/admin" replace />;
//     }

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setMessage('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');

//         let result;
//         if (isLogin) {
//             result = await login(formData.email, formData.password);
//         } else {
//             result = await signup(formData.name, formData.email, formData.password, formData.address);
//         }

//         if (result.success) {
//             navigate('/admin'); // Successful signin/login redirects to the Admin Panel
//         } else {
//             setMessage(result.message || 'An error occurred.');
//         }
//     };

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//         setMessage('');
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-box">
//                 <h2>{isLogin ? 'Admin Login' : 'Admin Sign Up'}</h2>
//                 <form onSubmit={handleSubmit}>
//                     {!isLogin && (
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required={!isLogin}
//                         />
//                     )}
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                      {!isLogin && (
//                         <input
//                             type="text"
//                             name="address"
//                             placeholder="Address (Optional)"
//                             value={formData.address}
//                             onChange={handleChange}
//                             required={false}
//                         />
//                     )}
//                     {message && <p className="auth-error">{message}</p>}
//                     <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//                 </form>
//                 <button className="toggle-btn" onClick={toggleForm}>
//                     {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AuthPage;
// src/pages/AuthPage.jsx (SIMPLIFIED)

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';
import '../styles/AuthPage.css';

const AuthPage = () => {
    const { login, token } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    // If already logged in, redirect to admin panel
    if (token) {
        return <Navigate to="/admin" replace />;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        // This function call now handles 401 errors via the try...catch above
        const result = await login(formData.email, formData.password);

        // 🚨 This check ensures only true success proceeds 🚨
        if (result.success) {
            navigate('/admin'); 
        } else {
            // Displays the error message "Invalid credentials"
            setMessage(result.message || 'Login failed.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Admin Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {message && <p className="auth-error">{message}</p>}
                    <button type="submit">Login</button>
                </form>
                {/* 🚨 Removed Sign Up button 🚨 */}
            </div>
        </div>
    );
};

export default AuthPage;