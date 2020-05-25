import React from 'react';
import CardLayout from '../../../cardContainerLayout';
import SearchOrder from './searchOrder';
import Order from './order';
import SearchProduct from './searchProduct';
import Product from './product';
import Products from './products';
import { ModalBuscarFactura, ModalCreateProduct } from '../../../modal/modalTypes'

export default props => <div className="container">
    <ModalBuscarFactura />
    <ModalCreateProduct />
    <CardLayout title="buscar pedido">
        <SearchOrder handleSearchOrder={props.handleSearchOrder} />
    </CardLayout>
    <CardLayout title="pedido" subtitle="ver registros" goTo={() => alert('asd')}>
        <Order />
    </CardLayout>
    <CardLayout
        title={`${props.orderNumber ? 'buscar producto' : 'por favor ingrese un numero de factura'}`}>
        <SearchProduct />
        <hr />
        <Product />
    </CardLayout>
    <CardLayout title={`${props.orderNumber ? 'productos de la factura ' + props.orderNumber : 'por favor ingrese un numero de factura'}`}>
        <Products />
    </CardLayout>

    <style jsx>{`
    `}</style>
</div>