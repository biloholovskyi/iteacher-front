import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app/app";
import ErrorBoundry from "./components/errorBoundry/errorBoundry";

import store from './store';

// подключаем общие стили
import css from './index.css'
import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App/>
      </Router>
    </ErrorBoundry>
  </Provider>, document.getElementById('root')
);