import styled from "styled-components";

const Container = styled.div `
  width: 1180px;
  margin: 0 auto;
  h1 {
    margin: 56px 0;
    text-align: center;
    font-weight: 700;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 8px;
  }
`;
export const Wrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  img {
    cursor: pointer;
    box-shadow: 0 0 5px lightgrey;
    transition: all 0.2s ease;
    :hover {
      opacity: 0.8;
    }
  }
`;
export { Container };