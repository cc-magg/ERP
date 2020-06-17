import React, { Component } from 'react';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

import { checkInCookieForUsers } from '../../../../../utils/auth';
import Inventory from '../components/inventory';
import { AccessDenied, CardNoData } from '../../cardContainerLayout/cardTypes';
import { locations } from '../../../test_info';

class InventoryContainer extends Component {
    //el acceso puede cambiar por no tener permisos o por tener no tener valida la sesion
    //en caso de no tener valida la sesion, se debe redirigir al login
    state = {
        access_granted: false
    }
    getInventory = () => {
        this.props.actions.callInventory(this.props.location, 'Name,ASC');
    }
    updateLocation = location => {
        this.props.actions.saveSessionLocation(location);
    }
    searchHandler = target => {

    }
    static getDerivedStateFromProps(props, state) {
        //console.log('inventario desde getDerivedStateFromProps()', props.inventory);
        if (props.inventory == 'notLogued') {
            return { access_granted: false }
        } else return { 
            //here we need to check the permissions
            access_granted: true
        }
    }
    componentDidMount() {
        //console.log('inventario desde didmount()', this.props.inventory);
        this.getInventory();
        /*if (this.props.inventory == 'notLogued') {
            Router.push('/login');
        }*/
    }
    componentDidUpdate() {
        if (this.state.access_granted == false) {
            Router.push('/login');
        }
    }
    componentWillUnmount() {
        this.props.actions.clearInventory();
    }
    render() {
        //aqui tenemos que validar que este autenticado (auth) y que tenga permisos para ver esa informacion
        //mientras valida deberia de mostrar un spinner
        // (access_granted)? <InventoryComponent />  : <AccessDenied />
        //return  this.state.access_granted == true ? <Inventory searchHandler={this.searchHandler} getInventory={this.getInventory} inventory={this.props.inventory}/> : <AccessDenied />
        if (this.props.inventory != undefined && this.props.inventory.length > 0 && this.state.access_granted == true) {
            console.log('es lleno', this.props.inventory);
            return <Inventory
                searchHandler={this.searchHandler}
                getInventory={this.getInventory}
                inventory={this.props.inventory}
                updateLocation={this.updateLocation}
            />;
        } else if (this.props.inventory.length == 0 && this.state.access_granted == true) {
            console.log('es vacio');
            return <CardNoData />
        } else {
            return <AccessDenied />
        }
    }
}

const mapStateToProps = (state, props) => {
    let result = {}
    result.inventory = state.get('inventory').get('products');;
    result.location = state.get('userSession').get('location');
    //console.log('inventory', inventory);

    return result;
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(InventoryContainer);