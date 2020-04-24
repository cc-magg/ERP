import React from 'react';

const LoginComponent = props => (
    <div>
        <div className='absoluteCenterLogin heightAuto'>
            {(props.showCard == true) ? <div className="card">
                <div className={`padding20  ${props.loading ? 'spinner' : ''}`}>
                    {props.children}
                </div>
            </div> : props.children}
        </div>
        <style jsx global>{
            `body {
                background-color: #333f50 !important;
                margin: 0;
                font-family:"Calibri (Body)" !important;
            }
            html, body div {
                height: 100%;
            }
            .logout {
                color: red;
            }
            .center {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #333f50 !important;
            }
            .absoluteCenterLogin {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .heightAuto {
                height: auto !important;
                max-width: 90%;
            }
            .card {
                border-radius: 10px;
                background: #FFFFFF;
                width: 300px;
                max-width: 100%;
                margin: 0 auto;
                padding: 0 !important;
            }
            .padding20 {
                padding: 20px;
            }
            .spinner{
                margin: 0 auto;
            }`
        }</style>
    </div>
)

export default LoginComponent;