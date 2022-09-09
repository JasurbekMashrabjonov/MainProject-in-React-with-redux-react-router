import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { applyMiddleware, compose, createStore } from "redux";
// import clothes from "./redux/reducers/clothes";
// import reduxThunk from "redux-thunk";
// import { store } from './redux/store';

// const enhacer =
//   (createStore) =>
//   (...args) =>
//  {
//     const store = createStore(...args);
//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) =>{

//       if (typeof action === "string") {
//         oldDispatch({type:action})
//       } else {
//         oldDispatch(action)
//       }
//     }
//     return store;

//   };

// const store = createStore(clothes, compose(applyMiddleware(reduxThunk,stringTypeMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
