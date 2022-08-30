import styled from "styled-components";

const Container = styled.div `
  width: 1180px;
  margin: auto;

  h1 {
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: #000;
    margin: 36px 0 51px 0;
    span {
      color: #3d3d3d;
    }
  }
`;
export const Wrapper = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 0 86px;
  margin-bottom: 87px;
`;

export { Container };