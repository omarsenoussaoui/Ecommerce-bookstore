import axios from 'axios';

// Configure base properties for axios instance
const apiClient = axios.create({
  baseURL: 'https://localhost:44300/api', // Adjust this to your actual API URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
