import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MovieComponent = ({ endpoint }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDJmNjg2NjRmOTkyMzEwZGNhNmZkNmUzYzVlZDFiMCIsIm5iZiI6MTcyODcxNjk4OS4zMzUyNTMsInN1YiI6IjY3MGExZjgzM2JiNDU1N2M2NjlhZjcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B0j1nminh6oHHQScoUgVirbKhuJVudWU0PQxOl4bmok`,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("데이터 가져오기 실패 : ", error);
      }
    };

    getMovies();
  }, [endpoint]);
  return (
    <MovieBox>
      {movies.map((movie) => (
        <Movie key={movie.id}>
          <MovieImage
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
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
