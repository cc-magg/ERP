import React, { Component } from 'react';

import InventoryComponent from '../components/inventory';

class InventoryContainer extends Component {
    searchHandler (target) {

    }
    render() {
        return <InventoryComponent searchHandler={this.searchHandler}/>
    }
}

export default InventoryContainer;