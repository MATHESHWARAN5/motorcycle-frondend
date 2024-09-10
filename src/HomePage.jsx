// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



// import './HomePage.css';

// const HomePage = () => {
  
//   return (

// <div className="App">
 
// <header className="header">
  
//    <a className="logo" href="#"><FontAwesomeIcon icon={faMotorcycle} /> </a>
// <div className="logo">GMV Motor Service
//   </div>




//   <nav className="navigation">
//     <ul>
//       <li><a href="#services">Services</a></li>
//       <li><a href="#about">About Us</a></li>
//       <li><a href="#contact">Contact</a></li>
//     </ul>
//   </nav>
 
//   <a href="/authentication "className="cta-button" >Login</a>
  
// </header> 




// <header className="header">
//         <a className="logo" href="#"><FontAwesomeIcon icon={faMotorcycle} /> GMV Motor Service</a>
//         <nav className="navigation">
//           <ul>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//         <a href="/authentication" className="cta-button">Login</a>
//       </header>













// {/* Hero Section */}
// <section className="hero">
//   <div className="hero-content">
//     <h1>Book Your Motorcycle Service Hassle-Free</h1>
//     <p>Brief description highlighting the key benefits of using the service, such as convenience, quality, etc.</p>
//     {/* <button className="cta-button">Book Now</button> */}
//     <a href="/service-booking "className="cta-button" >Book now</a>
//   </div>
//   <div className="hero-image">
//     {/* <img src="motorcycle-service.jpg" alt="Motorcycle Service" /> */}
//     <img src="/images motorcycle.jpg" className="img-fluid rounded" alt="Service 1" />
//   </div>
// </section>











// {/* Services Section */}
// <section id="services" className="services">
//   <h2 className='ourservices'>Our Services</h2>
//   <div className="service-grid">
//     {/* Service Card: Oil Change */}
//     <div className="service-card">
//       <img src="/istockphoto-1325588832-612x612.jpg" alt="Oil Change" />
//       <h3>Oil Change</h3>
//       <p>Get your oil changed with high-quality motor oil for smoother rides and better engine performance.</p>
//       <a href="/service-booking" className="cta-button">Book Now</a>
//     </div>

//     {/* Service Card: Tire Replacement */}
//     <div className="service-card">
//       <img src="/Tire-Repair-Uptown-New-Orleans.webp" alt="Tire Replacement" />
//       <h3>Tire Replacement</h3>
//       <p>Ensure road safety with professional tire replacements and balancing services.</p>
//       <a href="/service-booking" className="cta-button">Book Now</a>
//     </div>

//     {/* Service Card: Brake Inspection */}
//     <div className="service-card">
//       <img src="/public/istockphoto-1193247902-1024x1024.webp" alt="Brake Inspection" />
//       <h3>Brake Inspection</h3>
//       <p>Comprehensive brake inspections and repairs for reliable stopping power.</p>
//       <a href="/service-booking" className="cta-button">Book Now</a>
//     </div>
//   </div>
// </section>













// {/* About Us Section */}
// <section id="about" className="about">
//   <h2>About Us</h2>
//   <p>At GMV Motor Service, our mission is to deliver top-quality motorcycle services with a commitment to excellence and customer satisfaction. Our skilled team is dedicated to providing reliable and efficient solutions to keep your motorcycle in peak condition.</p>
  
//   {/* Team Members Component */}
//   <div className="team-members">
//     <div className="team-member">
//       <img src="service joe.jpg" alt="John Doe" />
//       <h3>John Doe</h3>
//       <p>John Doe is our lead mechanic with over 15 years of experience in motorcycle servicing. His expertise ensures that every bike gets the best care possible.</p>
//     </div>
//     <div className="team-member">
//       <img src="smith.jpg" alt="Jane Smith" />
//       <h3>Jane Smith</h3>
      // <p>Jane Smith specializes in motorcycle diagnostics and repair. Her attention to detail and commitment to quality make her an invaluable part of our team.</p>
//     </div>
//   </div>

//   {/* Testimonials Component */}
//   <div className="testimonials">
//     <h3>What Our Clients Say</h3>
//     <blockquote>
//       <p>"The service was exceptional, and the team went above and beyond to ensure my motorcycle was in perfect condition. Highly recommend!"</p>
//       <footer>- Satisfied Customer</footer>
//     </blockquote>
//     <blockquote>
//       <p>"Professional, prompt, and highly skilled. GMV Motor Service is my go-to for all my motorcycle needs."</p>
//       <footer>- Another Happy Client</footer>
//     </blockquote>
//   </div>
// </section>

// {/* Booking Section */}
// <section id="booking" className="booking">
//   <h2>Provide Your Feedback</h2>
//   <form>
//     <input type="text" placeholder="Name" />
//     <a href="/notification-system" className="cta-button">Submit Feedback</a>
//   </form>
// </section>

// {/* Footer Section */}
// <footer id="contact" className="footer">
//   <div className="contact-info">
//     <h5>Brands Serviced By Us</h5>
//     <ul className="footer-brand-list">
//       <li><i className="fab fa-honda"></i> Honda</li>
//       <li><i className="fas fa-motorcycle"></i> Hero MotoCorp</li>
//       <li><i className="fas fa-motorcycle"></i> Hero Honda</li>
//       <li><i className="fas fa-motorcycle"></i> TVS</li>
//     </ul>

//     <p>Contact Us</p>
//     <p><i className="fas fa-phone"></i> +919003251754</p>
//     <p><i className="fas fa-envelope"></i> hello@gobumpr.com</p>
//     <p><i className="fas fa-clock"></i> (Mon-Sat) 9:30 AM - 6:30 PM</p>
//   </div>
//   <div className="social-media">
//     <a href="#">Facebook</a>
//   </div>
//   <p>&copy; 2024 GMV Motor Service. All Rights Reserved.</p>
// </footer>
















// </div>
// );
// }
 
// export default HomePage;


















 

















import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faEnvelope, faUser, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <a className="logo" href="#"><FontAwesomeIcon icon={faMotorcycle} /> GMV Motor Service</a>
        <nav className="navigation">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="/authentication" className="cta-button">Login</a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Book Your Motorcycle Service Hassle-Free</h1>
          <p>Convenient, high-quality services for your motorcycle. Experience smooth rides with our expert service!</p>
          <a href="/service-booking" className="cta-button">Book Now</a>
        </div>
        <div className="hero-image">
          <img src="/images motorcycle.jpg" className="img-fluid rounded" alt="Motorcycle Service" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2 className="ourservices">Our Services</h2>
        <div className="service-grid">
          {/* Service Card: Oil Change */}
          <div className="service-card">
            <img src="/istockphoto-1325588832-612x612.jpg" alt="Oil Change" />
            <h3>Oil Change</h3>
            {/* <p>Get high-quality motor oil for better engine performance.</p> */}
            <p>Get your oil changed with high-quality motor oil for smoother rides and better engine performance.</p>
            <a href="/service-booking" className="cta-button">Book Now</a>
          </div>

          {/* Service Card: Tire Replacement */}
          <div className="service-card">
            <img src="/Tire-Repair-Uptown-New-Orleans.webp" alt="Tire Replacement" />
            <h3>Tire Replacement</h3>
            {/* <p>Road safety with professional tire replacements.</p> */}
            <p>Ensure road safety with professional tire replacements and balancing services.</p>
            <a href="/service-booking" className="cta-button">Book Now</a>
          </div>

          {/* Service Card: Brake Inspection */}
          <div className="service-card">
            <img src="/istockphoto-1193247902-1024x1024.webp" alt="Brake Inspection" />
            <h3>Brake Inspection</h3>
            {/* <p>Comprehensive brake inspections for reliable performance.</p> */}
            <p>Comprehensive brake inspections and repairs for reliable stopping power.</p>
            <a href="/service-booking" className="cta-button">Book Now</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>At GMV Motor Service, we are committed to excellence. Our team provides top-quality motorcycle services to keep your bike in peak condition.</p>
        {/* <p>At GMV Motor Service, our mission is to deliver top-quality motorcycle services with a commitment to excellence and customer satisfaction. Our skilled team is dedicated to providing reliable and efficient solutions to keep your motorcycle in peak condition.</p> */}
        <div className="team-members">
          <div className="team-member">
            <img src="/service joe.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            {/* <p>Lead mechanic with 15+ years of experience.</p> */}
            <p>John Doe is our lead mechanic with over 15 years of experience in motorcycle servicing. His expertise ensures that every bike gets the best care possible.</p>
          </div>
          <div className="team-member">
            <img src="/smith.jpg" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            {/* <p>Expert in motorcycle diagnostics and repair.</p> */}
            // <p>Jane Smith specializes in motorcycle diagnostics and repair. Her attention to detail and commitment to quality make her an invaluable part of our team.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking">
        <h2>Provide Your Feedback</h2>
        <form>
          <input type="text" placeholder="Name" />
          <a href="/notification-system" className="cta-button">Submit Feedback</a>
        </form>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="contact-info">
          <h5>Brands Serviced By Us</h5>
          <ul className="footer-brand-list">
            <li><FontAwesomeIcon icon={faMotorcycle} /> Honda</li>
            <li><FontAwesomeIcon icon={faMotorcycle} /> Hero MotoCorp</li>
            <li><FontAwesomeIcon icon={faMotorcycle} /> TVS</li>
          </ul>
          <p><FontAwesomeIcon icon={faPhone} /> +919003251754</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> hello@gobumpr.com</p>
          <p><FontAwesomeIcon icon={faClock} /> (Mon-Sat) 9:30 AM - 6:30 PM</p>
        </div>
        <div className="social-media">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
        </div>
        <p>&copy; 2024 GMV Motor Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
