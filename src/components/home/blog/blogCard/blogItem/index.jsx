import React from "react";
import { Container } from "./style";

const BlogItem = ({ info }) => {
  return (
    <Container>
      <img src={info?.img} alt="img" />
      <div className="card">
        <span>{info?.date}</span>
        <h3>{info?.title}</h3>
        <p>{info?.paragh}</p>
        <input type="button" value="Read More ->" />
      </div>
    </Container>
  );
};

export default BlogItem;
