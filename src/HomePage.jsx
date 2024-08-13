import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import './HomePage.css'
// function HomePage() {



  // import React, { useState, useEffect } from 'react';
  // import axios from 'axios';
  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  // import { faMotorcycle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
  // import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
  // import './HomePage.css'; // Import your CSS file for styling
  
  // function HomePage() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('/api/data'); // Replace '/api/data' with your actual backend API endpoint
    //     setData(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     setLoading(false);
    //   }
    // };








  // return (
//     <div>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faMotorcycle} /> Motorcycle Service</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           {/* <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Contact</a>
//               </li>
              
//             </ul>
//           </div> */}
//         </div>
//       </nav>

//       {/* {Hero Section} */}

//       <div class="card text-bg-dark">
//       <img src="/images motorcycle.jpg" className="img-fluid rounded" alt="Service 1" />
//   <div class="card-img-overlay">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text"><small>Last updated 3 mins ago</small></p>
//   </div>
// </div>




//       {/* Main Content */}
//       <div className="container mt-5">
//         {/* Images Section */}
//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <img src="/images motorcycle.jpg" className="img-fluid rounded" alt="Service 1" />
//           </div>
//           <div className="col-md-6 mb-4">
//             <img src="/images/service2.jpg" className="img-fluid rounded" alt="Service 2" />
//           </div>
//         </div>

//         {/* About Us Section */}
        
//         <div className="row">
//           <div className="col-md-12 mb-4">
//             <h2>About Us</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
//           </div>
//         </div>
        

//         {/* Contact Us Section */}
//         <div className="row bg-body-tertiary" >
//           <div className="col-md-12 mb-4">
//             <h2>Contact Us</h2>
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label"><FontAwesomeIcon icon={faUser} /> Name</label>
//                 <input type="text" className="form-control" id="name" placeholder="Your Name" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label"><FontAwesomeIcon icon={faEnvelope} /> Email address</label>
//                 <input type="email" className="form-control" id="email" placeholder="name@example.com" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea className="form-control" id="message" rows="3"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-center text-white text-lg-start mt-5">
//         <div className="container p-4">
//           <div className="row">
//             <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
//               <h5 className="text-uppercase">About Motorcycle Service</h5>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
//                 molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
//                 voluptatem veniam, est atque cumque eum delectus sint!
//               </p>
//             </div>
//             <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
//               <h5 className="text-uppercase">Links</h5>
//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#!" className="text-dark">Link 1</a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-dark">Link 2</a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-dark">Link 3</a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-dark">Link 4</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
//               <h5 className="text-uppercase">Connect with Us</h5>
//               <ul className="list-unstyled mb-0 d-flex justify-content-center">
//                 <li className="me-4">
//                   <a href="#!" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
//                 </li>
//                 <li className="me-4">
//                   <a href="#!" className="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//           © 2024 Motorcycle Service
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;




// import {React} from 'react';














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
            {/* <img src="oil-change-icon.png" alt="Oil Change" /> */}
           {/* <img src="/Castrol-01.png" alt="Oil Change" /> */}
           <img src="istockphoto-1325588832-612x612.jpg" alt="oil" srcset="" />

           <h3>Oil Change</h3>
           <p>Short description of the service with bullet points highlighting key features.</p>
            {/* <button className="cta-button">Book Now</button> */}
            <a href="/service-booking "className="cta-button" >Book now</a>
           </div>
    {/* Repeat for other services */}

              <div className="service-card">
              {/* <img src="oil-change-icon.png" alt="Oil Change" /> */}
              {/* <img src="/Castrol-01.png" alt="Oil Change" /> */}
              <img src="Tire-Repair-Uptown-New-Orleans.webp" alt="tire" srcset="" />
              <h3>Tire Replacement</h3>
              <p>Short description of the service with bullet points highlighting key features.</p>
              {/* <button className="cta-button">Book Now</button> */}
              <a href="/service-booking "className="cta-button" >Book now</a>
              </div>


               <div className="service-card">
               {/* <img src="oil-change-icon.png" alt="Oil Change" /> */}
               {/* <img src="/Castrol-01.png" alt="Oil Change" /> */}
               <img src="istockphoto-1193247902-1024x1024.webp" alt="brake" srcset="" />
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
  <h2>Book Your Service</h2>
  <form>
    {/* Booking Form Fields */}
    <input type="text" placeholder="Name" />
    {/* Repeat for other form fields */}
    {/* <button type="submit" className="cta-button">Book Now</button> */}
    <a href="/authentication"className="cta-button" >Book now</a>
  </form>
</section>

{/* Footer Section */}
<footer id="contact" className="footer">
  <div className="contact-info">
 
        <h5>Brands Serviced By Us</h5>
        <ul class="footer-brand-list">
          <li><i class="fab fa-honda"></i> Honda</li>
          <li><i class="fas fa-motorcycle"></i> Hero MotoCorp</li>
          <li><i class="fas fa-motorcycle"></i> Hero Honda</li>
          <li><i class="fas fa-motorcycle"></i> TVS</li>
        
        </ul>
      
   
   
  <p>Contact Us</p>
        <p><i class="fas fa-phone"></i> +919003251754</p>
        <p><i class="fas fa-envelope"></i> hello@gobumpr.com</p>
        <p><i class="fas fa-clock"></i> (Mon-Sat) 9:30AM-6:30PM</p>
  </div>
  <div className="social-media">
    <a href="#">Facebook</a>
    {/* Repeat for other social media links */}
  </div>
  <p>Copyright Information</p>
  
</footer>



{/* Footer Section */}

<footer class="footer">
 
</footer>





</div>
);
}
 
export default HomePage;
