import React from 'react';
import Rows from './modulesRow';
import { Grid, Row, Col } from 'react-bootstrap';

const IndexComponent = props => {
    return (
        <div className="">
            <div className="container-fluid maxWidth">
                {props.modules.map((item, position) => <div key={position}><Rows item={item} openModule={props.openModule}/></div>)}
            </div>
            
            <style jsx>{`
                .maxWidth {
                    max-width: 700px;
                    margin-top: 50px;
                }
            `}</style>
        </div>
    )
}

export default IndexComponent;