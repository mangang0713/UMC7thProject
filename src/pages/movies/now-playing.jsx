import MovieComponent from "../../components/movies/MovieComponent";

const NowPlaying = () => {
  return (
    <MovieComponent
      endpoint={
        "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1"
      }
    />
  );
};

export default NowPlaying;
