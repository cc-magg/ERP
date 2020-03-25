import React from 'react';

import { main } from '../css/dashboard';

const DashboardComponent = props => (
    <div className="mainContainer">
        <div className="title">Dashboard Example</div>
        <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
        <button type="button" className="btn btn-primary" onClick={() => {props.test('asd')}}>TEST</button>
        {
            (props.profesors[1] != undefined)&& <div className="panel panel-default margintop20px">
                <div className="panel-heading">Profesores segun graphQl</div>
                <div className="panel-body">
                    <p>en esta lista encontrara los profesores encontrados en la base de datos segun graphQl</p>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.profesors.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.genero}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        }
        <style jsx>{main}</style>
        <style jsx>{`
            .mainContainer {
                padding: 10px;
            }
            .margintop20px {
                margin-top:20px;
            }
        `}</style>
    </div>
)

export default DashboardComponent;