export const ACTIONS = {
  INCREASE: "increase",
  DECREASE: "decrease",
};
export const initialState = {
  value: 0,
};
export const reducer = (state, action) => {
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
