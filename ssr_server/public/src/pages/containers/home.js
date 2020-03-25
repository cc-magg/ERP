import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index.js';

import HandleErrorContainer from '../../components/error/container/handle-error.js';
import HomeComponent from '../components/home';

class Home extends Component {
    state = {
        //agent: this.props.agent //THIS should update the view when a new agent is created
    }
    componentDidMount() {
        //this.props.actions.createBurnAgent('yyy-yyy-yyy', 'rss');
    }
    logout = value => {
        this.props.actions.removeUserAccess();
    }
    render() {
        let newMessage = (this.props.userMessage) && 'nuevo Mensaje: ' + this.props.userMessage;
        return (
            <HandleErrorContainer>
                <HomeComponent
                    message={this.props.message}
                    showSpinner={this.props.showSpinner}
                    access={this.props.access}
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
    let access = state.get('user').get('access');
    if (access.size > 0 && access.get('access_granted') == true) {
        access = true;
    } else {
        access = false;
    }
    return {
        message,
        userMessage,
        agent,
        showSpinner,
        access
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);