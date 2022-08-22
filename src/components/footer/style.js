import styled from "styled-components";

export const Container = styled.div `
  width: 1180px;
  margin: 113px auto 0 auto;
  min-height: 610px;
  p {
    text-align: center;
    padding: 10px 0;
  }
`;
// upper
export const UpperSide = styled.div `
  height: 250px;
  padding: 37px 23px;
  display: flex;
  align-items: center;
  .blockImg {
    display: flex;
    gap: 0 62px;
    margin-right: 62px;
    img {
      transition: all 0.2s ease;
      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
  .block {
    height: 100%;

    .inputBlock {
      width: 333px;
      display: flex;
      align-items: center;
      input {
        width: 75%;
        border-radius: 6px 0 0 6px;
        height: 34px;
        border: 1px solid lightgrey;
        outline: none;
        padding: 0 10px;
      }
      button {
        width: 25%;
        height: 34px;
        background: #46a358;
        border-radius: 0px 6px 6px 0px;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
    h3 {
      font-weight: 700;
      font-size: 17px;
      line-height: 16px;
      color: #3d3d3d;
    }
    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 22px;
      color: #727272;
      text-align: left;
    }
  }
`;
// middle
export const MiddleSide = styled.div `
  height: 88px;
  padding: 0 23px;
  background: rgba(70, 163, 88, 0.1);
  display: flex;
  align-items: center;
  .middle__block {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .middle__block__item {
      width: 200px;
      display: flex;
      align-items: center;
      gap: 0 8px;
      p {
        margin: 0;
        text-align: start;
      }
    }
  }
`;
// bottom
export const BottomSide = styled.div `
  width: 100%;
  display: flex;
  height: 236px;
  padding: 33px 23px;
  background: #fbfbfb;
  .bottom__block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    ul {
      li {
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        color: #3d3d3d;
        cursor: pointer;
        :hover {
          opacity: 0.8;
        }
      }
    }
    .social {
      width: 30%;
      ul {
        display: flex;
        gap: 0 10px;
        li {
          border: 1px solid rgba(70, 163, 88, 0.6);
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;

          transition: all 0.2s linear;
          :hover {
            background: rgba(70, 163, 88, 0.6);
          }
        }
      }
    }
  }
`;