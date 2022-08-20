import styled from "styled-components";

const Container = styled.div `
  width: 258px;
  height: 350px;
  border-top: 3px solid transparent;
  box-shadow: 0 0 5px grey;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  img {
    width: 258px;
    height: 300px;
  }
  p,
  span {
    margin: 0;
    padding: 0 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3d3d3d;
  }
  span {
    color: #46a358;
    margin-top: 3px;
  }
  :hover {
    border-top: 3px solid #46a358;
  }
`;

export { Container };