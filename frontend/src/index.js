import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import authReducer from "./components/redux/reducers/authReducer";
import thunk from "redux-thunk";

import Navigator from "./components/navigations/nav";
const middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
  // Other reducers here
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </BrowserRouter>
);
