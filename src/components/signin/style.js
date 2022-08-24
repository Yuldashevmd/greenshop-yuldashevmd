import styled from "styled-components";

export const Container = styled.div `
  display: ${(props) => (props.display == "true" ? "flex" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(11, 11, 11, 0.5);
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Modal = styled.div `
  width: 500px;
  height: 600px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  border-bottom: 10px solid #46a358;
  position: relative;
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    background: transparent;
    border: none;
    color: #46a358;
    cursor: pointer;
    :hover {
      color: green;
    }
  }
  h1 {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #46a358;
    span {
      color: #000;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 20px;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #46a358;
      margin: 0 0 25px 0;
      cursor: pointer;
      transition: all 0.2s ease;
      :hover {
        color: green;
      }
    }
  }
`;
export const Input = styled.input `
  width: 300px;
  height: 40px;
  margin-bottom: 17px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  outline: none;
  padding: 0 8px;
  :focus {
    border: 1px solid #46a358;
  }
`;

export const OtherMethods = styled.div `
  display: flex;
  align-items: center;
  margin-top: 40px;
  div {
    width: 101px;
    border: 1px solid #eaeaea;
  }
  p {
    margin: 0;
  }
`;
export const BtnMethods = styled.div `
  margin: 25px 0;
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;