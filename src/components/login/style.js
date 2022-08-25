import styled from "styled-components";

export const Container = styled.div `
  display: ${(props) => (props.display === "true" ? "flex" : "none")};
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
  min-height: 600px;
  max-height: 656px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  border-bottom: 10px solid #46a358;
  position: relative;
  z-index: 9999;
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
`;
export const BtnGroup = styled.div `
  margin: 0 0 30px 0;
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
export const Links = styled.button `
  border: none;
  background: transparent;
  color: #000;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #46a358;
  }
  :focus {
    color: #46a358;
  }
`;