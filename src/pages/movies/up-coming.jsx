import MovieComponent from "../../components/movies/MovieComponent";

const UpComing = () => {
  return <MovieComponent endpoint={"movie/upcoming?language=ko-KR"} />;
};

export default UpComing;
