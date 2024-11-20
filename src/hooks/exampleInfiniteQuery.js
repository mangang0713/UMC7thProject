// import axiosInstance from "../api/constants/axios-instance";
// import { useInfiniteQuery } from "@tanstack/react-query";

// const useCustomFetch = (endpoint) => {
//   const {
//     data,
//     isLoading,
//     isError,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage,
//   } = useInfiniteQuery({
//     queryKey: ["fetchData", endpoint],
//     queryFn: async ({ pageParam = 1 }) => {
//       const response = await axiosInstance.get(`${endpoint}&page=${pageParam}`);
//       return response.data;
//     },
//     initialPageParam: 1,
//     getNextPageParam: (lastPage) => {
//       // lastPage의 구조를 확인하고 다음 페이지 계산
//       console.log(lastPage);
//       // 다음 페이지 계산
//       const nextPage = lastPage.page + 1;
//       return nextPage >= lastPage.total_pages ? undefined : nextPage;
//     },
//     getPreviousPageParam: (firstPage) => {
//       console.log(firstPage);
//       const previousPage = firstPage.page - 1;
//       return previousPage < 0 ? undefined : previousPage;
//     },
//     retry: 1,
//     staleTime: Infinity,
//   });

//   return {
//     data,
//     isLoading,
//     isError,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage,
//   };
// };

// export default useCustomFetch;

/* infinite query를 사용할 때 데이터 합치기 */

// import styled from "styled-components";
// import useCustomFetch from "../../hooks/useCustomFetch";
// import Loading from "../ui/LoadingComponent";
// import ErrorComponent from "../ui/ErrorComponent";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const MovieComponent = ({ endpoint, onNoResults }) => {
//   const {
//     data,
//     isLoading,
//     isError,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage,
//   } = useCustomFetch(endpoint);
//   const navigate = useNavigate();
//   const movies = data?.pages?.flatMap((page) => page.results) || [];

//   useEffect(() => {
//     if (movies?.results?.length === 0 && onNoResults) {
//       onNoResults(); // 검색 결과가 없으면 onNoResults 호출
//     }
//   }, [movies, onNoResults]);

//   const handleClickImage = (movie) => {
//     navigate(`/movie/${movie.id}`);
//   };

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (isError) {
//     return <ErrorComponent />;
//   }

//   return (
//     <>
//       <MovieBox>
//         {movies.map((movie) => (
//           <Movie key={movie.id}>
//             <MovieImage
//               src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
//               alt={movie.title}
//               onClick={() => handleClickImage(movie)}
//             />
//             <MovieTitle>{movie.title}</MovieTitle>
//             <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
//           </Movie>
//         ))}
//       </MovieBox>
//       {hasPreviousPage && (
//         <button onClick={() => fetchPreviousPage()}>이전</button>
//       )}
//       {hasNextPage && <button onClick={() => fetchNextPage()}>다음</button>}
//     </>
//   );
// };

// export default MovieComponent;

// const MovieBox = styled.div`
//   display: flex;
//   width: 1150px;
//   padding: 30px;
//   flex-wrap: wrap;
//   gap: 15px;
// `;

// const Movie = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const MovieImage = styled.img`
//   border-radius: 10px;
//   width: 200px;
//   height: 300px;
//   transition: all 0.3s ease;
//   &:hover {
//     filter: brightness(80%);
//   }
// `;

// const MovieTitle = styled.p`
//   color: white;
//   width: 200px;
//   font-size: 12px;
//   font-weight: 700;
//   margin: 0;
//   text-align: left;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const MovieReleaseDate = styled.p`
//   color: white;
//   font-size: 10px;
//   font-weight: 500;
//   margin: 0;
//   text-align: left;
// `;
