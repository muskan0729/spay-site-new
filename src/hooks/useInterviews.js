import { useGet } from "./useGet";
import { usePost } from "./usePost";

export const useInterviews = () => {
  const {
    data,
    loading,
    error,
    refetch,
  } = useGet("/interviews");

  const {
    post,
    loading: creating,
  } = usePost("/interviews");

  const createInterview = async (payload) => {
    const res = await post(payload);

    if (res?.data) {
      await refetch(); // refresh after create
    }

    return res;
  };

  return {
    interviews: data || [],
    loading,
    error,
    creating,
    createInterview,
    refetch,
  };
};