import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div `
  width: 1180px;
  margin: 61px auto;
  display: flex;
  gap: 0 28px;
`;
export const Aside = styled.div `
  width: 280px;
  height: 431px;
  box-shadow: 0 0 5px lightgrey;
  h3 {
    font-weight: 600;
    font-size: 18px;
    padding: 10px 0 0 21px;
    margin-bottom: 0;
  }
  ul {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 1px solid lightgrey;
  }
  button {
    background: transparent;
    border: none;
    color: #46a358;
    font-weight: bold;
    padding-left: 24px;
    cursor: pointer;
  }
`;
export const Link = styled(NavLink)
`
  padding-left: 24px;
  color: #727272;
  font-weight: 600;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
  :hover {
    color: #46a358;
    border-left: 3px solid #46a358;
  }
`;