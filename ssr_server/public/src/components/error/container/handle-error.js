import React, { Component } from 'react';

import RegularError from '../component/regular-error.js';

class HandleError extends Component {
    state = {
        handleError: false,
        errorInfo: ''
    }
    componentDidCatch = (error, errorInfo) => {
        this.setState({
            handleError: true,
            errorInfo: errorInfo
        });
    }
    render() {
        if(this.state.handleError){
            return <RegularError errorInfo={this.state.errorInfo}/>
        } else {
            return (<div>{this.props.children}</div>)
        }
    }
}

export default HandleError;