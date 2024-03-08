import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {thunk} from "redux-thunk"
import {Provider} from "react-redux"
import rootReducer from "./Pages/reducers/RootReducer";
import {composeWithDevTools } from "redux-devtools-extension"
import {createStore,applyMiddleware} from "redux"
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>

);

