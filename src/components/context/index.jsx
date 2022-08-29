import React, { createContext, useState } from "react";
export const ContextWrapper = createContext();
const Context = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <ContextWrapper.Provider
      value={{ display: [display, setDisplay], count: [count, setCount] }}
    >
      {children}
    </ContextWrapper.Provider>
  );
};

export default Context;
