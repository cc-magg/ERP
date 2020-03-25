import React from 'react';

function RegularError(props) {
    console.log('informacion del error: '+props.errorInfo);
    return (
    <div>
        <h1 style={{color: 'white'}}>upps hay un error</h1>
    </div>)
}

export default RegularError;