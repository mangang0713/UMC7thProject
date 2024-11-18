import styled from "styled-components";
import useCustomDetailFetch from "../../../hooks/useCustomDetailFetch";

const Credit = ({ movieId }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomDetailFetch(`movie/${movieId}/credits?language=ko-KR&page=1`);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error occurred.</p>;
  }
  return (
    <>
      <p>감독/출연</p>
      <CreditBox>
        {movies.cast?.map((movie) => (
          <CharacterName key={movie.id}>
            <PersonImage
              src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
            />
            <CreditName>{movie.name}</CreditName>
            <CreditCharacterName>{movie.character}</CreditCharacterName>
          </CharacterName>
        ))}
      </CreditBox>
    </>
  );
};

export default Credit;

const CreditBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;

const CharacterName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const PersonImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const CreditName = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

const CreditCharacterName = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 600;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;
