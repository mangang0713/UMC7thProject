import MovieComponent from "../../components/movies/MovieComponent";

const UpComing = () => {
  return (
    <MovieComponent
      endpoint={
        "https://api.themoviedb.org/3/movie/up_coming?language=ko-KR&page=1"
      }
    />
  );
};

export default UpComing;
