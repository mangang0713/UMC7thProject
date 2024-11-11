import axiosInstance from "../api/constants/axios-instance";
import { useQuery } from "@tanstack/react-query";

const useCustomFetch = (endpoint) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchData", endpoint],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    },
    retry: 1,
    staleTime: Infinity,
  });

  return { data, isLoading, isError };
};

export default useCustomFetch;
