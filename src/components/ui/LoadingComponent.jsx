import styled from "styled-components";
import MovieSkeleton from "./MovieSkeleton";

const Loading = () => {
  return (
    <LoadingBox>
      {[...Array(20)].map((_, index) => (
        <LoadingContent key={index}>
          <SkeletonMovie />
          <SkeletonTitle />
          <SkeletonDay />
        </LoadingContent>
      ))}
    </LoadingBox>
  );
};

export default Loading;

const LoadingBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 15px;
  width: 100%;
  padding: 20px;
`;

const LoadingContent = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SkeletonMovie = styled(MovieSkeleton)`
  width: 200px;
  height: 300px;
`;

const SkeletonTitle = styled(MovieSkeleton)`
  width: 200px;
  height: 20px;
`;

const SkeletonDay = styled(MovieSkeleton)`
  width: 200px;
  height: 15px;
`;
