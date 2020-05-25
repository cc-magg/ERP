import React from 'react';
import { inventary } from '../../../test_info';

export default props => {
    const tableHeaders = Object.keys(inventary[0]).map((key, i) => {
        return <th scope="col" key={i} onClick={() => sortTable(key)}>{key}</th>
    });
    const tableBody = inventary.map(item => {
        const rowContent = Object.values(item).map((key, i) => <td key={i}>{key}</td>);
        return <tr key={item.id}>
            {rowContent}
        </tr>
    })
    const sortTable = e => {
        console.log('sorted ' + e)
        //tendra paginacion
        //es mas rapido guardar todo el variable y re ordenar o re hacer el query? el inventario es muy grande y se debe tener en cuenta la paginacion
    }
    return <div className="table-responsive">
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    </div>
}