// Login Component

import React from 'react';
import { Link } from 'react-router'

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    return(
  <div className="login">
    <h4>Login - Pumgrana Dashboard</h4>

    <div><Link to="/">Home</Link></div>

    <table className="table table-striped">
      <tbody>
        <tr>
          <td>Email</td>
          <td><input type="text" name="email" /></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="password" name="password" /></td>
        </tr>
        <tr>
          <td><input type="submit" value="Login" /></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>)
}

export default Login
