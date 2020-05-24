import React, { Component } from "react";
import { initStore } from '../store';
import Link from 'next/link';
import Router from 'next/router';
import { Map as map } from 'immutable';
import { bindActionCreators } from "redux";
import * as actions from '../public/src/actions/index';
import { checkInCookieForUsers } from '../utils/auth';
import axios from 'axios';

//import components
import MainPage from '../public/src/pages/containers/main';

import {
    LocalStorageCheckForThis,
    LocalStorageGetData,
    LocalStorageRemoveItem
} from '../localStorageOptions';

class Main extends Component {
    state = {
        screenWidth: 0
    }
    componentDidMount() {
        //for the screen width detection so that on mobile the side bar menu is false on first load
        this.setState({ screenWidth: window.innerWidth });
        //here we use the localstorage eventlistener so that every tab from the browser listen when the logout is being called and then
        //it redirects to login all tabs from the browser (this event is called after the cookie.remove() so the login will show the form for every tab)
        //Add event listener when a restricted Page Component mounts
        window.addEventListener('storage', event => {
            if (event.key === 'logout') {
                this.props.actions.saveUserAccess('');
                Router.push('/login');
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
        //Remove event listener when the Component unmount and delete all data
        //the second parameter must be the same as the window.addEventListener second parameter for it to work
        window.removeEventListener('storage', event => {
            if (event.key === 'logout') {
                this.props.actions.saveUserAccess('');
                Router.push('/login');
            }
        });
        window.localStorage.removeItem('logout');
    }
    render() {
        return (<MainPage screenWidth={this.state.screenWidth} didFirstLoad={true} />)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default initStore(Main, '', mapDispatchToProps, 'MAIN')