import { useReducer } from "react";
import { ACTIONS, reducer, initialState } from "../reducers/reducer";

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
