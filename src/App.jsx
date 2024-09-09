import React from 'react'
import {  Link, Route, Routes } from "react-router-dom";
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
            {/* <li><Link to="/service-history">Service History</Link></li> */}
            <li><Link to="/authentication">Login / Signup</Link></li>
            <li><Link to="/notification-system">FeedBack</Link></li>


            {/* <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>  */}
          </ul>
        </nav>


    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/service-booking" element={<ServiceBookingForm/>}></Route>
      <Route path="/service-history" element={<ServiceHistory/>}></Route>
      <Route path="/authentication" element={<Authentication/>}></Route>
      <Route path="/notification-system" element={<NotificationSystem/>}></Route>
      <Route path="/about" element={<HomePage/>}></Route>
      <Route path="/contact" element={<HomePage/>}></Route>
      </Routes>



    </>
  )
}

export default App