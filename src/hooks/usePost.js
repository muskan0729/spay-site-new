import { useState, useCallback } from 'react';
import { apiClient } from './useApi';

export const usePost = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { headers = {} } = options;

  const post = useCallback(async (payload = {}, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.post(url, payload, {
        headers: { ...headers, ...config.headers },
        ...config,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to create resource';
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

  return { data, loading, error, post, reset };
};

// Specialized hook for form data
export const usePostForm = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const postForm = useCallback(async (formData, onProgress) => {
    setLoading(true);
    setError(null);
    setProgress(0);
    
    try {
      const response = await apiClient.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
          onProgress?.(percentCompleted);
        },
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to upload';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
      setProgress(0);
    }
  }, [url]);

  return { data, loading, error, progress, postForm };
};