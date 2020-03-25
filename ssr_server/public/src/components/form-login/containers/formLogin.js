import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/form.js';
import * as actions from '../../../actions/index.js';
import Router from 'next/router';
import { Alert, Collapse, Well, Button, Panel } from 'react-bootstrap';

class FormContainer extends Component {
    state = {
        showAlert: false,
        alertContent: '',
        type: '',
        detectedToken: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log('dio submit userName: '+this.userName.value+' password: '+this.password.value);
        if(this.userName.value != '' && this.password.value != '') {
            this.setState({showAlert: false});
            this.userName.value.replace(" ", "%20");
            this.password.value.replace(" ", "%20");
            this.props.actions.callUserAccess(this.userName.value, this.password.value);
        } else {
            //alert('Por favor ingresar todos los datos¡¡');
            this.setState({
                showAlert: true,
                alertContent: 'Por favor ingresar TODOS los datos',
                type: 'warning'
            });
        }
    }
    setRef = element => {
        if(element != null) {
            if(element.name == 'userName'){
                this.userName = element
            } else {
                this.password = element
            }
        }
    }
    render() {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        
        return <div>
            <Form 
                handleSubmit={this.handleSubmit}
                setRef={this.setRef}
                baseColor={this.props.baseColor}
            />
            {(this.state.showAlert)? <Alert bsStyle={this.state.type}>{this.state.alertContent}</Alert> : (this.props.error)&& <Alert bsStyle="danger">{this.props.error}</Alert> }
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
function mapStateToProps(state, props) {
    let access = state.get('user').get('access');
    let error = state.get('user').get('error');

    return {
        error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);