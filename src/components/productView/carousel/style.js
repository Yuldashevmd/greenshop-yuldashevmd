import styled from "styled-components";
const Container = styled.div `
  width: 1180px;
  height: 450px;
  margin: 120px auto 56px auto;
  h2 {
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    color: #46a358;
  }
  .ant-carousel {
    width: 100%;
    height: 450px;
    .wraper {
      width: 100%;
      height: 450px;
      display: flex;
    }

    .slick-dots-bottom {
      bottom: 0;
      margin-bottom: 0;
    }
    .slick-dots li.slick-active {
      background: #46a358;
    }
    .slick-dots li > button {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: transparent;
    }
    .slick-dots li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: lightgrey;
    }
  }
`;

export { Container };