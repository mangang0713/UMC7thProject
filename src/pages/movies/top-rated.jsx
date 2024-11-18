import MovieComponent from "../../components/movies/MovieComponent";

const TopRated = () => {
  return <MovieComponent endpoint={"movie/top_rated?language=ko-KR"} />;
};

export default TopRated;
