import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("PRODUCT_LIST condtion ", action);
      return [...action.data];

    default:
      return data;
  }
};
