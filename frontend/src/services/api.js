import axios from "axios";

// Environment-aware API base URL
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL
    || "http://localhost:5105/api",

  headers: {
    "Content-Type": "application/json",
  },

  // Prevent hanging requests
  timeout: 5000,
});

export default api;