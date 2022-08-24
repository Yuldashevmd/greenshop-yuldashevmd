import styled from "styled-components";
const getType = (type) => {
    switch (type) {
        case "green":
            return { background: "#46A358", color: "#fff" };

        case "white":
            return {
                background: "#fff",
                color: "#46A358",
                border: "1px solid #46A358",
            };
        default:
            return { color: "#727272", border: "1px solid #EAEAEA" };
    }
};
const Div = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "35px")};
  margin: ${(props) => (props.m ? props.m : "0px")};
  padding: ${(props) => (props.p ? props.p : "0px")};
  border-radius: 6px;
  ${({ type }) => getType(type)}
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
  :hover {
    opacity: 0.9;
  }
  button {
    display: flex;
    justify-content: center;
    gap: 0 7px;
    align-items: center;
    border: none !important;
    background: transparent;
    ${({ type }) => getType(type)}
    cursor: pointer;
    p {
      margin: 0;
    }
  }
`;

export { Div };