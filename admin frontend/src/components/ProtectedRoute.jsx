// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { token, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>; // Simple loading state
    }

    // If token exists, allow access to the route's children (<Outlet />)
    // Otherwise, redirect to the login/signup page ('/')
    return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;