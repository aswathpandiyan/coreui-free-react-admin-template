// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DefaultLayout from './layout/DefaultLayout';
import Login from './views/pages/login/Login';
import AdminDashboard from './views/dashboard/AdminDashboard';
import TeacherDashboard from './views/dashboard/TeacherDashboard';

// Helper to redirect users to their specific dashboard
const DashboardRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return user.role === 'admin' ? <Navigate to="/dashboard/admin" replace /> : <Navigate to="/dashboard/teacher" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Main Layout wrapper */}
          <Route path="/dashboard" element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
            {/* Redirect /dashboard to the correct one */}
            <Route index element={<DashboardRedirect />} />
            
            {/* Specific Dashboards */}
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="teacher" element={<TeacherDashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
export default App;