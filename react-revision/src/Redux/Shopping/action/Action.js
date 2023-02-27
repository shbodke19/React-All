import { ADD_TO_CART, REMOVE_TO_CART, RESET_CART } from "../Constant";

export const addToCart = (data) => {
  console.log("addToCart action is called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = (data) => {
  console.log("removeToCart action is called", data);
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};

export const resetCart = (data) => {
  console.log("Reset Cart action is called", data);
  return {
    type: RESET_CART,
  };
};
