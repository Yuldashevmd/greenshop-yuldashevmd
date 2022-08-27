import React from "react";
import CarouselPart from "./carousel";
import DefinitionPart from "./definitionPart";
import DetailPart from "./detailPart";
import { Container } from "./style";

const ProductView = () => {
  return (
    <>
      <Container>
        <DetailPart />
        <DefinitionPart />
        <CarouselPart />
      </Container>
    </>
  );
};

export default ProductView;
