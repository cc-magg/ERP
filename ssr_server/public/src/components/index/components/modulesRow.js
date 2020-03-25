import React from 'react';
import { Map as map } from 'immutable';
import { Row, Col } from 'react-bootstrap';

const Rowcreator = props => {
    return (
        <div className="row">
            {/*aqui van las columas de forma dinamica*/}
            {map(props.item).valueSeq().map((module, position) => {
                const style = {
                    backgroundColor: module.color
                };
                return (
                    <div 
                        className="col-xs-12 col-sm-3 col-md-3 col-lg-3 moduleSize"
                        key={position}
                    >
                        <div
                            className="inside"
                            style={style}
                            onClick={() => {props.openModule(module.title)}}
                        >
                            <div className="temporalText">{module.title}</div>
                        </div>
                    </div>
                )
            })}
            <style jsx>{`
                .moduleSize {
                    padding: 0;
                }
                .inside {
                    height: 170px;
                    border-radius: 5px;
                    margin: 5px;
                }
                .inside:hover {
                    cursor: pointer;
                }
                .temporalText {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </div>
    )
}

export default Rowcreator;