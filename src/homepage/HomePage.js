import React from "react";
import SubCard from "../subCard/SubCard";
import MiddleCard from "../middleCard/MiddleCard";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SubCard />
      <MiddleCard />
      <Footer />
    </>
  );
};

export default HomePage;
