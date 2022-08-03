import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "./components/fonts";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#181818",
    },
    primary: {
      100: "#EEEEEE",
      200: "#E0E0E0",
    },
    button: {
      100: "#24B47E",
    },
  },
  fonts: {
    code: `'Source Code Pro'`,
  },
  styles: {
    global: () => ({
      body: {
        bg: "#181818",
      },
    }),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <Fonts />
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

