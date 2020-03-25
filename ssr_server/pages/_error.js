import React, { Component } from 'react'

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
        <div>
            <div className="errorContainer padding5">
                <div className="warningIcon"><span className="glyphicon glyphicon-warning-sign" aria-hidden="true"></span></div>
                <h3 className="textError text-center">
                    {this.props.statusCode
                    ? `An error ${this.props.statusCode} occurred on server`
                    : 'An error occurred on client'}
                </h3>
                <p>
                    Por favor espere a que se solucione o de 1000 clicks para solucionarlo¡
                    pero eso no va a funcionar asi que mejor contacte al administrador...<br /><br />
                    <strong>att: el administrador</strong>
                </p>
            </div>
            
            <style jsx global>{`
                body {
                    margin: 0;
                    font-family:"Calibri (Body)" !important;
                    background-color: #333f50;
                }
                .errorContainer {
                    background-color: #dddddd;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    max-width: 400px;
                    border-radius: 5px;
                }
                .textError {
                    color: black;
                    margin-top: 0 !important;
                }
                .padding5 {
                    padding: 10px;
                }
                .warningIcon {
                    font-size: 50px;
                    text-align: center;
                    color: #b11b1b;
                }
            `}</style>
        </div>
    )
  }
}

export default Error;