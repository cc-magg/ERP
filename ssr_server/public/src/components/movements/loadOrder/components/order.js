import React from 'react';
import LocationDropdownButton from '../../../buttons/locationDropdown';
import ProviderDropdownButton from '../../../buttons/providerDropdown';

export default props => <div className="row">
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div className="form-group row">
            <label className="col-sm-5 col-form-label">PROVEEDOR</label>
            <div className="col-sm-7">
                <div className="row">
                    <div className="col-8 dropdown">
                        <ProviderDropdownButton id="orderProvider" title="------" />
                    </div>
                    <div className="col-4 text-center">
                        <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#createProvider">
                            <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="cod" className="col-sm-5 col-form-label">COD</label>
            <div className="col-sm-7">
                <input readOnly={true} type="text" className="form-control" id="cod" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="orderLocation" className="col-sm-5 col-form-label">SUCURSAL</label>
            <div className="col-sm-7">
                <LocationDropdownButton id="orderLocation" title="sucursal" />
            </div>
        </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div className="form-group row">
            <label htmlFor="orderNumber" className="col-sm-5 col-form-label">NÚMERO DE FACTURA</label>
            <div className="col-sm-7">
                <input type="text" className="form-control" id="orderNumber" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="orderDate" className="col-sm-5 col-form-label">FECHA DE FACTURA</label>
            <div className="col-sm-7">
                <input type="date" className="form-control" id="orderDate" />
            </div>
        </div>
    </div>
    <div className="col-12">
        <div className="form-group">
            <label htmlFor="orderComments" className="col-form-label">COMENTARIOS</label>
            <textarea className="form-control" id="orderComments" rows="3"></textarea>
        </div>
    </div>

    <style jsx>{`
        label {
            font-size: 0.8rem;
            /*text-transform: uppercase;*/
        }
    `}</style>
</div>