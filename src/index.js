import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


