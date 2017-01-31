// Home Component

import React from 'react';
import { Link } from 'react-router'

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return(
  <div className="home">
    <h4>Home - Pumgrana Dashboard</h4>

    <div><Link to="/register">Register</Link></div>
    <div><Link to="/login">Login</Link></div>
    <div><Link to="/forgot-password">Forgot password</Link></div>
    <div><Link to="/dashboard">Dashboard</Link></div>

  </div>)
}

export default Home
