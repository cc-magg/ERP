import React from 'react';

import { main } from '../css/main';

function ModuleLayout(props) {
    return(
        <section style={props.marginLeft} className="main">
            {props.children}
            
            <style jsx>{main}</style>
            <style jsx>{`
                .main {
                    transition: margin-left .5s;
                    /*padding: 16px;*/
                    padding-bottom: 20px;
                }
                @media (max-width: 584px) {
                    .main {
                        min-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}

export default ModuleLayout;