import React, { useState, createContext, useMemo } from "react";

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  /* const [state, dispatch] = useReducer(reducer, initialState); 
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]); */
  const contextValue = {
    count,
    setCount,
  };
  return (
    <NumberContext.Provider value={contextValue}>
      {children}
    </NumberContext.Provider>
  );
};
