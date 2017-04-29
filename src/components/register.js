// External imports
import React from 'react';
import { Link } from 'react-router'
var request = require('superagent');

// Styles
import 'bootstrap/dist/css/bootstrap.css';

// Main class
class Register extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { error: null, success: null };
  }

  done(err, res)
  {
    if (res.error) return this.setState({ error: [res.error.message], success: null });

    return this.setState({ error: null, success: ["You are registred"] });
  }

  register()
  {
    if (this.refs.password.value !== this.refs.password_2.value)
    {
      return this.setState({ error: ["Passwords are not equals"], success: null });
    }

    var data = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    request
      .post('api/auth/')
      .send(data)
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

  render()
  {
    return (
      <div className="register">
        <h4>Register - Pumgrana Dashboard</h4>

        <div><Link to="/">Home</Link></div>
        <br />

        {this.messages()}

        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Email</td>
              <td><input type="email" ref="email" className="form-control" /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" ref="password" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>Password Again</td>
              <td>
                <input type="password" ref="password_2" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Register" className="btn btn-primary"
                       onClick={this.register.bind(this)} />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>);
  }
}

export default Register
