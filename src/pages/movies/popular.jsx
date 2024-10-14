import MovieComponent from "../../components/movies/MovieComponent";

const Popular = () => {
  return (
    <MovieComponent
      endpoint={
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"
      }
    />
  );
};

export default Popular;
