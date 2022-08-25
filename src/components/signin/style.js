import styled from "styled-components";
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