import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../reducer/RootReducer";
import productSaga from "../Saga/ProductSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
