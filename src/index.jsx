// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// React Redux
import { Provider } from "react-redux";

// Routes
import Routers from "./routers/Routers";

//NextUI
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {   // Custom colors
      background: "#121212",

      primaryLight: '#262626',
      primaryLightHover: '#262626',
      primaryLightActive: '#262626',
      primaryLightContrast: '#262626',
      primary: '#262626',
      primaryBorder: '#262626',
      primaryBorderHover: '#262626',
      primarySolidHover: '#262626',
      primarySolidContrast: '$white',
      primaryShadow: '#262626',
    },
  },
});

// Styles Scss
import "./assets/globals.scss";

// Store
import Insta from "./store";
const store = Insta();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Routers />
      </NextUIProvider>
    </NextThemesProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
