import { NavLink } from "react-router-dom";
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
  }
`;
export const Wrapper = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 0 86px;
  margin-bottom: 87px;
`;

export const Link = styled(NavLink)
`
  color: #3d3d3d !important;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    opacity: 0.8;
  }
`;
export { Container };