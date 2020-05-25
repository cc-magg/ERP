import React from 'react';
import LocationDropdownButton from '../../../buttons/locationDropdown';

export default props => <div id="buscarFactura" className="row">
    <div className="col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2">
        <LocationDropdownButton id="searchOrderLocation" title="sucursal" />
    </div>
    <div className="col-7 col-sm-7 col-md-4 col-lg-6 col-xl-7">
        <input className="form-control" onChange={e => props.handleSearchOrder(e)} type="text" placeholder="numero de factura" />
    </div>
    <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
        <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#orderSearch">BÚSQUEDA AVANZADA</button>
    </div>
    <style jsx>{`
        #buscarFactura > div {
            padding: 5px;
        }
    `}</style>
</div>