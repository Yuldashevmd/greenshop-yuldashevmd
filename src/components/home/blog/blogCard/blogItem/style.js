import styled from "styled-components";

export const Container = styled.div `
  width: 268px;
  height: fit-content;
  overflow: hidden;

  img {
    width: 100%;
    height: 196px;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
  :hover img {
    transform: scale(1.02);
  }
  .card {
    padding: 8px 15px;
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #46a358;
    }
    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      color: #3d3d3d;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #727272;
    }
    input {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      border: none;
      background: transparent;
      color: #3d3d3d;
      :hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;