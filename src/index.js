import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Product from "./container/Product/Product";
import ProductRedux from "./container/ProductRedux/ProductRedux";
import StatefullComponent from "./container/StatefullComponent/StatefullComponent";
import {
  configureStore,
  createSlice,
  legacy_createStore,
} from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Halaman error</div>,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "product-redux",
    element: <ProductRedux />,
  },
  {
    path: "statefull",
    element: <StatefullComponent />,
  },
]);

// export const counterReducer = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 5,
//   },
//   reducers: {
//     increment: state => {
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     }
//   }
// })

// export const {increment, decrement} = counterReducer.actions

// export default counterReducer.reducer

// const storeRedux = configureStore({
//   reducer: {
//     counter: rootReducer,
//   }
// })

const initialState = {
  counter: 5,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        counter: state.counter + 1,
      };
    case "MINUS_COUNTER":
      let counter = state.counter;
      if (state.counter > 0) {
        counter = state.counter - 1;
      }
      return {
        counter: counter,
      };
    default:
      return state;
  }
};

const storeRedux = legacy_createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Fragment>
      <Provider store={storeRedux}>
        <div>
          <ul>
            <li>A</li>
            {/* <Link to='/index'>Product</Link> */}
            <li>B</li>
            <li>C</li>
          </ul>
        </div>
        <RouterProvider router={router} />
      </Provider>
    </Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
