import React from 'react';

const LoginComponent = props => (
    <div>
        <div className="center">
            <div className="column1">
                <div className="absoluteCenterLogin heightAuto">
                    <div className="card">
                        <div className="padding20">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx global>{
            `body {
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
            }
            .column1 {
                background-color: #333f50 !important;
            }
            .absoluteCenterLogin {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                padding: 20px;
            }
            .heightAuto, .heightAuto div {
                height: auto !important;
            }
            .card {
                border-radius: 10px;
                background: #FFFFFF;
                max-width: 380px;
                margin: 0 auto;
                padding: 0 !important;
            }
            .padding20 {
                padding: 20px;
            }
            .spinner > div{
                margin: 0 auto;
                padding: 30px;
            }`
        }</style>
    </div>
)

export default LoginComponent;