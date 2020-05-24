import React, { Component, useRef } from 'react';
import Link from 'next/link';
import { Map as map } from 'immutable';

import { sidebar } from '../css/sidebar';

class MenuComponent extends Component {
    handleChange = element => {
        this.props.changeContent(element);
    }
    render() {

        return <div id="mySidenav" className="sidenav" style={this.props.width}>
            <Link href="/"><div className="text-center logo"><img src="/images/logo.png" className="img-fluid" alt="Responsive image" /></div></Link>
            {this.props.modules.map((item, position) => {
                let temporal = map(item);
                return temporal.valueSeq().map((item2, posicion) => {

                    if (item2.submodulos) {
                        let newArray = [];
                        let activeCollapseColor = (item2.submodulos.find(e => e.title.toLowerCase() == this.props.contentState)? 'activeRow' : '');
                        newArray.push(<a key={posicion} className="text-center item collapsed collapseContainer" data-toggle="collapse" href={`#collapseExample${posicion}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                            {item2.title}
                            <svg className={"bi bi-chevron-up "+activeCollapseColor} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg>
                            <svg className={"bi bi-chevron-down "+activeCollapseColor} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg>
                        </a>);
                        //newArray.push(<a key={posicion} className="text-center item " data-toggle="collapse" href={`#collapseExample${posicion}`} role="button" aria-expanded="false" aria-controls="collapseExample">{item2.title}</a>);

                        const submodules = item2.submodulos.map((submodule, i) => {
                            //console.log('el activo es: ' + this.props.contentState);
                            const extraCss = (this.props.contentState == submodule.title.toLowerCase()) ? 'active' : '';
                            return <div key={i} onClick={() => this.handleChange(submodule.title.toLowerCase())} className={"text-center item submoduleContainer " + extraCss}>{submodule.title}</div>;
                        });

                        newArray.push(<div key={posicion + 1} className="collapse" id={`collapseExample${posicion}`}>{submodules}</div>);
                        return newArray;
                    } else {
                        const extraCss = (this.props.contentState == item2.title.toLowerCase()) ? 'active' : '';
                        return <div key={posicion} onClick={() => this.handleChange(item2.title.toLowerCase())} className={"text-center item " + extraCss}>{item2.title}</div>
                    }
                });
            })}
            <style jsx>{sidebar}</style>
        </div>
    }
}

export default MenuComponent;