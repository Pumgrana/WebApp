// Dashboard Component

import React from 'react';
import { Link } from 'react-router'

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const Dashboard = () => {
    return(
  <div className="dashboard">
    <h4>History - Pumgrana Dashboard</h4>

    <div><Link to="/">Home</Link></div>
  </div>)
}

export default Dashboard
