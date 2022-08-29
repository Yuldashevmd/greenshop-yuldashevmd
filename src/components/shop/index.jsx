import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import { useLocation } from "react-router-dom";
import ProductTable from "./product";
import CardTotal from "./cardTotal";
import CarouselPart from "../productView/carousel";

const Shop = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <h1>
        Home<span> {pathname}</span>
      </h1>
      <Wrapper>
        <ProductTable />
        <CardTotal />
      </Wrapper>
      <CarouselPart info={"You may be interested in"} />
    </Container>
  );
};

export default Shop;
