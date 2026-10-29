
import { useState, useCallback } from "react";
import axios from "axios";

const isDevelopment = import.meta.env.DEV;

const API_BASE_URL = isDevelopment
  ? "/api-proxy/api"
  : (import.meta.env.VITE_API_URL || "/api");

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add authentication token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle API errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

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
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "An error occurred";

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

  const get = useCallback(
    (url, params = {}, config = {}) =>
      execute(() => apiClient.get(url, { ...config, params })),
    [execute]
  );

  const post = useCallback(
    (url, body = {}, config = {}) =>
      execute(() => apiClient.post(url, body, config)),
    [execute]
  );

  const put = useCallback(
    (url, body = {}, config = {}) =>
      execute(() => apiClient.put(url, body, config)),
    [execute]
  );

  const patch = useCallback(
    (url, body = {}, config = {}) =>
      execute(() => apiClient.patch(url, body, config)),
    [execute]
  );

  const del = useCallback(
    (url, config = {}) =>
      execute(() => apiClient.delete(url, config)),
    [execute]
  );

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
