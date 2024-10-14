import MovieComponent from "../../components/movies/MovieComponent";

const TopRated = () => {
  return (
    <MovieComponent
      endpoint={
        "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1"
      }
    />
  );
};

export default TopRated;
