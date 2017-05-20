// External imports
import React from 'react';
import { Link } from 'react-router';
var request = require('superagent');

import classNames from 'classnames/bind';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

// Main class
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, success: null, histories: [] };
    this.get_histories();
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  done(err, res) {
    if (res.error) return this.setState({error: [res.error.message], success: null});

    return this.setState({ histories: res.body });
  }

  get_histories() {
    request
      .get('api/histories')
      .end(this.done.bind(this));
  }

  messages() {
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

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
      this.setState({open: true});
  }

  render(){
    const styleAppBar = {
        background: '#f94a4d'
    }
    const styleDrawer = {
        zIndex: '1000',
        position: 'relative',
        display: 'inline-block'
    }
    return(
        <MuiThemeProvider>
            <div className="dashboard">
                <AppBar
                    className={classNames('app-bar', {'expanded': this.state.open})}
                    title="Navigation history"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style={styleAppBar}
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <div className="dashboard__content">
                    <Drawer
                        docked={true}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        zDepth={0}
                        containerStyle={styleDrawer}>
                        <MenuItem>Here date</MenuItem>
                        <MenuItem>Here date</MenuItem>
                    </Drawer>
                    <div className={classNames('dashboard__history-list app-content', {'expanded': this.state.open})}>
                        <h4>History - Pumgrana Dashboard</h4>

                        <div><Link to="/">Home</Link></div>
                        <List>
                            <ListItem primaryText="Item Title" />
                            <ListItem primaryText="Item Title" />
                        </List>

                        {this.messages()}

                        {this.histories()}
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    )
  }
}
