import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;

