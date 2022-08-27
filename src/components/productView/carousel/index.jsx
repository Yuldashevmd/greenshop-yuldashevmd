import { Carousel } from "antd";
import React from "react";
import { CardData } from "../../../utils/card";
import Card from "../../genericComp/Card";
import { Container } from "./style";

const CarouselPart = () => {
  return (
    <Container>
      <h2>Releted Products</h2>
      <Carousel autoplay>
        <div className="ant-carousel">
          <div className="wraper">
            {CardData.map((item) => (
              <Card info={item} />
            ))}
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default CarouselPart;
