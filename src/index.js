import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/common.scss"
import { Provider } from 'react-redux'
import configtureStore from './store'

import AppRouter from "./router/AppRouter";

const store = configtureStore();

// eslint-disable-next-line
ReactDOM.render(
  <Provider store = { store }>
    <AppRouter></AppRouter>
  </Provider>
    ,
  document.getElementById('root')
);

