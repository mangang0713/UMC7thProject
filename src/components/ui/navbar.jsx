import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../public/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../@common/AuthContext";
import { userAPI } from "../../api/constants/mainAPI";

const Navbar = () => {
  const { isLogin, logout } = useContext(AuthContext);
  console.log("accessToken:", isLogin);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await userAPI();
        setUserName(userData.email.split("@")[0]);
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
      }
    };

    if (isLogin) fetchUserData();
  }, [isLogin]);

  return (
    <Nav>
      <Link to={"/"}>
        <LogoImage src={logo} alt="로고 이미지" />
      </Link>
      {isLogin ? (
        <ButtonsDiv>
          <p>{userName}님 반갑습니다.</p>
          <NavButton color={"black"} onClick={logout}>
            로그아웃
          </NavButton>
        </ButtonsDiv>
      ) : (
        <ButtonsDiv>
          <Link to={"/login"}>
            <NavButton color={"black"}>로그인</NavButton>
          </Link>
          <Link to={"/signup"}>
            <NavButton color={"red"}>회원가입</NavButton>
          </Link>
        </ButtonsDiv>
      )}
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
  display: flex;
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
