import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Link to={"/"}>
        <LogoImage src={logo} alt="로고 이미지" />
      </Link>
      <ButtonsDiv>
        <Link to={"/login"}>
          <NavButton color={"black"}>로그인</NavButton>
        </Link>
        <Link to={"/signup"}>
          <NavButton color={"red"}>회원가입</NavButton>
        </Link>
      </ButtonsDiv>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  padding-top: 20px;
  z-index: 999;
`;

const ButtonsDiv = styled.div`
  gap: 15px;
`;

const LogoImage = styled.img`
  margin-left: 10px;
  width: 100px;
  height: 100px;
`;

const NavButton = styled.button`
  background-color: ${(props) => props.color};
  width: 120px;
  height: 50px;
  margin-right: 20px;
  color: white;
  &:hover {
    background-color: gray;
  }
`;
