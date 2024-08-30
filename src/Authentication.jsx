


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Authentication() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure the URL has the correct format with protocol
      const url = isLogin 
        ? 'https://backend-capstone-motorcycle.onrender.com/api/auth/login' 
        : 'https://backend-capstone-motorcycle.onrender.com/api/auth/register'; // Correct URL format
      
      console.log(url); // Debug: Print the URL to ensure it's correct
      const response = await axios.post(url, formData);

      console.log(response.data);
      toast.success(isLogin ? 'Login successful' : 'Registration successful');
      // Handle successful login/registration, e.g., redirect to dashboard
    } catch (error) {
      console.error('Error during authentication:', error.message);
      toast.error(isLogin ? 'Login failed' : 'Registration failed');
      // Handle login/registration error, e.g., display error message
    }
  };

  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faUser} /> Username:</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" autoComplete="username" />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faLock} /> Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" autoComplete="current-password" />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label><FontAwesomeIcon icon={faEnvelope} /> Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" autoComplete="email" />
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-block">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p className="mt-3 text-center" onClick={toggleMode}>
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
