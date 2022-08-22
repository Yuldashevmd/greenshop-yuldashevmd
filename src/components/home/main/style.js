import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div `
  margin: 46px 0;
  display: flex;
  gap: 0 50px;
`;
const Aside = styled.div `
  width: 310px;
  min-height: 774px;
  background: #fbfbfb;
  padding: 14px 18px;
  img {
    width: 100%;
    height: 470px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      opacity: 0.9;
    }
  }
  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;
    margin-bottom: 0;
    color: #3d3d3d;
  }
  h2 {
    margin: 40px 0 10px 0;
    font-weight: 700;
  }
  .first__h2 {
    margin: 0 0 10px 0;
  }
  .range {
    input {
      width: 100%;
    }
  }
`;
const Link = styled(NavLink)
`
  font-weight: 500;
  font-size: 15px;
  line-height: 40px;
  color: #3d3d3d;
`;
const LinkBlock = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 500;
  }
  .active {
    color: #46a358;
  }
`;
const Content = styled.div `
  width: 820px;
  display: flex;
  flex-direction: column;
  .sort {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
  }
  ul {
    display: flex;
    gap: 0 37px;
    li {
      font-weight: 600;
      font-size: 15px;
      line-height: 16px;
      color: #3d3d3d;
      cursor: pointer;
    }
  }
`;
const PageList = styled.div `
  display: flex;
  gap: 0 10px;
  align-items: center;
  justify-content: flex-end;
  margin: 90px 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      background-color: #46a358;
      color: #fff;
    }
  }
  .activePage {
    background-color: #46a358;
    color: #fff;
  }
`;
export { Container, Aside, Link, Content, LinkBlock, PageList };