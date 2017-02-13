// External imports
import React from 'react';
import { Link } from 'react-router'
var request = require('superagent');

// Styles
import 'bootstrap/dist/css/bootstrap.css';

// Main class
class Dashboard extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { error: null, success: null, histories: [] };
    this.get_histories();
  }

  done(err, res)
  {
    if (res.error) return this.setState({error: [res.error.message], success: null});

    return this.setState({ histories: res.body });
  }

  get_histories()
  {
    request
      .get('api/user/histories')
      .end(this.done.bind(this));
  }

  messages()
  {
    if (!this.state.error) return null;

    var to_html = (type, e,i) => (<div key={i} className={"alert alert-"+type}>{e}</div>);
    var html_errors = this.state.error.map(to_html.bind(this, "danger"));
    var html_successes = this.state.success.map(to_html.bind(this, "success"));

    return <div className="messages">{html_errors} {html_successes}</div>
  }

  histories()
  {
    return this.state.histories;
  }

  render()
  {
    return(
      <div className="dashboard">
        <h4>History - Pumgrana Dashboard</h4>

        <div><Link to="/">Home</Link></div>

        {this.messages()}

        {this.histories()}
      </div>);
  }
}

export default Dashboard
