import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your server URL
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;