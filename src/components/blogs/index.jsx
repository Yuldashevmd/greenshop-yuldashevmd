import React from "react";
import { Container, Wrapper } from "./style";
import { CardData } from "../../utils/card";
const Blogs = () => {
  return (
    <Container>
      <h1>Gallery</h1>
      <Wrapper>
        {CardData.map((item) => (
          <img key={item?.id} src={item?.img} alt="img" />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Blogs;
