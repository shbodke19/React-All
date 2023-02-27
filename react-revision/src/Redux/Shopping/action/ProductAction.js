import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "../Constant";

export const productLists = () => {
  // let data = await fetch("https://fakestoreapi.com/products/1");
  // data = await data.json();
  // console.log("product action is called", data);
  return {
    type: PRODUCT_LIST,
    // data: "",
  };
};

// export const setProductList = (data) => {
//   console.log("set action is called", data);
//   return {
//     type: SET_PRODUCT_LIST,
//     data,
//   };
// };

// export const searchProduct = (query) => {
//   // console.log("set action is called", query);
//   return {
//     type: SEARCH_PRODUCT,
//     query,
//   };
// };
