import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import jwtDecode from 'jwt-decode'; // Correct import statement
import { jwtDecode } from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';
import './ServiceBookingForm.css';

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    dateTime: '',
    make: '',
    model: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.serviceType) newErrors.serviceType = 'Service Type is required';
    if (!formData.dateTime) newErrors.dateTime = 'Date and Time are required';
    if (!formData.make) newErrors.make = 'Make is required';
    if (!formData.model) newErrors.model = 'Model is required';
    if (!formData.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setErrors({ general: 'No authentication token found.' });
        return;
      }

      // Decode the JWT token
      const decodedToken = jwtDecode(token);
      console.log('Decoded Token:', decodedToken);

      const bookingData = {
        ...formData,
        userId: decodedToken.id,
      };

      const response = await axios.post(
        'https://backend-capstone-motorcycle.onrender.com/api/book-service', // Updated endpoint URL
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );

      console.log('Response Data:', response.data);
      toast.success(response.data.message);

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.error('Error booking service:', err);
      toast.error(err.response?.data.message || 'Failed to book service. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title">Service Booking Form</h2>
          {errors.general && <p className="error">{errors.general}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="serviceType" className="form-label">Service Type</label>
              <select
                className={`form-select ${errors.serviceType ? 'is-invalid' : ''}`}
                id="serviceType"
                name="serviceType"
                onChange={handleChange}
                value={formData.serviceType}
                required
              >
                <option value="" disabled>Select Service Type</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Tire Replacement">Tire Replacement</option>
                <option value="Brake Service">Brake Service</option>
              </select>
              {errors.serviceType && <div className="invalid-feedback">{errors.serviceType}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="dateTime" className="form-label">Appointment Date and Time</label>
              <input
                type="datetime-local"
                className={`form-control ${errors.dateTime ? 'is-invalid' : ''}`}
                id="dateTime"
                name="dateTime"
                onChange={handleChange}
                value={formData.dateTime}
                required
              />
              {errors.dateTime && <div className="invalid-feedback">{errors.dateTime}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="make" className="form-label">Make</label>
              <input
                type="text"
                className={`form-control ${errors.make ? 'is-invalid' : ''}`}
                id="make"
                name="make"
                onChange={handleChange}
                value={formData.make}
                placeholder="Enter vehicle make"
                required
              />
              {errors.make && <div className="invalid-feedback">{errors.make}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model</label>
              <input
                type="text"
                className={`form-control ${errors.model ? 'is-invalid' : ''}`}
                id="model"
                name="model"
                onChange={handleChange}
                value={formData.model}
                placeholder="Enter vehicle model"
                required
              />
              {errors.model && <div className="invalid-feedback">{errors.model}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                id="description"
                name="description"
                onChange={handleChange}
                value={formData.description}
                placeholder="Enter service description"
                required
              />
              {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>

            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faMotorcycle} className="me-2" />
              Book Service
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingForm;
