import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Sidebar from "../components/ui/Sidebar";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Sidebar />

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default RootLayout;

const OutletWrapper = styled.div`
  overflow-y: auto;
  width: calc(100vw - 200px);
  height: calc(100vh - 120px);
  margin-left: 200px;
  margin-top: 120px;
`;