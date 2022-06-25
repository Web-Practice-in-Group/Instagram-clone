// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// React Redux
import { Provider } from "react-redux";

// Routes
import Routes from "./routes/Routes"

// Styles Scss
import "./assets/globals.scss"

// Store
import hello from "./store";
const store = hello();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Routes/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
