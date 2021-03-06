import React from 'react';

function MainLayout(props) {
    return (
        <section className="mainLayer">
            {props.children}
            <style jsx global>{`
                body {
                    margin: 0;
                    font-family:"Calibri (Body)" !important;
                    background-color: #ececec;
                    /*overflow-y: hidden;*/
                }`
            }</style>
            <style jsx>{`
                .mainLayer {
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