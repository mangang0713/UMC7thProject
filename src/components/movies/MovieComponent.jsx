import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import Loading from "../ui/LoadingComponent";
import ErrorComponent from "../ui/ErrorComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieComponent = ({ endpoint, onNoResults }) => {
  const [page, setPage] = useState(1);

  const {
    data: movies,
    isLoading,
    isError,
    isPreviousData,
  } = useCustomFetch(endpoint, page);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies?.results?.length === 0 && onNoResults) {
      onNoResults(); // 검색 결과가 없으면 onNoResults 호출
    }
  }, [movies, onNoResults]);

  const handleClickImage = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      <MovieBox>
        {movies.results.map((movie) => (
          <Movie key={movie.id}>
            <MovieImage
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
              onClick={() => handleClickImage(movie)}
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
          </Movie>
        ))}
      </MovieBox>
      <PaginationDiv>
        <PaginationButton
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          이전
        </PaginationButton>
        <p>{page}페이지</p>
        <PaginationButton
          onClick={() => setPage((old) => old + 1)}
          disabled={isPreviousData || movies.page >= movies.total_pages}
        >
          다음
        </PaginationButton>
      </PaginationDiv>
    </>
  );
};

export default MovieComponent;

const MovieBox = styled.div`
  display: flex;
  width: 1150px;
  padding: 30px;
  flex-wrap: wrap;
  gap: 15px;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieImage = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 300px;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(80%);
  }
`;

const MovieTitle = styled.p`
  color: white;
  width: 200px;
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieReleaseDate = styled.p`
  color: white;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
  text-align: left;
`;

const PaginationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.disabled ? "gray" : "red")};
  color: white;
  height: 40px;
  width: 80px;
`;
