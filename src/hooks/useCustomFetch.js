import axiosInstance from "../api/constants/axios-instance";
import { useInfiniteQuery } from "@tanstack/react-query";

const useCustomFetch = (endpoint) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fetchData", endpoint],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await axiosInstance.get(
          `${endpoint}&page=${pageParam}`
        );
        return response.data;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        // lastPage의 구조를 확인하고 다음 페이지 계산
        console.log(lastPage);
        // 다음 페이지 계산
        const nextPage = lastPage.page + 1;
        return nextPage >= lastPage.total_pages ? undefined : nextPage;
      },
      retry: 1,
      staleTime: Infinity,
    });

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};

export default useCustomFetch;
