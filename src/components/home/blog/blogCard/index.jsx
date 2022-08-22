import React from "react";
import BlogItem from "./blogItem";
import { Container, Wrapper } from "./style";
import { data } from "./data";

const BlogCard = () => {
  return (
    <Container>
      <h1 className="title">Our Blog Posts</h1>
      <p className="paragh">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <Wrapper>
        {data?.map((item) => (
          <BlogItem key={item?.id} info={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default BlogCard;
