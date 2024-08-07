


import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    dateTime: '',
    make: '',
    model: '',
    registrationNumber: '',
  });

  const [data,setData] =useState(null)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {

      console.log("handleSubmit",data);
      const res = await axios.post('http://localhost:5001/api/book-service', formData);
      console.log(res.data.message);
      // Reset form fields or show success message
    } catch (error) {
      console.error('Error booking service:', error);
      // Handle error
    }
  };






  return (
    
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title">Service Booking Form</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="bikeModel" className="form-label">Bike Model</label>
                  <input type="text" className="form-control" id="bikeModel" />
                </div>
                <div className="mb-3">
                  <label htmlFor="serviceType" className="form-label">Service Type</label>
                  <select className="form-select" id="serviceType">
                    <option>Select Service Type</option>
                    <option>Oil Change</option>
                    <option>Tire Replacement</option>
                    <option>Brake Service</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
                  <input type="date" className="form-control" id="appointmentDate" />
                </div>
                <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faMotorcycle} className="me-2" />Book Service</button>
              </form>
            </div>
          </div>
        );
      }
      
      export default ServiceBookingForm;

// export default ServiceBookingForm;


// {...............................................................................}//////////


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

// function ServiceBookingForm() {
//   return (
//     <div className="card mt-5">
//       <div className="card-body">
//         <h2 className="card-title">Service Booking Form</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="bikeModel" className="form-label">Bike Model</label>
//             <input type="text" className="form-control" id="bikeModel" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="serviceType" className="form-label">Service Type</label>
//             <select className="form-select" id="serviceType">
//               <option>Select Service Type</option>
//               <option>Oil Change</option>
//               <option>Tire Replacement</option>
//               <option>Brake Service</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
//             <input type="date" className="form-control" id="appointmentDate" />
//           </div>
//           <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faMotorcycle} className="me-2" />Book Service</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ServiceBookingForm;
