

import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ServiceBookingForm.css'; // Import CSS for styling

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    dateTime: '',
    make: '',
    model: '',
    registrationNumber: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-capstone-motorcycle.onrender.com/api/book-service', formData);
      console.log(res.data.message);
      toast.success(res.data.message); // Show success message using toast
      
      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        navigate('/'); // Redirect to homepage
      }, 2000);
    } catch (error) {
      console.error('Error booking service:', error);
      toast.error('Failed to book service'); // Show error message using toast
      // Handle error
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title">Service Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="bikeModel" className="form-label">Bike Model</label>
              <input type="text" className="form-control" id="bikeModel" name="model" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="serviceType" className="form-label">Service Type</label>
              <select className="form-select" id="serviceType" name="serviceType" onChange={handleChange}>
                <option>Select Service Type</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Tire Replacement">Tire Replacement</option>
                <option value="Brake Service">Brake Service</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
              <input type="date" className="form-control" id="appointmentDate" name="dateTime" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faMotorcycle} className="me-2" />Book Service</button>
          </form>
          <ToastContainer /> {/* Toast container to show notifications */}
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingForm;
