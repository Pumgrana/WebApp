import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store  from './store'

// Components:
import Home from './components/home.js';
import Register from './components/register.js';
import Login from './components/login.js';
import Dashboard from './components/dashboard.js';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
