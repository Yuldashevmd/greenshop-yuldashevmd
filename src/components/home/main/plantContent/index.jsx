import React from "react";
import { CardData } from "../../../../utils/card";
import Card from "../../../genericComp/Card";
import { Container } from "./style";

const Plants = () => {
  return (
    <Container>
      {CardData?.map((item) => (
        <Card key={item?.id} info={item} />
      ))}
    </Container>
  );
};

export default Plants;
