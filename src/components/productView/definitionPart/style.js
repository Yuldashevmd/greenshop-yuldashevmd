import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const flex = css `
  display: flex;
  align-items: center;
`;
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 400px;
  .active {
    color: #46a358;
    border-bottom: 3px solid #46a358;
    padding-bottom: 10px;
  }
`;
export const ButtonLink = styled.div `
  ${flex}
  gap: 0 30px;
  border-bottom: 1px solid lightgrey;
`;
export const Link = styled(NavLink)
`
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
  background: transparent;
  border: none;
  padding-bottom: 10px;
  :hover {
    cursor: pointer;
    color: #46a358;
  }
`;