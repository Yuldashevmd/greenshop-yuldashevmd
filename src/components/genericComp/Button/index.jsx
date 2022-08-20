import React from "react";
import { Div } from "./style";

const ButtonDiv = ({ width, height, type, children, icon, onClick, m, p }) => {
  return (
    <Div
      width={width}
      height={height}
      type={type}
      onClick={onClick}
      m={m}
      p={p}
    >
      {icon}
      <button type={type}>{children}</button>
    </Div>
  );
};

export default ButtonDiv;
