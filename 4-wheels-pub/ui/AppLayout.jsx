import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;
const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  align-self: center;
  &::before {
    content: "";
    background-image: url("https://www.momlifetv.com/wp-content/uploads/2021/07/family-dinner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    z-index: -1;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </StyledAppLayout>
  );
}

export default AppLayout;
