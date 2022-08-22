import styled from "styled-components";

const Container = styled.div `
  display: flex;
  margin: 101px auto 138px auto;
  gap: 28px;
  .block {
    width: 586px;
    height: 250px;
    display: flex;
    align-items: flex-end;
    background: #fbfbfb;
    img {
      height: 292px;
    }
  }
`;
const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 20px 37px 0;
  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    text-align: right;
    text-transform: uppercase;
    color: #3d3d3d;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    color: #727272;
    margin-bottom: 20px;
  }
`;

export { Container, Content };