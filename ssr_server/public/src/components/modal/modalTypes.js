import React from 'react';
import ModalLayout from './modalLayout';
import { locations } from '../../test_info';

export const ModalBusquedaAvanzada = props => {
    return <ModalLayout title="BUSQUEDA AVANZADA" backdrop='true' id="advancedSearch">
        <div className="modal-body">
            <p>este es el cuerpos</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalLayout>
};

export const ModalCrearMarca = props => {
    return <ModalLayout title="CREAR MARCA" backdrop='true' id="createBrand">
        <div className="modal-body">
            <p>este es el cuerpo</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalLayout>
};

export const ModalCrearProveedor = props => {
    return <ModalLayout title="CREAR PROVEEDOR" backdrop='true' id="createProvider">
        <div className="modal-body">
            <p>este es el cuerpo</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalLayout>
};

export const ModalCrearCodigoBarras = props => {
    return <ModalLayout title="CREAR CODIGO DE BARRAS" backdrop='true' id="createCodeBar">
        <div className="modal-body">
            <p>este es el cuerpo</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalLayout>
};

export const ModalBuscarFactura = props => {
    return <ModalLayout title="BUSCAR FACTURA" backdrop='true' id="orderSearch">
        <div className="modal-body">
            <p>este es el cuerpo</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalLayout>
};

export const ModalCreateProduct = props => {
    return <ModalLayout title="CREAR PRODUCTO" backdrop='static' id="createProduct">
        <div className="modal-body">
            <div className="container">
                <div className="row">
                    <h6>DATOS BASE</h6>
                    <div className="col-6">

                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalLayout>
};

export const ModalLocation = props => {
    //can use class "active" or attribute "disabled"
    const listOfLocations = locations.map((item, index) => {
        return <button key={index} type="button" className="list-group-item list-group-item-action" onClick={() => props.setLocation(item)}>
            {item}
        </button>
    })
    return <ModalLayout title="SELECCIONAR SEDE ACTUAL" backdrop='true' id="selectLocation">
        <div className="modal-body">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="list-group">
                            {listOfLocations}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary">Guardar</button>
        </div>
    </ModalLayout>
};