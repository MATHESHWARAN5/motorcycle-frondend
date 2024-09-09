

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Authentication() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { username, password, email } = formData;
    let formErrors = {};

    if (!username) formErrors.username = 'Username is required';
    if (!password) formErrors.password = 'Password is required';
    if (!isLogin && !email) formErrors.email = 'Email is required';

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    try {
      // Ensure the URL has the correct format with protocol
      const url = isLogin
        ? 'https://backend-capstone-motorcycle.onrender.com/api/auth/login'
        : 'https://backend-capstone-motorcycle.onrender.com/api/auth/register'; // Correct URL format
      
      console.log(url); // Debug: Print the URL to ensure it's correct
      const response = await axios.post(url, formData);

      console.log(response.data);
      toast.success(isLogin ? 'Login successful' : 'Registration successful');

      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        if (isLogin) {
          navigate('/'); // Redirect to home page
        } else {
          setIsLogin(true); // Switch to login mode after successful registration
        }
      }, 2000); // 2 seconds delay
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
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                autoComplete="username"
              />
              {errors.username && <p className="text-danger">{errors.username}</p>}
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faLock} /> Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                autoComplete="current-password"
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            {!isLogin && (
              <div className="form-group">
                <label><FontAwesomeIcon icon={faEnvelope} /> Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  autoComplete="email"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-block">
              {isLogin ? 'Login' : 'Register'}
            </button>
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
