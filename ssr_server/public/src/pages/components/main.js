import React, { useRef } from 'react';

import { Alert } from 'react-bootstrap';

import { main } from '../css/main';

const MainComponent = props => {
    let temporalClass = (props.showSidebar) ? 'open' : '';
    const searchRef = useRef(null);
    const click = e => {
        props.menuItem(e.target.name);
    }
    const _handleKeyDown = e => {
        if (e.key === 'Enter') {
            console.log('buscar ' + searchRef.current.value + ' ' + e.target.value);
        }
    };
    return (
        <div>
            <div className="contentMenu">
                <div className={'displayInline height37 navIcon3 ' + temporalClass} onClick={props.openCloseSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="displayInline firstItem">
                    <input className="form-control searchInput height37 sideBorders" type="text" placeholder="Search here..." name="search" onKeyDown={_handleKeyDown} ref={searchRef} />
                </div>
                <div className="displayInline floatRight ">
                    <div className="dropdown">
                        <button className="btn customWidthDropdown btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" name="profile" onClick={click}>Profile</a>
                            <a className="dropdown-item" href="#" name="another" onClick={click}>Separated link</a>
                            <a className="dropdown-item" href="#" name="logout" onClick={click}>Log out</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pageIndicator">
                <span className={"icon glyphicon " + props.icon} aria-hidden="true"></span>
                <span className="pageIndicatorText">{props.moduleTitle+props.moduleSubTitle}</span>
            </div>

            <style jsx>{main}</style>
            <style jsx global>{`
                .searchInput {
                    border-top: none;
                    border-bottom: none;
                    /*border: none;*/
                    display: block;
                    width: 100%;
                    padding: 6px 12px;
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: #555;
                    background-color: #fff;
                    background-image: none;
                    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                }
                .height37 {
                    height: 37px !important;
                }
                .sideBorders {
                    border-right: 1px solid #e7e7e78c;
                    border-left: 1px solid #e7e7e78c;
                }
                .floatRight button {
                    height: 37px;
                    border: none;
                    border-radius: inherit;
                    border-left: 1px solid #e7e7e78c;
                }
                .customWidthDropdown {
                    width: 110px;
                }
            `}</style>
        </div>
    )
}

export default MainComponent;