import React from 'react';
// import { BrowserRouter as  Router, Route,  Link } from 'react-router-dom';
import HomePage from './HomePage';
import ServiceBookingForm from './ServiceBookingForm';
import ServiceHistory from './ServiceHistory';
import Authentication from './Authentication';
import NotificationSystem from './NotificationSystem';
import {Route,Routes, Switch} from 'react-router';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import './App.css';

function App() {
  return (

      <div className="App">
        weqqe
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            {/* <li><a href="/">test</a></li> */}
            {/* <li><Link to="/service-booking">Service Booking</Link></li>
            <li><Link to="/service-history">Service History</Link></li>
            <li><Link to="/authentication">Authentication</Link></li>
            <li><Link to="/notification-system">Notification System</Link></li> */}
            {/* <li><Link to="/about">About</Link></li> */}
            {/* <li><Link to="/contact" style={{ color: 'red', textDecoration: 'underline' }}>Contact</Link></li> */}
          </ul>
        </nav>
        {/* <Switch>
        <Routes> */}
          {/* <Route path="/" exact component={HomePage} /> */}
             {/* <Route path='/' element={<HomePage/>}/> */}

          {/* <Route path="/service-booking" component={ServiceBookingForm} />
          <Route path="/service-history" component={ServiceHistory} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/notification-system" component={NotificationSystem} /> */}
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* <Route path="/contact" component={ContactPage} /> */}
          {/* </Routes>

          </Switch> */}
      </div>
    
  );
}

export default App;
