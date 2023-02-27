import { put, takeEvery } from "@redux-saga/core/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../Constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3200/Products");
  data = yield data.json();
  //   console.log("product action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

// function* searchProducts(data) {
//   let result = yield fetch(`http://localhost:4000/Products?q=${data.query}`);
//   result = yield result.json();
//   console.log("searchProducts action is called", data);
//   yield put({ type: SET_PRODUCT_LIST, data: result });
// }

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  // yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
