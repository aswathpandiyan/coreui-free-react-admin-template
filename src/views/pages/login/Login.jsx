import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
// Import your UI components here (e.g., CButton, CCard, CFormInput from CoreUI)

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // --- PLACE IT HERE ---
  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    
    if (success) {
      navigate('/dashboard'); // Or your custom redirect logic
    } else {
      alert('Invalid credentials');
    }
  };
  // ---------------------

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <form onSubmit={handleLogin} className="p-4 border rounded bg-white shadow-sm">
        <h2>School App Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <div className="mb-3">
          <label>Username (try 'admin' or 'teacher')</label>
          <input 
            type="text" 
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        
        <div className="mb-3">
          <label>Password (any)</label>
          <input 
            type="password" 
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;