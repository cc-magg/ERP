import React from 'react';

import { main } from '../css/inventory';

const InventoryComponent = props => (
    <div className="mainContainer">
        <div className="title">Inventory Example</div>
        <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
        <style jsx>{main}</style>
        <style jsx>{`
            .mainContainer {
                padding: 10px;
            }
        `}</style>
    </div>
)

export default InventoryComponent;