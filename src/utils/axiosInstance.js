import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api', // Your backend API base URL
  timeout: 10000, // Set timeout for requests
});

// Request Interceptor to add Authorization Header
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Adjust token retrieval method if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor for handling errors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Redirect or handle 401 Unauthorized error
      // Example: window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
