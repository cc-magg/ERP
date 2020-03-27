import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as list, Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import Router from 'next/router';
import * as actions from '../../actions/index.js';
import Cookies from 'js-cookie';
import { logout, login } from '../../../../utils/auth';

import { RingLoader } from 'react-spinners';
import HandleErrorContainer from '../../components/error/container/handle-error.js';
//import LoginComponent from '../components/login';
import LoginComponent from '../components/loginComponent';
import Layout from '../components/loginLayout';

 /**
  * si es el primer login entonces desde el formulario se guarda en redux el nuevo token y tambien isTokenValid = true
  * al detectar un cambio en la prop.isTokenValid pues igualamos isLogued
  * al detectar un cambio en la prop.token pues guardamos el nuevos token
  * al actualizarce el componente, validamos si isLogued=true
  * en caso de ser true pues redireccionamos a /main
  * 
  * si ya tenia un token y va al login entonces redireccionamos a /main para validar el token desde auth.js
  */

class Login extends Component {
    state = {
        isLogued: false,
        token: map(),
        showSpinner: this.props.showSpinner,
        error: ''
    }
    handleLogout = () => {
        this.props.actions.saveUserAccess('');
        logout();
    }
    componentDidUpdate() {
        //console.log('entro en componentDidUpdate ');
        if (this.state.isLogued) {
            console.log('isLogued = true');
            login(this.props.token, '/main');
        }
        //console.log('salio de componentDidUpdate');
    }
    async componentDidMount() {
        //console.log('entro en componentDidMount ');
        if (!this.state.isLogued) {
            const token2 = await Cookies.get('token');
            if (token2) {
                //if there is a token already then we redirect to /main and the auth.js will validate the token before the user can see the main view
                Router.push('/main');
                //this.props.actions.callUserTokenValidation(token2);
            }
        }
    }
    static getDerivedStateFromProps(props, state) {
        //console.log('entro en getDerivedStateFromProps ');
        let newState = {};
        if (props.showSpinner != state.showSpinner) {
            //console.log('getDerivedStateFromProps nuevo spinner '+props.showSpinner);
            //en caso de que halla un cambio en el estado del spinner pues actualizamos su state
            newState.showSpinner = props.showSpinner;
        }
        if (props.isTokenValid != state.isLogued) {
            newState.isLogued = props.isTokenValid;
        }
        if (props.token != state.token && props.token.length > 0) {
            newState.token = props.token;
        }
        if (props.error != state.error) {
            //console.log('getDerivedStateFromProps nuevo error '+props.error);
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
                        logout={() => this.handleLogout}
                    />}
            </Layout>
        </HandleErrorContainer>)
    }
}

function mapStateToProps(state, props) {
    let result = {};
    //let token = state.get('user').get('access');

    //console.log('mapStateToProps ERROR: ' + state.get('user').get('error'));
    result.showSpinner = state.get('spinner').get('showSpinner');
    result.error = state.get('user').get('error');
    result.token = state.get('user').get('access');
    result.isTokenValid = state.get('user').get('isTokenValid');

    return result;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);