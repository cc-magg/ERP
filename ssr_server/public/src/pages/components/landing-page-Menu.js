import React from 'react';

const Menu = props => {
    return (<div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbara">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">ERP-gemelos</a>
                </div>

                <div className="navbara collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="/">Home</a></li>
                        {(props.access == true) ? <li><a href="/main">main</a></li> : <li><a href="/login">login</a></li>}
                        {(props.access == true) && <li><a className="hover" onClick={props.logout}>logout</a></li>}
                    </ul>
                </div>
            </div>
        </nav>
        <style jsx global>{
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