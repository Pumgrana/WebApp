import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store  from './store'

// Components
import Home from './components/home.js';
import Dashboard from './components/dashboard.js';

// Account Components
import Register from './components/register.js';
import Login from './components/login.js';
import ForgotPassword from './components/forgot_password.js';

// Routes
ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>

    <Route path="/" component={Home}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>

    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/forgot-password" component={ForgotPassword}></Route>

  </Router>
  </Provider>,
  document.getElementById('root')
);
