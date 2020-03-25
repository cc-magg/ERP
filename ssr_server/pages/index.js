import React, { Component } from "react";
import { initStore } from '../store';
import Router from 'next/router';
import { Map as map } from 'immutable';
import { bindActionCreators } from "redux";
import * as actions from '../public/src/actions/index';

//import components
import Home from '../public/src/pages/containers/home';

import {
    LocalStorageCheckForThis,
    LocalStorageGetData,
    LocalStorageRemoveItem
} from '../localStorageOptions';

class HomePage extends Component {
    componentDidMount() {
        /*if(LocalStorageCheckForThis('access') && this.props.result.size == 0) {
            let access = LocalStorageGetData('access');
            this.props.actions.saveUserAccess(map(JSON.parse(access)));
        }*/
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
        return (<Home />)
    }
}
function mapStateToProps(state, props) {
    /*let result = map();
    let access = state.get('user').get('access');
    if(access != ''){
        result = access;
    }
    return {
        result
    }*/
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default initStore(HomePage, '', mapDispatchToProps, 'HOME')