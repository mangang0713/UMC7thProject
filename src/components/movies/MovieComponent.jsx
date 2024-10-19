import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import Loading from "../ui/LoadingComponent";
import ErrorComponent from "../ui/ErrorComponent";
import { useNavigate } from "react-router-dom";

const MovieComponent = ({ endpoint }) => {
  const { data: movies, isLoading, isError } = useCustomFetch(endpoint);
  const navigate = useNavigate();
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
    <MovieBox>
      {movies.results?.map((movie) => (
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
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  text-align: left;
`;

const MovieReleaseDate = styled.p`
  color: white;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
  text-align: left;
`;
