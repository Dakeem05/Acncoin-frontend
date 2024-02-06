import axios from 'axios';

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/', // Your API base URL
  baseURL: 'https://api-control.fabricspa.com.ng/api/', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the authorization header for each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('fabricspa_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
