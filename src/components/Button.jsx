import React, { useContext } from "react";
import { NumberContext } from "../contexts/mainContext";
function Button() {
  const { count, setCount } = useContext(NumberContext);
  return (
    <div>
      <button onClick={() => setCount((old) => old + 1)}>+1</button>
      <span>{count}</span>
      <button onClick={() => setCount((old) => old - 1)}>-1</button>
    </div>
  );
}
export default Button;
