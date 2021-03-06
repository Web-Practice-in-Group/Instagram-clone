// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// React Redux
import { Provider } from "react-redux";

// Routes
import Routers from "./routers/Routers";

//NextUI
import { NextUIProvider } from "@nextui-org/react";

// Styles Scss
import "./assets/globals.scss";

// Store
import Insta from "./store";
const store = Insta();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <NextUIProvider>
      <Routers />
    </NextUIProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
