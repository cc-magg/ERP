import React from 'react';
import InventaryTable from './inventaryTable';
import Modal from '../../modal/modalLayout';
import LocationDropdownButton from '../../buttons/locationDropdown';

const InventoryComponent = props => {
    const _handleKeyDownSearch = e => {
        if (e.key === 'Enter') {
            console.log('buscar ' + e.target.value);
            props.searchHandler(e.target.value);
        }
    };
    const handleLocationChange = item => {
        props.updateLocation(item);
    }
    return <div className="mainContainer">
        <div className="container-fluid">
            <div className="row">
                <div className="my-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl">
                    <LocationDropdownButton id="locationInventory" title="sucursal" updateLocation={handleLocationChange}/>
                </div>
                <div className="my-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl">
                    <button type="button" className="btn btn-dark btn-block">REALIZAR PEDIDO</button>
                </div>
                <div className="my-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl">
                    <button type="button" className="btn btn-dark btn-block">DESCARGAR INVENTARIO</button>
                </div>
                <div className="my-1 col-12 col-sm-6 col-md-6 col-lg-6 col-xl">
                    <button type="button" className="btn btn-dark btn-block" data-toggle="modal" data-target="#exampleModal">CREAR NUEVO PRODUCTO</button>
                </div>
                <div className="my-1 col-12 col-sm-12 col-md-12 col-lg-6 col-xl">
                    <button type="button" className="btn btn-dark btn-block">FILTRAR</button>
                </div>
                <Modal title="Modal titles" backdrop='static'>
                    <div className="modal-body">
                        <p>este es el cuerpo</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </Modal>
            </div>
            <div className="row align-items-center secondRow">
                <div className="col">
                    <div className=" custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="detailedInventary" />
                        <label className="custom-control-label" htmlFor="detailedInventary">Detallado</label>
                    </div>
                </div>
                <div className="col align-self-end">
                    <input className="form-control" type="text" placeholder="Search here..." name="search" onKeyDown={_handleKeyDownSearch} />
                </div>
            </div>
            <div className="row tableContainer">
                <div className="col">
                    <InventaryTable inventory={props.inventory}/>
                </div>
            </div>
            <div className="row text-right">
                <div className="col">
                    <button type="button" className="btn btn-danger">CIERRE DE INVENTARIO</button>
                </div>
            </div>
        </div>
        <style jsx>{`
            .mainContainer {
                padding: 10px;
            }
            .title {
                font-size: 30px;
            }
            .btn-block {
                font-size: .8rem;
            }
            .tableContainer {
                padding-top: 30px;
            }
            .secondRow {
                padding-top: 5px;
            }
        `}</style>
    </div>
}

export default InventoryComponent;