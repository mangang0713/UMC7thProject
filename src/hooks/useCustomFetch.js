import axiosInstance from "../api/constants/axios-instance";
import { useQuery } from "@tanstack/react-query";

const useCustomFetch = (endpoint, page) => {
  const { data, isLoading, isError, isPreviousData } = useQuery({
    queryKey: ["fetchData", endpoint, page],
    queryFn: async () => {
      const response = await axiosInstance.get(`${endpoint}&page=${page}`);
      return response.data;
    },
    keepPreviousData: true,
    retry: 0,
    staleTime: Infinity,
  });

  return { data, isLoading, isError, isPreviousData };
};

export default useCustomFetch;
