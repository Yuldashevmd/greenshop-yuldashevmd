import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div `
  width: 1180px;
  height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  img {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      opacity: 0.8;
    }
  }
`;
const Ul = styled.ul `
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0 50px;
  margin-bottom: 0;
  .active {
    color: #46a358 !important;
    border-bottom: 3px solid #46a358;
  }
`;
const Li = styled(NavLink)
`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: grey;
`;
const CardLogin = styled.div `
  display: flex;
  align-items: center;
  gap: 0 35px;
`;

export { Container, Li, Ul, CardLogin };