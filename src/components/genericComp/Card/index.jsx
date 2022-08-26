import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const Card = ({ info }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/home/${info?.id}`)}>
      <img src={info?.img} alt="img" />
      <p>{`${info?.name || "Barberton Daisy"}`}</p>
      <span>${`${info?.price || "119.00"}`}</span>
    </Container>
  );
};

export default Card;
