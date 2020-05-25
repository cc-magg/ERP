import React, { Component } from 'react';

import ProductComponent from '../components/products';

export default class Products extends Component {
    state = {
        unitValues: false
    }
    advancedSearch = () => {
        //este abre el popup de busqueda avanzada
        console.log('click')
    }
    history = () => {
        //este abre el popup del historial
        console.log('click')
    }
    handleSearchProduct = e => {
        //este se llama en input Change
        console.log('click', e.target.value)
    }
    handleUnitsSwitch = e => {
        console.log(e.target.checked)
        this.setState({ unitValues: e.target.checked })
    }
    render() {
        return <ProductComponent
            unitValues={this.state.unitValues}
            advancedSearch={this.advancedSearch}
            history={this.history}
            handleSearchProduct={this.handleSearchProduct}
            handleUnitsSwitch={this.handleUnitsSwitch}
        />
    }
}