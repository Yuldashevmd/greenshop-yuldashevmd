import styled from "styled-components";

export const Container = styled.div `
  width: 30%;
  min-height: 349px;
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3d3d3d;
    padding-bottom: 12px;
    border-bottom: 1px solid lightgrey;
  }
  form {
    .form__input {
      margin-top: 8px;
      display: flex;
      align-items: center;
      input {
        width: 70%;
        height: 40px;
        border: 1px solid #46a358;
        border-radius: 3px;
        outline: none;
        padding: 0 8px;
      }
      button {
        width: 30%;
        height: 40px;
        background: #46a358;
        border-radius: 0px 3px 3px 0px;
        border: none;
        color: #fff;
        cursor: pointer;
        outline: none;
      }
    }
    .details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 26px 0 0 0;
      p {
        margin: 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        color: #3d3d3d;
      }
      span {
        font-weight: 500;
        font-size: 18px;
        line-height: 16px;
        text-align: right;
        color: #3d3d3d;
      }
    }
    .viewShip {
      display: flex;
      justify-content: flex-end;
      margin: 8px 0;
      color: #46a358;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
export const Total = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 26px 0;
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #3d3d3d;
    margin: 0;
  }
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #46a358;
  }
`;
export const Link = styled.div `
  text-align: center;
  color: #46a358;
  margin: 14px 0;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: all 0.2s ease;
  }
`;