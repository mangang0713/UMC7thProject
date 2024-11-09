import styled from "styled-components";
import useCustomFetch from "../../../hooks/useCustomFetch";

const Detail = ({ movieId }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`movie/${movieId}?language=ko-KR&page=1`);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred.</p>;
  }

  const backdropImage = `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`;
  return (
    <BackgroundImage backdropPath={backdropImage}>
      <DetailTitle>{movies.title}</DetailTitle>
      <DetailAverage>평균 {movies.vote_average?.toFixed(1)}</DetailAverage>
      <DetailRelease>{movies.release_date?.slice(0, 4)}</DetailRelease>
      <DetailRunTime>{movies.runtime}분</DetailRunTime>
      <DetailTagline>{movies.tagline}</DetailTagline>
      <DetailOverView>{movies.overview}</DetailOverView>
    </BackgroundImage>
  );
};

export default Detail;

const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
  padding-top: 30px;
  background-image: ${({ backdropPath }) => `url(${backdropPath})`};
  background-size: cover;
  background-position: center;
`;

const DetailTitle = styled.p`
  font-size: 22px;
  font-weight: 900;
  margin: 0;
`;

const DetailAverage = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DetailRelease = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DetailRunTime = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DetailTagline = styled.p`
  font-size: 16px;
`;

const DetailOverView = styled.p`
  font-size: 14px;
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0;
`;
