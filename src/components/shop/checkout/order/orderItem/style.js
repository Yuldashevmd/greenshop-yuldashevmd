import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 11px 0;
  background: #fbfbfb;
  .count {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #727272;
    margin: 0;
  }
  .price {
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #46a358;
    border: none;
    margin: 0;
    padding: 0;
  }
  .img-part {
    display: flex;
    align-items: center;
    gap: 0 11px;
    img {
      width: 70px;
    }
    p {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;