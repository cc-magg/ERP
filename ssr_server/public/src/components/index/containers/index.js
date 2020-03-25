import React, { Component } from 'react';

import IndexComponent from '../components/index';

class Index extends Component {
    openModule = title => {
        let temp = ''+title;
        this.props.changeContent(temp.toLowerCase());
    }
    render() {
        return <IndexComponent
            modules={this.props.modules}
            openModule={this.openModule}
        />
    }
}

export default Index;
