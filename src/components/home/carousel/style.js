import styled from "styled-components";
const Container = styled.div `
  width: 1180px;
  height: 450px;
  margin: 12px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-transform: uppercase;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
  }
  img {
    margin: 7px 0 7px 0;
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
const LeftContent = styled.div `
  width: 557px;
  margin: 68px 40px;
`;
const RightContent = styled.div `
  display: flex;
  align-items: center;
  .small__plant {
    position: absolute;
    bottom: 0;
    margin-left: 50px;
  }
`;

export { Container, LeftContent, RightContent };