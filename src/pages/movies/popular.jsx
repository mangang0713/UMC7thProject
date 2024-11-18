import MovieComponent from "../../components/movies/MovieComponent";

const Popular = () => {
  return <MovieComponent endpoint={"movie/popular?language=ko-KR"} />;
};

export default Popular;
