import React from "react";

import Banner from "../../organisms/banner/banner";
import Carousel from "../../organisms/carousel/carousel";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";

const Homepage = ({ banner, carousel, footer, header }) => {
  console.log("zz", banner);
  return (
    <>
      <Header {...header} />
      <Banner {...banner} />
      <Carousel {...carousel} />
      <Footer {...footer} />
    </>
  );
};

export default Homepage;
