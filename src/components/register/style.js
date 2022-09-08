import styled, { keyframes } from "styled-components";

const animate = keyframes `
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center !important;
  label {
    margin-bottom: 10px;
  }
`;
export const Input = styled.input `
  width: 300px;
  height: 40px;
  margin-bottom: 15px;
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
export const CreatedAccountText = styled.div `
  width: 100%;
  font-size: 18px;
  color: #fff;
  text-align: center;
  animation: ${animate} 1s 1s linear;
  background: ${(props) =>
    props?.result === "User successfuly created..." ? "lightgreen" : "red"};
`;