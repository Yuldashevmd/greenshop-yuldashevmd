import React, { createContext, useState } from "react";
export const ContextWrapper = createContext();
const Context = ({ children }) => {
  const [display, setDisplay] = useState(false);
  return (
    <ContextWrapper.Provider value={[display, setDisplay]}>
      {children}
    </ContextWrapper.Provider>
  );
};

export default Context;
