import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index.js';

import HandleErrorContainer from '../../components/error/container/handle-error.js';
import HomeComponent from '../components/home';
import { logout, checkInCookieForUsers } from '../../../../utils/auth';

class Home extends Component {
    state = {
        access: false
        //agent: this.props.agent //THIS should update the view when a new agent is created
    }
    async componentDidMount() {
        const tokenValidation = await checkInCookieForUsers();
        if (tokenValidation.data == 'logued') {
            this.setState({access: true});
        } else {
            this.setState({access: false});
        }
        //this.props.actions.createBurnAgent('yyy-yyy-yyy', 'rss');
    }
    logout = async value => {
        console.log('PRESIONO LOGOUT DESDE LOGIN');
        //logout() validates the user and if there is user then proceeds to logout
        let logoutResult = await logout('/main');
        if (logoutResult.data == 'deleted') {
            //logout() is calling a auth method that calls a windows eventlistener that was created in the /pages/main.js wich redirects to /login
            //console.log('desde el cliente el resultado del logout fue: ' + logoutResult.data);
        } else console.log('Error while loging out ' + logoutResult.data);
    }
    render() {
        let newMessage = (this.props.userMessage) && 'nuevo Mensaje: ' + this.props.userMessage;
        return (
            <HandleErrorContainer>
                <HomeComponent
                    message={this.props.message}
                    showSpinner={this.props.showSpinner}
                    access={this.state.access}
                    logout={this.logout}
                />
            </HandleErrorContainer>
        )
    }

    handleSubscriptionChange = dataSource => {
        this.setState({
            subscribedValue: dataSource.value,
        });
    };
}

function mapStateToProps(state, props) {
    let message = state.get('data').get('message');
    let userMessage = state.get('data').get('userMessage');
    let agent = state.get('agent');
    let showSpinner = state.get('spinner').get('showSpinner');
    /*let access = state.get('user').get('access');
    if (access.size > 0 && access.get('access_granted') == true) {
        access = true;
    } else {
        access = false;
    }*/
    return {
        message,
        userMessage,
        agent,
        showSpinner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);