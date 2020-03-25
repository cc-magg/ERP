import React from 'react';

function MainLayout(props) {
    return (
        <section className="mainLayer">
            {props.children}
            <style jsx global>{`
                body {
                    margin: 0;
                    font-family:"Calibri (Body)" !important;
                    /*overflow-y: hidden;*/
                }`
            }</style>
            <style jsx>{`
                .mainLayer {
                    background-color: #ececec;
                    height: 100vh;
                }
                @media (max-width: 584px) {
                    .mainLayer{
                        overflow-x: hidden;
                    }
                }
            `}</style>
        </section>
    );
}

export default MainLayout;