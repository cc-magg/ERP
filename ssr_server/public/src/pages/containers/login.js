import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as list, Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import Router from 'next/router';
import * as actions from '../../actions/index.js';
import Cookies from 'js-cookie';
import { logout, checkInCookieForUsers } from '../../../../utils/auth';

import { RingLoader } from 'react-spinners';
import HandleErrorContainer from '../../components/error/container/handle-error.js';
//import LoginComponent from '../components/login';
import LoginComponent from '../components/loginComponent';
import Layout from '../components/loginLayout';

/**
 * -TENGO QUE VALIDAR TANTO EN EL CLIENTE COMO EN EL SERVER
 * -que el servidor se encargue con middleware de validar el usuario cuando se abre o recarga la pagina
 * -si se llega a la pagina por redireccion del client entonces antes de hacer la redireccion se debe llamar al server
 * a preguntar si el token es valido, en caso de que si pues se hace la redireccion 
 * OJO SI SE SALTA ESTA VALIDACION SE ESTARIA DANDO ACCESO LIBRE
 */

class Login extends Component {
    state = {
        isLogued: false,
        token: '',
        showSpinner: this.props.showSpinner,
        error: ''
    }
    handleLogout = async () => {
        //console.log('PRESIONO LOGOUT DESDE LOGIN');
        //logout() validates the user and if there is user then proceeds to logout
        let logoutResult = await logout('/login');
        if (logoutResult == 'deleted') {
            //changing the redux token will update the state so the page reloads showing the login form
            //console.log('desde el cliente el resultado del logout fue: ' + logoutResult);
            this.props.actions.saveUserAccess('');
        } else console.log('Error while loging out ' + logoutResult);
    }
    async componentDidUpdate() {
        //console.log('entro en componentDidUpdate ');
        if (this.state.token != '') {
            //console.log('---> desde client COMPONENTDIDUPDATE se detecto un nuevo token y se mandara a validar al server', this.state.token);
            const tokenValidation = await checkInCookieForUsers();
            if (tokenValidation.data == 'logued') {
                console.log('---> desde client COMPONENTDIDUPDATE', tokenValidation.data);
                if (!this.state.isLogued) this.setState({ isLogued: true });
                //the window eventlistener in /pages/login.js will redirect to /main ALL /login pages
                window.localStorage.setItem("login", Date.now());
                Router.push('/main');
            }
        } else {
            if (this.state.isLogued) this.setState({ isLogued: false });
        }
        //console.log('salio de componentDidUpdate');
    }
    static getDerivedStateFromProps(props, state) {
        //console.log('entro en getDerivedStateFromProps ');
        let newState = {};
        if (props.showSpinner != state.showSpinner) {
            //console.log('getDerivedStateFromProps nuevo spinner '+props.showSpinner);
            //en caso de que halla un cambio en el estado del spinner pues actualizamos su state
            newState.showSpinner = props.showSpinner;
        }
        if (props.token != state.token) {
            newState.token = props.token;
        }
        if (props.error != state.error) {
            newState.isLogued = false;
        }
        return Object.keys(newState).length ? newState : null;
    }
    render() {
        return (<HandleErrorContainer>
            <Layout>
                {(this.state.showSpinner) ? <div className="spinner">
                    <RingLoader loading={this.state.showSpinner} color='#000000' /></div> :
                    <LoginComponent
                        isLogued={this.state.isLogued}
                        logout={this.handleLogout}
                    />}
            </Layout>
        </HandleErrorContainer>)
    }
}

function mapStateToProps(state, props) {
    let result = {};
    //let token = state.get('user').get('access');

    result.showSpinner = state.get('spinner').get('showSpinner');
    result.error = state.get('user').get('error');
    result.token = state.get('user').get('access');

    return result;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);