import { INCREMENT, DECREMENT, ZERO } from "./Constant";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};
export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};
export const zero = (number) => {
  return {
    type: ZERO,
    payload: number,
  };
};
