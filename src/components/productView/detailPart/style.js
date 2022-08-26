import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  margin-bottom: 92px !important;
  h1 {
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: #3d3d3d;
    margin-bottom: 43px;
    span {
      color: grey;
    }
  }
`;
export const Wrapper = styled.div `
  display: flex;

  gap: 0 53px;
`;
export const ImageSide = styled.div `
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0 29px;
  .main__img {
    width: 444px;
    height: 444px;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 90%;
      cursor: pointer;
      transition: all 0.2s ease;
      :hover {
        opacity: 0.9;
      }
    }
  }
  .all__img {
    height: 100%;
    display: flex;
    align-items: center;
    ul {
      li {
        width: 100px;
        height: 100px;
        cursor: pointer;
        overflow: hidden;

        :hover img {
          transform: scale(1.05);
        }
        img {
          width: 90%;
          height: 90%;
          transition: all 0.2s ease;
        }
      }
    }
  }
`;
export const ContentSide = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 16px;
    color: #3d3d3d;
  }
  p {
    margin: 0;
  }
  .share__side {
    display: flex;
    align-items: center;
    gap: 0 10px;
    span {
      font-weight: bold;
      cursor: pointer;
      :hover {
        color: #46a358;
      }
    }
  }
  .bottomDesc {
    color: #acacac !important;
    margin-bottom: 10px;
    span {
      color: grey;
    }
  }
  .price__side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    .price {
      color: #46a358;
      font-weight: 600;
      font-size: 22px;
      line-height: 16px;
      margin: 15px 0 13px 0;
    }
    .iconReview {
      display: flex;
      align-items: center;
      gap: 0 5.5px;
      img {
        cursor: pointer;
      }
    }
  }
  .text__side {
    h3 {
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
      color: #3d3d3d;
      margin: 15px 0 11px 0;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #727272;
      margin-bottom: 24px;
    }
    .size__choose {
      display: flex;
      align-items: center;
      gap: 0 10px;
      li {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid lightgrey;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        :hover {
          border-color: #46a358;
          color: #46a358;
        }
        button {
          border: none;
          background: transparent;
          cursor: pointer;
        }
      }
    }
  }
`;
export const BtnGroup = styled.div `
  display: flex;
  align-items: center;
  margin: 20px 0 26px 0;
  gap: 0 12px;
  .count {
    display: flex;
    align-items: center;
    gap: 0 22px;
    margin-right: 15px;
    p {
      font-weight: bold;
      font-size: 16px;
      margin: 0;
    }
    button {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background: #46a358;
      border: none;
      color: #fff;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      :hover {
        opacity: 0.9;
      }
    }
  }
`;