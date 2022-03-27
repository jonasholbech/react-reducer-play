import React, { useReducer } from "react";

export const ACTIONS = {
  INCREASE: "increase",
  DECREASE: "decrease",
};
const initialState = {
  value: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return {
        value: state.value + 1,
      };
    case ACTIONS.DECREASE:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};

function Button() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
