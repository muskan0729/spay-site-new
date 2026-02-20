import { useState, useCallback } from 'react';
import { apiClient } from './useApi';

export const usePut = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { headers = {} } = options;

  const put = useCallback(async (id, payload = {}, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = id ? `${url}/${id}` : url;
      const response = await apiClient.put(endpoint, payload, {
        headers: { ...headers, ...config.headers },
        ...config,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update resource';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(headers)]);

  // PATCH method
  const patch = useCallback(async (id, payload = {}, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = id ? `${url}/${id}` : url;
      const response = await apiClient.patch(endpoint, payload, {
        headers: { ...headers, ...config.headers },
        ...config,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update resource';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(headers)]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, put, patch, reset };
};