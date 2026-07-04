import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage, or null if empty
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('school_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Whenever user state changes, save it to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('school_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('school_user');
    }
  }, [user]);

  const login = (username, password) => {
    // Mock login logic
    if (username === 'admin' || username === 'teacher') {
      setUser({ name: username.toUpperCase(), role: username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);