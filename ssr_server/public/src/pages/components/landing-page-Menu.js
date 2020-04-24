import React from 'react';
import Link from 'next/link';

const Menu = props => {
    return (<div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">ERP-gemelos</a>
                </div>

                <div className="dropdown">
                    <button className="btn customWidthDropdown btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acceder</button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <Link href="/"><a className="dropdown-item active"  name="inicio">Inicio</a></Link>
                        {(props.access == true)&& <Link href="/main"><a className="dropdown-item"  name="main">Dashboard</a></Link>}
                        {(props.access == true)? <Link href="#"><a className="dropdown-item"  onClick={props.logout} name="logout">Log out</a></Link> : <Link href="/login"><a className="dropdown-item"  name="login">log In</a></Link>}
                    </div>
                </div>
            </div>
        </nav>
        <style jsx>{
            `.navbar {
                margin-bottom: 0 !important;
            }
            .hover:hover {
                cursor: pointer;
            }
            `
        }</style>
    </div>)
}

export default Menu;