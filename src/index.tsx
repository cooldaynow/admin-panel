import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./store/reducer";
import App from "./containers/App";
import rootSaga from "./store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
