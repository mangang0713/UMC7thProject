import { useParams } from "react-router-dom";
import Detail from "../../components/movies/MovieDetail/Detail";
import Credit from "../../components/movies/MovieDetail/Credit";

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <>
      <Detail movieId={movieId} />
      <Credit movieId={movieId} />
      <p>현재 페이지는 {movieId} 입니다.</p>
    </>
  );
};

export default MovieDetail;
