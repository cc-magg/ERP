import React from 'react';
import Card from '../../cardContainerLayout/index';
import { ModalBusquedaAvanzada, ModalCrearMarca, ModalCrearProveedor, ModalCrearCodigoBarras } from '../../modal/modalTypes';
import Table from './productsTable';
import LocationDropdownButton from '../../buttons/locationDropdown';
import ProviderDropdownButton from '../../buttons/providerDropdown';

export default props => {
    return <div className="container-fluid py-10">
        <ModalBusquedaAvanzada />
        <ModalCrearMarca />
        <ModalCrearProveedor />
        <ModalCrearCodigoBarras />
        <Card title="buscar producto">
            <div id="buscarProducto" className="row">
                <div className="col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2">
                    <LocationDropdownButton id="searchProductLocation" title="sucursal" />
                </div>
                <div className="col-7 col-sm-7 col-md-4 col-lg-6 col-xl-7">
                    <input className="form-control" onChange={e => props.handleSearchProduct(e)} type="text" placeholder="Buscar producto por nombre, id, código de barras" />
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
                    <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#advancedSearch">BÚSQUEDA AVANZADA</button>
                </div>
            </div>
        </Card>
        <Card title="datos base" subtitle="ver historial" history={props.history}>
            <form>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-5 col-form-label">NOMBRE</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="description" className="col-sm-5 col-form-label">DESCRIPCION</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="description" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="minAmount" className="col-sm-5 col-form-label">EXISTENCIAS MINIMAS</label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="minAmount" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="minAmount" className="col-sm-5 col-form-label">MARCA</label>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-8 dropdown">
                                        <button className="btn btn-secondary dropdown-toggle btn-block" type="button" id="dropdownBrand" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">----</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownBrand">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#createBrand">
                                            <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-group row">
                            <label htmlFor="priceCost" className="col-sm-5 col-form-label">PRECIO COSTO</label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="priceCost" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="price" className="col-sm-5 col-form-label">PRECIO</label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="priceUnit" className="col-sm-5 col-form-label">PRECIO UNITARIO</label>
                            <div className="col-sm-7">
                                <input readOnly={(props.unitValues) ? false : true} type="number" className="form-control" id="priceUnit" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="utility" className="col-sm-5 col-form-label">% UTILIDAD</label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="utility" />
                            </div>
                        </div>
                        <div className="custom-control custom-switch text-right">
                            <input type="checkbox" onChange={e => props.handleUnitsSwitch(e)} className="custom-control-input" id="useUnits" />
                            <label className="custom-control-label" htmlFor="useUnits">utilizar unidades en este producto</label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <h6>SELECCIÓN MULTIPLE</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">PROVEEDOR</label>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-8 dropdown">
                                        <ProviderDropdownButton id="productProviders" title="--------" />
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
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-group row">
                            <label htmlFor="barCode" className="col-sm-5 col-form-label">CÓDIGO DE BARRAS</label>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-8">
                                        <input type="text" className="form-control" id="barCode" />
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#createCodeBar">
                                            <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-end">
                    <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                        <button type="button" className="btn btn-danger btn-block">BORRAR PRODUCTO</button>
                    </div>
                    <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                        <button type="button" className="btn btn-success btn-block">GUARDAR</button>
                    </div>
                    <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                        <button type="button" className="btn btn-warning btn-block whiteColor">LIMPIAR</button>
                    </div>
                </div>
            </form>
        </Card>
        <Card title="movimientos">
            <Table />
            <div className="row justify-content-end">
                <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                    <button type="button" className="btn btn-success btn-block">CARGAR MOVIMIENTOS</button>
                </div>
                <div className="py-1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                    <button type="button" className="btn btn-danger btn-block">LIMPIAR LISTA</button>
                </div>
            </div>


        </Card>

        <style jsx>{`
        #buscarProducto > div {
            padding: 5px;
        }
        label {
            font-size: 0.8rem;
            /*text-transform: uppercase;*/
        }
        .py-10 {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .whiteColor {
            color: #ffffff !important;
        }`}</style>
    </div>
}