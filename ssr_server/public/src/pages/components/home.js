import React from 'react';
import Link from 'next/link';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Form from '../../components/form-login/containers/formLogin';

import { RingLoader } from 'react-spinners';
import Menu from './landing-page-Menu';

import { home } from '../css/home';

const PageTest = props => {
    return (
        <div className="height100">
            {(props.showSpinner) ?
                <div className="spinnerContainer">
                    <RingLoader
                        loading={props.showSpinner}
                        color='#333f50'
                    />
                </div>
                :
                <div className="height100">
                    <Menu access={props.access} logout={props.logout} />
                    <div className="posRelative height100">
                        <img src="/images/16.jpg" className="headerContainer"></img>
                        <img src="/images/circle.png" className="circle"></img>
                    </div>
                    <h1 className="pageTitle">Enterprise Resourse Planing</h1>
                    <div className="pageContainer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <img src="/images/erp-infographic.png" className="erp_descriptionImage"></img>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>ERP, qué es y para qué sirve</h3>
                                    <p>De sus siglas en inglés ‘Enterprise Resource Plan’ Un ERP es un software que integra los procesos cotidianos de la empresa, entre los más importantes, la gestión de inventario y pedidos, contabilidad, recursos humanos, gestión de la relación con los clientes (CRM) y alguno más que tenga que ver con los aspectos operativos y productivos, dependiendo del sector en el que se mueva la empresa.

Perfecto para pymes como para grandes compañías, es un conjunto de sistemas de información, que permite integrar determinadas operaciones de un negocio, especialmente las que están relacionadas con las áreas de producción, logística, inventario, los envíos y la contabilidad. Son numerosas las áreas y departamentos que pueden beneficiarse con un ERP.

El ERP de una empresa suele funcionar tanto económica, como técnicamente por módulos (ventas, materiales, finanzas, control de almacén, recursos humanos…), que se adaptarán según las necesidades de cada cliente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <style jsx>{home}</style>
            <style jsx global>{`
                html, body{
                    height: 100%;
                }
                body {
                    font-family: 'Montserrat', sans-serif !important;
                }
                .height100, #__next, [data-reactroot]{
                    height: 100%;
                }
                .circle {
                    position: absolute;
                    top: 50%;
                    max-width: 100%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .spinnerContainer {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </div>
    )
}

export default PageTest;