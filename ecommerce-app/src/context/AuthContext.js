import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../ulits/authservices';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      navigate('/products');
    } catch (err) {
      setError(err.message);
    }
  };

  const register = async (username, email, password) => {
    try {
      await registerUser(username, email, password);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};