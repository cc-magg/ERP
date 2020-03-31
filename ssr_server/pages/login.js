import React, { Component } from "react";
import { initStore } from '../store';
import Router from 'next/router';
import { Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as actions from '../public/src/actions/index';
import {
    LocalStorageCheckForThis,
    LocalStorageGetData,
    LocalStorageRemoveItem
} from '../localStorageOptions';

import LoginPage from '../public/src/pages/containers/login';
import { login } from '../utils/auth';

class Login extends Component {
    state = {
        isLogued: false
    }
    componentDidMount() {
        window.addEventListener('storage', event => {
            if (event.key === 'login') {
                Router.push('/main');
            }
        });
        //navegation Events
        Router.onRouteChangeStart = url => {
            console.log('App is changing to: ', url);
            this.props.actions.showSpinner(true);
        }
        Router.onRouteChangeComplete = url => {
            console.log('App changed to: ', url);
            this.props.actions.showSpinner(false);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('storage', event => {
            if (event.key === 'login') {
                Router.push('/main');
            }
        });
        window.localStorage.removeItem('login');
    }
    render() {
        return (<LoginPage isLogued={this.state.isLogued}/>)
    }
}

function mapStateToProps(state, props) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default initStore(Login, mapStateToProps, mapDispatchToProps, 'LOGIN')