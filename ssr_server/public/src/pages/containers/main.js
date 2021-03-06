import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as list, Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index.js';
import Link from 'next/link';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { Grid, Row, Col } from 'react-bootstrap';
import { PulseLoader } from 'react-spinners';
import { logout } from '../../../../utils/auth';

import HandleErrorContainer from '../../components/error/container/handle-error';
import MainLayout from '../components/main-layout';
import ModuleLayout from '../components/main-module-layout';
import MainComponent from '../components/main';
import MenuComponent from '../components/menu';
import { ModalLocation } from '../../components/modal/modalTypes';

//temporal modules test info
import { modules, user, user_info } from '../../test_info';
import { auth } from '../../../../utils/auth';

class MainContainer extends Component {
    state = {
        showSidebar: true,
        contentState: 'inicio',
        didFirstLoad: false,
        moduleSubTitle: '',
    }
    componentDidMount = () => {
        //here we need to fetch the data for the user data like userSession.location, etc.
        //here we should call an action to get the user session location
    }
    setLocation = location => {
        //this location should be saved into the user session database (remember a user can have multiple sessions)
        //here we use the state for this module data and the action for others modules data like inventory
        this.props.actions.saveSessionLocation(location);
    }
    openModalToSelectLocation = () => {
        $('#selectLocation').modal('show');
    }
    openCloseSidebar = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    }
    changeContent = content => {
        let update = {};
        update.contentState = content;
        this.setState(update);
    }
    handleSubmitSearch = event => {
        event.preventDefault();
        console.log('valor a buscar: ' + this.input.value)
    }
    logoutEvent = async event => {
        //console.log('PRESIONO LOGOUT DESDE LOGIN');
        //logout() validates the user and if there is user then proceeds to logout
        let logoutResult = await logout('/main');
        if (logoutResult.data == 'deleted') {
            //logout() is calling a auth method that calls a windows eventlistener that was created in the /pages/main.js wich redirects to /login
            //console.log('desde el cliente el resultado del logout fue: ' + logoutResult.data);
        } else console.log('Error while loging out ' + logoutResult.data);
    }
    setRef = item => {
        this.input = item
    }
    static getDerivedStateFromProps(props, state) {
        //992 more than is large in bootstrap, on mobile on first load won't show the menu side bar
        if (props.screenWidth > 0 && props.screenWidth < 992 && !state.didFirstLoad) {
            return {
                showSidebar: false,
                didFirstLoad: true
            }
        }
        return null
    }
    dropDownMenuItem = eventKey => {
        switch (eventKey) {
            case 'logout': {
                this.logoutEvent();
                break;
            }
            case 'profile': {
                //console.log('presiono la opcion ' + eventKey);
                this.changeContent(eventKey);
                break;
            }
            case 'location': {
                //console.log('presiono la opcion ' + eventKey);
                this.openModalToSelectLocation();
                break;
            }
            default: break;
        }
    }
    render() {
        let moduleTitle = this.state.contentState.toUpperCase();
        let moduleSubTitle = (this.state.contentState == "inventario")? ' - SUCURSAL ' + this.props.location.toUpperCase() : this.state.moduleSubTitle;
        let moduleIcon = '';
        let modulo = '';
        switch (this.state.contentState) {
            case 'inicio': {
                const Home = dynamic(import('../../components/index/containers/index'));
                moduleIcon = 'glyphicon-home';
                modulo = <Home modules={modules} changeContent={this.changeContent} />;
            } break;
            case 'dashboard': {
                const Dashboard = dynamic(import('../../components/dashboard/containers/dashboard'));
                moduleIcon = 'glyphicon-blackboard';
                modulo = <Dashboard />;
            } break;
            case 'inventario': {
                const Inventory = dynamic(import('../../components/inventory/containers/inventory'));
                moduleIcon = 'glyphicon-book';
                modulo = <Inventory />;
            } break;
            case 'productos': {
                const Product = dynamic(import('../../components/products/containers/product'));
                moduleIcon = 'glyphicon-book';
                modulo = <Product />;
            } break;
            case 'subir pedido': {
                const LoadOrder = dynamic(import('../../components/movements/loadOrder/containers/index'));
                moduleIcon = 'glyphicon-book';
                modulo = <LoadOrder />;
            } break;
            case 'profile': {
                const Profile = dynamic(import('../../components/profile/containers/profile'));
                moduleIcon = 'glyphicon-user';
                modulo = <Profile user_info={user_info} />;
            } break;
        }

        let spinner = (
            <div className="text-center spinner">
                <PulseLoader
                    loading={true}
                    color='#1cb09a'
                    size={10}
                />
                <style jsx global>{`
                    .spinner{
                        margin-top: 5px;
                        margin-bottom: 5px;
                        margin-left: 5px;
                        position: fixed;
                        bottom: 0;
                    }
                `}</style>
            </div>
        );

        let width = (this.state.showSidebar) ? { width: 250 } : { width: 0 };
        let marginLeft = (this.state.showSidebar) ? { marginLeft: 250 } : { marginLeft: 0 };
        return <HandleErrorContainer>
            <ModalLocation setLocation={this.setLocation} location={this.props.location}/>
            <MainLayout>
                <MenuComponent
                    width={width}
                    contentState={this.state.contentState}
                    changeContent={this.changeContent}
                    modules={modules}
                />
                <ModuleLayout marginLeft={marginLeft}>
                    <MainComponent
                        openCloseSidebar={this.openCloseSidebar}
                        handleSubmit={this.handleSubmitSearch}
                        setRef={this.setRef}
                        showSidebar={this.state.showSidebar}
                        Logout={this.logoutEvent}
                        menuItem={this.dropDownMenuItem}
                        icon={moduleIcon}
                        moduleTitle={moduleTitle}
                        moduleSubTitle={moduleSubTitle}
                        location={this.props.location}
                    />
                    {(this.props.showSpinner) ? spinner : modulo}
                </ModuleLayout>
            </MainLayout>
        </HandleErrorContainer>
    }
}
const mapStateToProps = (state, props) => {
    let result = {};
    result.showSpinner = state.get('spinner').get('showSpinner');
    result.location = state.get('userSession').get('location');

    return result;
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);