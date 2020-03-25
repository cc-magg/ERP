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

class Login extends Component {
    //aqui no hacemos validaciones de sesion (cookie auth) por que a esta vista se puede entrar sin estar autenticado
    componentDidMount() {
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
    render() {
        return (<LoginPage />)
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