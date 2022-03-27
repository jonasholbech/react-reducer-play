import React, { createContext } from "react";

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  return <NumberContext.Provider value={1}>{children}</NumberContext.Provider>;
};
