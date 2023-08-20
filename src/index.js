import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/App";
import store from "./store";

import "./styles/index.scss";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
