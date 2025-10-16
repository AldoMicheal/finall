// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
// import DashboardPage from "./pages/DashboardPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AddJob from "./components/Dashboard/AddJob";
// import ViewJobs from "./components/Dashboard/ViewJobs";
// import UploadImage from "./components/Dashboard/UploadImage";
// import ViewImage from "./components/Dashboard/ViewImage";
// import "./index.css";


// export default function App() {
// return (
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<AuthPage />} />
// <Route
// path="/dashboard"
// element={
// <ProtectedRoute>
// <DashboardPage />
// </ProtectedRoute>
// }
// >
// <Route index element={<Navigate to="add-job" replace />} />
// <Route path="add-job" element={<AddJob />} />
// <Route path="view-jobs" element={<ViewJobs />} />
// <Route path="upload-image" element={<UploadImage />} />
// <Route path="view-image" element={<ViewImage />} />
// </Route>
// <Route path="*" element={<Navigate to="/" replace />} />
// </Routes>
// </BrowserRouter>
// );
// }

// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound'; // You can create a simple 404 page

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route: Login/Signup */}
          <Route path="/" element={<AuthPage />} /> 

          {/* Protected Routes for Admin Panel */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            {/* You can add more specific admin routes here if needed, e.g., /admin/jobs/add */}
          </Route>

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;