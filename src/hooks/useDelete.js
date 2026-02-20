import { useState, useCallback } from 'react';
import { apiClient } from './useApi';

export const useDelete = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { headers = {} } = options;

  const remove = useCallback(async (id, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = id ? `${url}/${id}` : url;
      const response = await apiClient.delete(endpoint, {
        headers: { ...headers, ...config.headers },
        ...config,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to delete resource';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(headers)]);

  // Bulk delete
  const removeMany = useCallback(async (ids, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.delete(url, {
        data: { ids },
        headers: { ...headers, ...config.headers },
        ...config,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to delete resources';
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

  return { data, loading, error, remove, removeMany, reset };
};