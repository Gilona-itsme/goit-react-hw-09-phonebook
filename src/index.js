import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "modern-normalize/modern-normalize.css";
import store from "./components/redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
