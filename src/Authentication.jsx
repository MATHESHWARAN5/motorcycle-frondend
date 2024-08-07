// import React, { useState } from 'react';
// import './Authentication.css'
// import axios from 'axios';
// function Authentication() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = e => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//    const register= await axios.post('http://localhost:5000/api/auth/login',formData)
//    const data = await register.json();
//     // Add authentication logic here
//     console.log(data);
//   };

//   return (
//     <div className="card ">
//       <div className='"container mt-5"'>
//       <div className="card-body " style={{width:"500px"}} >
//         <h2 className="card-title">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="email" name="email" placeholder='example@gmail.com' value={formData.email} onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" name="password" placeholder='password' value={formData.password} onChange={handleChange} required />
//           </div>
//           <button type="submit" className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Authentication;


// Authendication.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// // import '@fortawesome/fontawesome-free/css/all.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const Authentication = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     email: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/login', {
//         username: formData.username,
//         password: formData.password
//       });
//       console.log(res.data.message); // Assuming backend sends a success message
//       // Handle successful login (e.g., redirect to dashboard)
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('Invalid username or password');
//     }
//   };

//   const handleRegister = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/register', {
//         username: formData.username,
//         password: formData.password,
//         email: formData.email
//       });
//       console.log(res.data.message); // Assuming backend sends a success message
//       // Handle successful registration (e.g., show success message)
//     } catch (error) {
//       console.error('Error registering:', error);
//       setError('Username or email already exists');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">User Authentication</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <form onSubmit={handleLogin}>
//             <h3>Login</h3>
//             <div className="form-group">
//               <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//               <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} />
//             </div>
//             <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Login</button>
//           </form>
//           <p className="text-danger">{error}</p>
//         </div>
//         <div className="col-md-6">
//           <form onSubmit={handleRegister}>
//             <h3>Register</h3>
//             <div className="form-group">
//               <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//               <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//               <input type="email" className="form-control" name="email" placeholder='example@gmail.com' onChange={handleChange} />
//             </div>
//             <button type="submit" className="btn btn-success"><i className="fas fa-user-plus"></i> Register</button>
//           </form>
//           <p className="text-danger">{error}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Authentication;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Authentication() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     email: ''
//   });
//   const [isLogin, setIsLogin] = useState(true);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = isLogin ? '/api/auth/login' : '/api/auth/register';
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         const errorMessage = await response.json();
//         throw new Error(errorMessage.message);
//       }

//       const data = await response.json();
//       console.log(isLogin ? 'Login successful:' : 'Registration successful:', data);
//       toast.success(isLogin ? 'Login successful' : 'Registration successful');
//       // Handle successful login/registration, e.g., redirect to dashboard
//     } catch (error) {
//       console.error(isLogin ? 'Login failed:' : 'Registration failed:', error.message);
//       toast.error(isLogin ? 'Login failed' : 'Registration failed');
//       // Handle login/registration error, e.g., display error message
//     }
//   };

//   const toggleMode = () => {
//     setIsLogin((prevMode) => !prevMode);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card mx-auto" style={{ maxWidth: '400px' }}>
//         <div className="card-body">
//           <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label><FontAwesomeIcon icon={faUser} /> Username:</label>
//               <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="form-group">
//               <label><FontAwesomeIcon icon={faLock} /> Password:</label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
//             </div>
//             {!isLogin && (
//               <div className="form-group">
//                 <label><FontAwesomeIcon icon={faEnvelope} /> Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
//               </div>
//             )}
//             <button type="submit" className="btn btn-primary btn-block">{isLogin ? 'Login' : 'Register'}</button>
//           </form>
//           <p className="mt-3 text-center" onClick={toggleMode}>
//             {isLogin ? 'Create an account' : 'Already have an account? Login'}
//           </p>
//           <ToastContainer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Authentication;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios for making HTTP requests

function Authentication() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? 'http://localhost:5001/api/auth/login' : 'http://localhost:5001/api/auth/register';
      console.log(url);
      const response = await axios.post(url, formData); // Use axios to make POST request

      console.log(response.data);
      toast.success(isLogin ? 'Login successful' : 'Registration successful');
      // Handle successful login/registration, e.g., redirect to dashboard
    } catch (error) {
      console.log(error);
      toast.error(isLogin ? 'Login failed' : 'Registration failed');
      // Handle login/registration error, e.g., display error message
    }
  };

  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faUser} /> Username:</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faLock} /> Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" autoComplete="current-password" />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label><FontAwesomeIcon icon={faEnvelope} /> Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-block">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p className="mt-3 text-center" onClick={toggleMode}>
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
