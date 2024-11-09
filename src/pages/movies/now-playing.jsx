import MovieComponent from "../../components/movies/MovieComponent";

const NowPlaying = () => {
  return (
    <MovieComponent endpoint={"movie/now_playing?language=ko-KR&page=1"} />
  );
};

export default NowPlaying;
