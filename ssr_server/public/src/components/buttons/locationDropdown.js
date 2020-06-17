import React from 'react';
import { locations } from '../../test_info';
/**
 * here we use the props ID and TITLE and a function wich recives the button clicked
 * this last one should update the location through an action this.props.actions.saveSessionLocation(location);
 */

export default props => {
    //here we need to validate the user roll and permissions before showing the avalible locations
    const locationsButtons = locations.map((item, index) => <a key={index} className="dropdown-item" onClick={() => props.updateLocation(item)} href="#">{item}</a>);
    return <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle btn-block" type="button" id={props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.title}</button>
        <div className="dropdown-menu" aria-labelledby={props.id}>
            {locationsButtons}
        </div>
    </div>
}