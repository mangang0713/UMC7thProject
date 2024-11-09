import { useRef, useState } from "react";
import MovieComponent from "../../components/movies/MovieComponent";
import styled from "styled-components";

const Search = () => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    setSearchQuery(inputRef.current.value);
    setNoResults(false);
  };

  const handleNoResults = () => {
    setNoResults(true);
  };

  return (
    <>
      <SearchDiv>
        <SearchInput ref={inputRef} placeholder="검색어를 입력하세요." />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchDiv>
      {searchQuery && (
        <ResultsDiv>
          <MovieComponent
            endpoint={`/search/movie?query=${searchQuery}&include_adult=false&language=ko-KR&page=1`}
            onNoResults={handleNoResults}
          />
          {noResults && (
            <p>{inputRef.current.value}에 대한 검색 결과가 없습니다.</p>
          )}
        </ResultsDiv>
      )}
    </>
  );
};

export default Search;

const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 50px;
`;

const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  width: calc(100% - 200px);
  height: 40px;
  background-color: white;
  color: black;
`;

const SearchButton = styled.button`
  background-color: red;
  color: white;
  width: 100px;
`;

const ResultsDiv = styled.div`
  width: 100%;
  padding-top: 20px;
`;
