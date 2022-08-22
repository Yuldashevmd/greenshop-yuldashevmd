import React from "react";
import BlogPost from "./blog";
import CarouselComp from "./carousel";
import MainDiv from "./main";
import Recommend from "./recommend";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <CarouselComp />
      <MainDiv />
      <Recommend />
      <BlogPost />
    </Container>
  );
};

export default Home;
