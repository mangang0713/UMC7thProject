import MovieComponent from "../../components/movies/MovieComponent";

const TopRated = () => {
  return <MovieComponent endpoint={"movie/top_rated?language=ko-KR&page=1"} />;
};

export default TopRated;
