import { useState, useCallback } from "react";
import { apiClient} from "./useApi";

/* ================================
   STANDARD POST HOOK
================================ */
export const usePost = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = options.headers || {};

  const post = useCallback(
    async (payload = {}, config = {}) => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiClient.post(url, payload, {
          headers: { ...headers, ...(config.headers || {}) },
          ...config,
        });

        setData(response.data);
        return { success: true, data: response.data };
      } catch (err) {
        const status = err.response?.status;
        const errorData = err.response?.data;

        /* 🔥 Laravel 422 Validation Errors */
        if (status === 422 && errorData?.errors) {
          setError({
            type: "validation",
            message: errorData.message || "Validation failed",
            errors: errorData.errors,
          });

          return {
            success: false,
            error: {
              type: "validation",
              message: errorData.message,
              errors: errorData.errors,
            },
          };
        }

        /* 🔥 Unauthorized */
        if (status === 401) {
          setError({
            type: "auth",
            message: errorData?.message || "Unauthorized",
          });

          return {
            success: false,
            error: {
              type: "auth",
              message: errorData?.message || "Unauthorized",
            },
          };
        }

        /* 🔥 General API Errors */
        const message =
          errorData?.message ||
          err.message ||
          "Something went wrong. Please try again.";

        setError({
          type: "general",
          message,
        });

        return {
          success: false,
          error: {
            type: "general",
            message,
          },
        };
      } finally {
        setLoading(false);
      }
    },
    [url, headers]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, post, reset };
};

/* ================================
   MULTIPART FORM POST HOOK
================================ */
export const usePostForm = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const postForm = useCallback(
    async (formData, onProgress) => {
      setLoading(true);
      setError(null);
      setProgress(0);

      try {
        const response = await apiClient.post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            if (!progressEvent.total) return;

            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            setProgress(percentCompleted);
            if (onProgress) onProgress(percentCompleted);
          },
        });

        setData(response.data);
        return { success: true, data: response.data };
      } catch (err) {
        const message =
          err.response?.data?.message ||
          err.message ||
          "Upload failed";

        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
        setProgress(0);
      }
    },
    [url]
  );

  return { data, loading, error, progress, postForm };
};