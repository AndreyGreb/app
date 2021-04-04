import React from "react";
import { createStore, Provider } from "react-dedux";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./Containers/App/App";
import reducer from "./store/reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
