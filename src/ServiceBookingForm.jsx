

// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import './ServiceBookingForm.css'; // Import CSS for styling

// const ServiceBookingForm = () => {
//   const [formData, setFormData] = useState({
//     serviceType: '',
//     dateTime: '',
//     make: '',
//     model: '',
//     registrationNumber: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://backend-capstone-motorcycle.onrender.com/api/book-service', formData);
//       console.log(res.data.message);
//       toast.success(res.data.message); // Show success message using toast
      
//       // Wait for 2 seconds before redirecting
//       setTimeout(() => {
//         navigate('/'); // Redirect to homepage
//       }, 2000);
//     } catch (error) {
//       console.error('Error booking service:', error);
//       toast.error('Failed to book service'); // Show error message using toast
//       // Handle error
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card mt-5">
//         <div className="card-body">
//           <h2 className="card-title">Service Booking Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="bikeModel" className="form-label">Bike Model</label>
//               <input type="text" className="form-control" id="bikeModel" name="model" onChange={handleChange} required  />
//             </div>


// {/* 
//             <div className="mb-3">
//               <label htmlFor="serviceType" className="form-label">Service Type</label>
//               <select className="form-select" id="serviceType" name="serviceType" onChange={handleChange} required >
//                 <option>Select Service Type</option>
//                 <option value="Oil Change">Oil Change</option>
//                 <option value="Tire Replacement">Tire Replacement</option>
//                 <option value="Brake Service">Brake Service</option>
               
//               </select>
//             </div> */}



// <div className="mb-3">
//   <label htmlFor="serviceType" className="form-label">Service Type</label>
//   <select
//     className="form-select"
//     id="serviceType"
//     name="serviceType"
//     onChange={handleChange}
//     required // Required attribute to enforce selection
//   >
//     <option value="" disabled>Select Service Type</option> {/* Default option with empty value */}
//     <option value="Oil Change">Oil Change</option>
//     <option value="Tire Replacement">Tire Replacement</option>
//     <option value="Brake Service">Brake Service</option>
//     {/* Add more options as needed */}
//   </select>
// </div>















//             <div className="mb-3">
//               <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
//               <input type="date" className="form-control" id="appointmentDate" name="dateTime" onChange={handleChange} required />
//             </div>
//             <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faMotorcycle} className="me-2" />Book Service</button>
//           </form>
//           <ToastContainer /> {/* Toast container to show notifications */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBookingForm;





































import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './ServiceBookingForm.css';

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    dateTime: '',
    make: '',
    model: '',
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
      console.log('Form Data:', formData);
      console.log('token:',token);

      const response = await axios.post(
        'https://backend-capstone-motorcycle.onrender.com/api/book-service',
        { userId: 'someUserId', ...formData }, // Include userId and formData
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request header
          },
        }
      );

      console.log('Response Data:', response.data);
      toast.success(response.data.message);

      // setTimeout(() => {
        navigate('/'); // Redirect to homepage
      // }, 2000);
    } catch (error) {
      console.error('Error booking service:', error);
      console.error('Error Response Data:', error.response?.data);
      toast.error(error.response?.data.message || 'Failed to book service. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title">Service Booking Form</h2>
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

            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faMotorcycle} className="me-2" /> Book Service
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingForm;
