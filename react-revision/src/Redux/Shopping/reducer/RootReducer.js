import { combineReducers } from "redux";
import { cartData } from "./Reducer";
import { productData } from "./ProductReducer";

const RootReducer = combineReducers({
  cartData,
  productData,
});
export default RootReducer;
