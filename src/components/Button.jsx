import React, { useContext } from "react";
import { NumberContext } from "../contexts/mainContext";

function Button() {
  const state = useContext(NumberContext); // (*)  const onIncrease = () => dispatch({ type: ACTIONS.INCREASE });
  return (
    <div>
      <span>{state}</span>
    </div>
  );
}
export default Button;
