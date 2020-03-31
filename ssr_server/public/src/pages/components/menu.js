import React, { Component } from 'react';
import Link from 'next/link';
import { Map as map } from 'immutable';

import { sidebar } from '../css/main';
import { Image } from 'react-bootstrap';

class MenuComponent extends Component {
    handleChange = element => {     
        this.props.changeContent(element);
    }
    render() {
        return <div id="mySidenav" className="sidenav" style={this.props.width}>
            <Link href="/"><div className="text-center logo"><Image src="/images/logo.png" responsive/></div></Link>
            {this.props.modules.map((item, position) => {
                let temporal = map(item);
                return temporal.valueSeq().map((item2, posicion) => {
                    let extraCss = (this.props.contentState == item2.title.toLowerCase())? 'active' : '';
                    return <div key={posicion} onClick={() => this.handleChange(item2.title.toLowerCase())} className={"text-center item "+extraCss}>{item2.title}</div>
                });
            })}
            <style jsx>{sidebar}</style>
            <style jsx global>{`
            .logo img {
                max-height: 100%;
                margin: 0 auto;
            }
            .logo:hover {
                cursor: pointer;
            }
            `}</style>
        </div>
    }
}

export default MenuComponent;