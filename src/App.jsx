
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ServiceBookingForm from './ServiceBookingForm';
import ServiceHistory from './ServiceHistory';
import Authentication from './Authentication';
import NotificationSystem from './NotificationSystem';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service-booking">Service Booking</Link></li>
          <li><Link to="/authentication">Login / Signup</Link></li>
          <li><Link to="/notification-system">FeedBack</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/service-booking" element={<ServiceBookingForm />} />
        <Route path="/service-history" element={<ServiceHistory />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/notification-system" element={<NotificationSystem />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
