import { useEffect, useState } from "react";
import axiosInstance from "../api/constants/axios-instance";

const useCustomFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await axiosInstance.get(
          `${endpoint}?language=ko-KR&page=1`
        );
        setData(data.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
