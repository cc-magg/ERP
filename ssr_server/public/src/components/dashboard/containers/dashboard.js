import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/index';

import DashboardComponent from '../components/dashboard';

class DashboardContainer extends Component {
    test = data => {
        //console.log('presiono el boton '+data)
        this.props.actions.callProfesors(data);
    }
    render() {
        return <DashboardComponent test={this.test} profesors={this.props.profesors}/>
    }
}

function mapStateToProps(state, props) {
    let access = state.get('user').get('access');
    let showSpinner = state.get('spinner').get('showSpinner');
    let profesors = state.get('profesors').get('profesorsList');
    
    if(access.size > 0) {
        access = access.get('access_granted');
    } else {
        access = false;
    }
    return {
        access,
        showSpinner,
        profesors
    }
}
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);