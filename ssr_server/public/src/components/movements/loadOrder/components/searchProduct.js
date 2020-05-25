import React from 'react';
import LocationDropdownButton from '../../../buttons/locationDropdown';
import ProviderDropdownButton from '../../../buttons/providerDropdown';

export default props => <div id="orderSearchProduct" className="row">
    <div className="col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2">
        <LocationDropdownButton id="searchProductLocation" title="sucursal" />
    </div>
    <div className="col-7 col-sm-7 col-md-4 col-lg-6 col-xl-7">
        <input className="form-control" onChange={e => props.handleSearchProduct(e)} type="text" placeholder="Buscar producto por nombre, id, código de barras" />
    </div>
    <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
        <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#advancedSearch">BÚSQUEDA AVANZADA</button>
    </div>

    <style jsx>{`
        label {
            font-size: 0.8rem;
            /*text-transform: uppercase;*/
        }
        #orderSearchProduct > div {
            padding: 5px;
        }
    `}</style>
</div>