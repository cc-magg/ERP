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

/**lo mas seguro es que el usuario no tenga un token, en este caso solo es mostrar el formulario, pero,
 * en caso de que si tenga un token, se debe revisar y si ya no es valido entonces se muestra el formulario
 * si es valido entonces se muestra la vista de que ya esta logueado que si desea hacer logout
 */

class Login extends Component {
    //the form call an action wich ask the token and then saves it in the redux store as 'access'
    //and mapStateToProps renames it as 'token'
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
        //if the comoponent update because now the user is logued (from getDerivedStateFromProps validations)
        //then here we create the cookie and redirect to /main
        if (this.state.isLogued) {
            login(this.props.token, '/main');
        } else {
            this.props.actions.saveUserAccess('');
        }
        //console.log('salio de componentDidUpdate');
    }
    async componentDidMount() {
        //console.log('entro en componentDidMount ');
        //on page load check, if there was already a cookie token then it's saved in the store so that
        //getDerivedStateFromProps can validate it
        if (!this.state.isLogued) {
            const token2 = await Cookies.get('token');
            if (token2) {
                this.props.actions.saveUserAccess(token2);
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
        if (props.token != state.token) {
            //if there is a new token in the store its validated, if valid then isLogued: true
            //if not then the store token is removed
            //console.log('getDerivedStateFromProps nuevo token '+props.token);
            if (props.token.length > 0) {
                if ('a' == 'a') {
                    //if the token is valid
                    console.log('isLogued = true');
                    newState.token = props.token;
                    newState.isLogued = true;
                } else {
                    //if the token is not valid
                    console.log('isLogued = false');
                    newState.isLogued = false;
                }
            } else {
                console.log('isLogued = false');
                //if the token is empty
                newState.isLogued = false;
            }
        }
        if (props.error != state.error) {
            //console.log('getDerivedStateFromProps nuevo error '+props.error);
            //login returned error insted of token
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

    return result;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);