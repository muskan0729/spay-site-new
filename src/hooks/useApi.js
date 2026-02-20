import { useState, useCallback } from 'react';
import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle session expiration
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Generic API hook factory
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiCall();
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  // GET method
  const get = useCallback(async (url, params = {}, config = {}) => {
    return execute(() => apiClient.get(url, { params, ...config }));
  }, [execute]);

  // POST method
  const post = useCallback(async (url, data = {}, config = {}) => {
    return execute(() => apiClient.post(url, data, config));
  }, [execute]);

  // PUT method
  const put = useCallback(async (url, data = {}, config = {}) => {
    return execute(() => apiClient.put(url, data, config));
  }, [execute]);

  // PATCH method
  const patch = useCallback(async (url, data = {}, config = {}) => {
    return execute(() => apiClient.patch(url, data, config));
  }, [execute]);

  // DELETE method
  const del = useCallback(async (url, config = {}) => {
    return execute(() => apiClient.delete(url, config));
  }, [execute]);

  return {
    loading,
    error,
    data,
    execute,
    reset,
    get,
    post,
    put,
    patch,
    delete: del,
  };
};