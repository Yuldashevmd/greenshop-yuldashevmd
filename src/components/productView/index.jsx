import React from "react";
import { useParams } from "react-router-dom";
import DefinitionPart from "./definitionPart";
import DetailPart from "./detailPart";
import { Container } from "./style";

const ProductView = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <DetailPart />
      <DefinitionPart />
    </Container>
  );
};

export default ProductView;
