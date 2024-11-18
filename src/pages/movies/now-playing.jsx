import MovieComponent from "../../components/movies/MovieComponent";

const NowPlaying = () => {
  return <MovieComponent endpoint={"movie/now_playing?language=ko-KR"} />;
};

export default NowPlaying;
