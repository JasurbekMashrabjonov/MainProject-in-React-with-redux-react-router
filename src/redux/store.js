import { configureStore } from "@reduxjs/toolkit";
// import clothes from "./Slice/clothes"
// import clothes from "./reducers/clothes";
import { newReducer } from "./reducers/clothes";
const stringTypeMiddleware = (store) => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }
  next(action);
};
// const reducer = {
//   clothes:clothes,
//   createReduce:createReduce
// }
export const store = configureStore({
  reducer: newReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringTypeMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  // enhancers: [batchedSubscribe(debounceNotify)],
});
