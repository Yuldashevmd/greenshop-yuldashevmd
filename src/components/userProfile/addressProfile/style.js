import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    color: #3d3d3d;
    margin: 0;
  }
`;
export const Form = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 0 22px;
  margin-bottom: 40px;
  label {
    user-select: none;
  }
  .left-data {
    .input-block {
      display: flex;
      flex-direction: column;

      label {
        margin: 25px 0 10px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #3d3d3d;
      }
      input,
      select {
        width: 350px;
        height: 40px;
        border: 1px solid #eaeaea;
        border-radius: 3px;
        padding: 0 8px;
        outline: none;
        ::placeholder {
          color: #a5a5a5;
        }
      }
      textarea {
        resize: none;
        border: 1px solid #eaeaea;
        padding: 8px;
        outline: none;
      }
      .phone__countryCode {
        display: flex;
        align-items: flex-end;
        input {
          width: 272px;
        }
        select {
          width: 78px;
          height: 40px;
          border: 1px solid #eaeaea;
          border-radius: 3px;
        }
      }
    }
    .input-radio {
      display: flex;
      align-items: center;
      gap: 0 7px;
      margin: 32px 0 35px 0;
      input {
        cursor: pointer;
      }
    }
  }
`;