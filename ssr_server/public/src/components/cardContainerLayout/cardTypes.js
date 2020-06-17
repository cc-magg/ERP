import React from 'react';
import CardLayout from './index';

//some cards where created before this file so they are not located here

export const AccessDenied = props => {
    return <CardLayout title="acceso denegado">
        <h6>usted no posee los permisos para ver esta informacion</h6>
        <p>por favor contacte al administrador</p>
    </CardLayout>
}
export const CardNoData = props => {
    return <CardLayout title="no hay contenido">
        <h6>no se ha encontrado contenido</h6>
    </CardLayout>
}