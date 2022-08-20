import React from "react";
import { Container } from "./style";
import PlantBig from "../../../assets/carouselIcon/plantBig.svg";

const Card = ({ title, price }) => {
  return (
    <Container>
      <img src={PlantBig} alt="img" />
      <p>{`${title || "Barberton Daisy"}`}</p>
      <span>${`${price || "119.00"}`}</span>
    </Container>
  );
};

export default Card;
