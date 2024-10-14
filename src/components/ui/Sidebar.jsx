import { AiOutlineSearch, AiOutlineVideoCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Main>
      <Link to={"/search"}>
        <SidebarDiv>
          <AiOutlineSearch />
          <p>찾기</p>
        </SidebarDiv>
      </Link>
      <Link to={"/movies"}>
        <SidebarDiv>
          <AiOutlineVideoCamera />
          <p>영화</p>
        </SidebarDiv>
      </Link>
    </Main>
  );
};

export default Sidebar;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: black;
  z-index: 999;
  width: 200px;
  height: 100vh;
  top: 120px;
  left: 0;
`;

const SidebarDiv = styled.div`
  display: flex;
  background-color: black;
  padding-left: 50px;
  align-items: center;
  gap: 10px;
`;
