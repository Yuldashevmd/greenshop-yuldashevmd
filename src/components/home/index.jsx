import React from "react";
import CarouselComp from "./carousel";
import MainDiv from "./main";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <CarouselComp />
      <MainDiv />
    </Container>
  );
};

export default Home;
