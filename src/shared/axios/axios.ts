import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || 'https://backend-hotel-9s5j.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh'
    ) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post('/auth/refresh');

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed', refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;