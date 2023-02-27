import { ADD_TO_CART, REMOVE_TO_CART, RESET_CART } from "../Constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condtion ", action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART condtion ", action);
      const remaininigItem = data.filter(
        (item, index) => index !== action.data
      );
      console.log("remaininigItem from cart ", remaininigItem);
      return [...remaininigItem];
    case RESET_CART:
      console.log("EMPTY_CART condtion ", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
