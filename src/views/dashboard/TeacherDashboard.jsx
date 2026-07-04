import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const TeacherDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Teacher Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
      </div>
      <div className="card p-4 shadow-sm">
        <h3>Welcome, {user?.name}!</h3>
        <p>Your role is: <strong>{user?.role}</strong></p>
        <hr />
        <p>From here, you will be able to manage your classes, input grades, and view student attendance.</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;