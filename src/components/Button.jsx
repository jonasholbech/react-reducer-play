import React, { useContext } from "react";
import { ACTIONS, NumberContext } from "../contexts/mainContext";
function Button() {
  const { state, dispatch } = useContext(NumberContext); // (*)  const onIncrease = () => dispatch({ type: ACTIONS.INCREASE });
  const onDecrease = () => dispatch({ type: ACTIONS.DECREASE });
  const onIncrease = () => dispatch({ type: ACTIONS.INCREASE });
  return (
    <div>
      <button onClick={onIncrease}>+1</button>
      <span>{state.value}</span>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Button;
