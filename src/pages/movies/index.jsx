import { Link } from "react-router-dom";
import styled from "styled-components";

const Movies = () => {
  const CategoryPList = [
    {
      image: "../../public/logo.png",
      text: "현재 상영중인",
      link: "/movies/now-playing",
    },
    {
      image: "../../public/logo.png",
      text: "인기있는",
      link: "/movies/popular",
    },
    {
      image: "../../public/logo.png",
      text: "높은 평가를 받은",
      link: "/movies/top-rated",
    },
    {
      image: "../../public/logo.png",
      text: "개봉 예정중인",
      link: "/movies/up-coming",
    },
  ];

  return (
    <MoviesPage>
      <CategoryName>카테고리</CategoryName>
      <MovieCategoryList>
        {CategoryPList.map((category, index) => (
          <Link to={category.link} key={index}>
            <MovieCategory image={category.image}>
              <CategoryP>{category.text}</CategoryP>
            </MovieCategory>
          </Link>
        ))}
        ;
      </MovieCategoryList>
    </MoviesPage>
  );
};

export default Movies;

const MoviesPage = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding-left: 30px;
`;

const CategoryName = styled.h2`
  display: flex;
`;
const MovieCategoryList = styled.div`
  display: flex;
  padding-left: 30px;
  gap: 15px;
`;

const MovieCategory = styled.div`
  position: relative;
  width: 150px;
  height: 70px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const CategoryP = styled.p`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 5px;
  margin: 0;
  left: 10px;
  position: absolute;
`;
