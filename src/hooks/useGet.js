import { useState, useCallback, useEffect } from 'react';
import { apiClient } from './useApi';

export const useGet = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { lazy = false, params = {}, headers = {} } = options;

  const fetchData = useCallback(async (queryParams = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get(url, {
        params: { ...params, ...queryParams },
        headers,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch data';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(params), JSON.stringify(headers)]);

  useEffect(() => {
    if (!lazy) {
      fetchData();
    }
  }, [fetchData, lazy]);

  const refetch = useCallback((newParams = {}) => {
    return fetchData(newParams);
  }, [fetchData]);

  return { data, loading, error, refetch };
};

// Specialized hooks
export const useGetById = (url, id, options = {}) => {
  return useGet(id ? `${url}/${id}` : null, { lazy: !id, ...options });
};

export const useGetPaginated = (url, options = {}) => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    hasMore: false,
  });

  const { data, loading, error, refetch } = useGet(url, {
    ...options,
    params: { page: pagination.page, limit: pagination.limit, ...options.params },
  });

  useEffect(() => {
    if (data?.pagination) {
      setPagination(data.pagination);
    }
  }, [data]);

  const nextPage = useCallback(() => {
    if (pagination.hasMore) {
      setPagination(prev => ({ ...prev, page: prev.page + 1 }));
      refetch({ page: pagination.page + 1, limit: pagination.limit });
    }
  }, [pagination, refetch]);

  const prevPage = useCallback(() => {
    if (pagination.page > 1) {
      setPagination(prev => ({ ...prev, page: prev.page - 1 }));
      refetch({ page: pagination.page - 1, limit: pagination.limit });
    }
  }, [pagination, refetch]);

  const goToPage = useCallback((page) => {
    setPagination(prev => ({ ...prev, page }));
    refetch({ page, limit: pagination.limit });
  }, [pagination.limit, refetch]);

  return {
    data,
    loading,
    error,
    pagination,
    nextPage,
    prevPage,
    goToPage,
    refetch,
  };
};