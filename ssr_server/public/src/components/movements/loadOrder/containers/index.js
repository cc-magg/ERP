import React, { Component } from 'react';
import LoadOrderComponent from '../components';

export default class LoadOrder extends Component {
    state = {
        orderNumber: ''
    }
    updateOrderNumer = orderNumber => {
        this.setState({ orderNumber })
    }
    handleSearchOrder = e => {
        //este se llama en input Change
        console.log('click', e.target.value)
    }
    render() {
        return <LoadOrderComponent
            orderNumber={this.state.orderNumber}
            updateOrderNumer={this.updateOrderNumer}
            handleSearchOrder={this.handleSearchOrder}
        />
    }
}