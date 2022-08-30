import React from "react";
import { CardData } from "../../../utils/card";
import Card from "../../genericComp/Card";
import { Container } from "./style";
import AliceCarousel from "react-alice-carousel";

const CarouselPart = ({ info }) => {
  const item = {
    items: CardData.map((item) => <Card key={item?.id} info={item} />),
  };
  return (
    <Container>
      <h2>{info || "Releted Products"}</h2>
      <AliceCarousel
        disableButtonsControls={true}
        items={item?.items}
        responsive={{
          0: {
            items: 1,
          },
          720: {
            items: 3,
          },
          1024: {
            items: 4,
          },
        }}
      />
    </Container>
  );
};

export default CarouselPart;
