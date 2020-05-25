import React from 'react';
/**
 * here we use the props ID and TITLE
 */

export default props => {
    //here we need to validate the user roll and permissions before showing the avalible locations
    return <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle btn-block" type="button" id={props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.title}</button>
    <div className="dropdown-menu" aria-labelledby={props.id}>
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
    </div>
</div>
}