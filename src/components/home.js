// Home Component

import React from 'react';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

export default class Home extends React.Component{
    render() {
        const styleAppBar = {
            background: '#f94a4d'
        }
        return(
            <MuiThemeProvider>
                <div className="home">
                    <AppBar
                        title="home"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        style={styleAppBar}
                    />
                    <h4>Home - Pumgrana Dashboard</h4>

                    <div><Link to="/register">Register</Link></div>
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/forgot-password">Forgot password</Link></div>
                    <div><Link to="/dashboard">Dashboard</Link></div>
                </div>
            </MuiThemeProvider>
        )
    }
}
