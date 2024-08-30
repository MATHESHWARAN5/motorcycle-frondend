import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



import './HomePage.css';

const HomePage = () => {
  
  return (

<div className="App">
{/* Header Section */}
<header className="header">
  
   <a className="logo" href="#"><FontAwesomeIcon icon={faMotorcycle} /> </a>
<div className="logo">GMV Motor Service
  </div>
  <nav className="navigation">
    <ul>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  {/* <button className="cta-button">Book a Service</button> */}
  {/* <ButtonLink to="/authentication">Go to About Page</ButtonLink> */}
  <a href="/authentication "className="cta-button" >Login</a>
  {/* <ButtonLink href="/about">Go to About Page</ButtonLink> */}
 
</header>

{/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <h1>Book Your Motorcycle Service Hassle-Free</h1>
    <p>Brief description highlighting the key benefits of using the service, such as convenience, quality, etc.</p>
    {/* <button className="cta-button">Book Now</button> */}
    <a href="/service-booking "className="cta-button" >Book now</a>
  </div>
  <div className="hero-image">
    {/* <img src="motorcycle-service.jpg" alt="Motorcycle Service" /> */}
    <img src="/images motorcycle.jpg" className="img-fluid rounded" alt="Service 1" />
  </div>
</section>

{/* Services Section */}
<section id="services" className="services">

  <h2 className='ourservices'>Our Services</h2>

     <div className="service-grid">

             {/* Service Card Component */}
            <div className="service-card">
            
           <img src="istockphoto-1325588832-612x612.jpg" alt="oil"  />

           <h3>Oil Change</h3>
           <p>Short description of the service with bullet points highlighting key features.</p>
            {/* <button className="cta-button">Book Now</button> */}
            <a href="/service-booking "className="cta-button" >Book now</a>
           </div>
    {/* Repeat for other services */}

              <div className="service-card">
              {/* <img src="oil-change-icon.png" alt="Oil Change" /> */}
              {/* <img src="/Castrol-01.png" alt="Oil Change" /> */}
              <img src="Tire-Repair-Uptown-New-Orleans.webp" alt="tire"  />
              <h3>Tire Replacement</h3>
              <p>Short description of the service with bullet points highlighting key features.</p>
              {/* <button className="cta-button">Book Now</button> */}
              <a href="/service-booking "className="cta-button" >Book now</a>
              </div>


               <div className="service-card">
               {/* <img src="oil-change-icon.png" alt="Oil Change" /> */}
               {/* <img src="/Castrol-01.png" alt="Oil Change" /> */}
               <img src="istockphoto-1193247902-1024x1024.webp" alt="brake"  />
               <h3>Brake Inspection</h3>
               <p>Short description of the service with bullet points highlighting key features.</p>
               {/* <button className="cta-button">Book Now</button> */}
               <a href="/service-booking "className="cta-button" >Book now</a>
               </div>


   </div>

</section>








{/* About Us Section */}
<section id="about" className="about">
  <h2>About Us</h2>
  <p>Mission statement describing the mission and values of your motorcycle service business.</p>
  {/* Team Members Component */}
  <div className="team-members">
    {/* Team Member Card Component */}
    <div className="team-member">
      {/* <img src="mechanic.jpg" alt="Mechanic" /> */}
      {/* <img src="/images motorcycle.jpg" className="img-fluid rounded" alt="Service 1" /> */}
      <img src="1_MHOjfaq3Y3GRZqziDv__nQ.jpg" alt="about us" srcset="" />
      <h3>John Doe</h3>
      <p>Brief bio of the team member.</p>
    </div>
    {/* Repeat for other team members */}
  </div>
  {/* Testimonials Component */}
  <div className="testimonials">
    <h3>Testimonials</h3>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
    <p>- Satisfied Customer</p>
  </div>
</section>

{/* Booking Section */}
<section id="booking" className="booking">
  <h2>your Feedback</h2>
  <form>
    {/* Booking Form Fields */}
    <input type="text" placeholder="Name" />
   
    {/* <button type="submit" className="cta-button">Book Now</button> */}
    <a href="/notification-system"className="cta-button" >FeedBack</a>
  </form>
</section>

{/* Footer Section */}
<footer id="contact" className="footer">
  <div className="contact-info">
 
        <h5>Brands Serviced By Us</h5>
        <ul className="footer-brand-list">
          <li><i className="fab fa-honda"></i> Honda</li>
          <li><i className="fas fa-motorcycle"></i> Hero MotoCorp</li>
          <li><i className="fas fa-motorcycle"></i> Hero Honda</li>
          <li><i className="fas fa-motorcycle"></i> TVS</li>
        
        </ul>
      
   
   
  <p>Contact Us</p>
        <p><i className="fas fa-phone"></i> +919003251754</p>
        <p><i className="fas fa-envelope"></i> hello@gobumpr.com</p>
        <p><i className="fas fa-clock"></i> (Mon-Sat) 9:30AM-6:30PM</p>
  </div>
  <div className="social-media">
    <a href="#">Facebook</a>
    {/* Repeat for other social media links */}
  </div>
  <p>Copyright Information</p>
  
</footer>



{/* Footer Section */}

<footer className="footer">
 
</footer>





</div>
);
}
 
export default HomePage;
