import React, { Component } from 'react';
import { Map as map } from 'immutable';

import ProfileComponent from '../components/profile';

class ProfileContainer extends Component {
    render() {
        return <ProfileComponent user_info={this.props.user_info}/>
    }
}

export default ProfileContainer;