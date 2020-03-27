import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as list, Map as map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index.js';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Grid, Row, Col } from 'react-bootstrap';
import { PulseLoader } from 'react-spinners';
import { logout } from '../../../../utils/auth';

import HandleErrorContainer from '../../components/error/container/handle-error';
import MainLayout from '../components/main-layout';
import ModuleLayout from '../components/main-module-layout';
import MainComponent from '../components/main';
import MenuComponent from '../components/menu';

//temporal modules test info
import { modules, user, user_info } from '../../test_info';
import { auth } from '../../../../utils/auth';

class MainContainer extends Component {
    state = {
        showSidebar: true,
        contentState: 'home',
        didFirstLoad: false
    }
    openCloseSidebar = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    }
    changeContent = content => {
        this.setState({ contentState: content });
    }
    handleSubmitSearch = event => {
        event.preventDefault();
        console.log('valor a buscar: ' + this.input.value)
    }
    logoutEvent = event => {
        this.props.actions.saveUserAccess('');
        logout();
        //this.props.actions.removeUserAccess();
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
                console.log('presiono la opcion ' + eventKey);
                this.changeContent(eventKey);
                break;
            }
            case 'another': {
                console.log('presiono la opcion ' + eventKey);
                break;
            }
            default: break;
        }
    }
    render() {
        let moduleTitle = this.state.contentState.toUpperCase();
        let moduleIcon = '';
        let modulo = '';
        switch (this.state.contentState) {
            case 'home': {
                const Home = dynamic(import('../../components/index/containers/index'));
                moduleIcon = 'glyphicon-home';
                modulo = <Home modules={modules} changeContent={this.changeContent} />;
            } break;
            case 'dashboard': {
                const Dashboard = dynamic(import('../../components/dashboard/containers/dashboard'));
                moduleIcon = 'glyphicon-blackboard';
                modulo = <Dashboard />;
            } break;
            case 'inventory': {
                const Inventory = dynamic(import('../../components/inventory/containers/inventory'));
                moduleIcon = 'glyphicon-book';
                modulo = <Inventory />;
            } break;
            case 'profile': {
                //const Profile = dynamic(import('../../components/profile/containers/profile'));
                const Profile = dynamic(import('../../components/profile/components/profile2'));
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
                        position: fixed;
                        bottom: 0;
                    }
                `}</style>
            </div>
        );

        let width = (this.state.showSidebar) ? { width: 250 } : { width: 0 };
        let marginLeft = (this.state.showSidebar) ? { marginLeft: 250 } : { marginLeft: 0 };
        return <HandleErrorContainer>
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
                    />
                    {(this.props.showSpinner) ? spinner : modulo}
                </ModuleLayout>
            </MainLayout>
        </HandleErrorContainer>
    }
}
const mapStateToProps = (state, props) => {
    let showSpinner = state.get('spinner').get('showSpinner');
    return { showSpinner }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);