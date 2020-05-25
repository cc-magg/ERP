import React from 'react';
import Table from './productsTable';

export default props => <div>
    <Table />
    <div className="row pb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="form-group">
                <label htmlFor="orderCosts" className="col-form-label">COSTOS</label>
                <input type="number" className="form-control" id="orderCosts" />
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="form-group">
                <label htmlFor="orderIVA" className="col-form-label">IVA</label>
                <input type="number" className="form-control" id="orderIVA" />
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="form-group">
                <label htmlFor="orderDiscounts" className="col-form-label">DESCUENTOS</label>
                <input type="number" className="form-control" id="orderDiscounts" />
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="form-group">
                <label htmlFor="orderTotal" className="col-form-label font-weight-bold">TOTAL</label>
                <input type="number" className="form-control" id="orderTotal" />
            </div>
        </div>
    </div>

    <div className="row justify-content-end">
        <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
            <button type="button" className="btn btn-success btn-block">CARGAR PEDIDO</button>
        </div>
        <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
            <button type="button" className="btn btn-danger btn-block">LIMPIAR LISTA</button>
        </div>
    </div>

    <style jsx>{`
        label {
            font-size: 0.8rem;
            /*text-transform: uppercase;*/
        }
    `}</style>
</div>