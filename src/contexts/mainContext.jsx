import React, { useState, useEffect, createContext } from "react";

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      //TODO ref
      setNum((old) => old + 1);
    }, 5000);
  }, []);
  return (
    <NumberContext.Provider value={num}>{children}</NumberContext.Provider>
  );
};
