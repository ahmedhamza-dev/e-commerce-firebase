import React from "react";
import Router from "../../Router/Router";
import { StandradContainer } from "../../shared/StyledComponets.styles";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <StandradContainer>
        <Router />
      </StandradContainer>
      <Footer />
    </>
  );
};

export default Layout;
