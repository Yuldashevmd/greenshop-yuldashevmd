import styled from "styled-components";

export const Container = styled.div ``;

export const Form = styled.form `
  display: flex;
  gap: 0 28px;
  margin-bottom: 40px;
  .wrapper {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #3d3d3d;
      margin-top: 37px;
    }
    .block {
      display: flex;
      flex-direction: column;
      span {
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #3d3d3d;
        margin-top: 15px;
      }
      label {
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #3d3d3d;
        margin-top: 15px;
      }
      input {
        width: 417px;
        height: 40px;
        margin: 10px 0 10px 0;
        border: 1px solid #eaeaea;
        border-radius: 3px;
        outline: none;
        padding: 0 10px;
      }
    }
  }
`;