import React from 'react';

import { main, sidebar } from '../css/main';

function ModuleLayout(props) {
    return(
        <section style={props.marginLeft} className="main">
            {props.children}
            
            <style jsx>{sidebar}</style>
            <style jsx global>{`
                .main {
                    transition: margin-left .5s;
                    /*padding: 16px;*/
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