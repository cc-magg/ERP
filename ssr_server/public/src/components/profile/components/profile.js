import React from 'react';
import { Map as map } from 'immutable';
import { main } from '../css/profile';
import { Image } from 'react-bootstrap';

const ProfileComponent = props => {
    let row = map(props.user_info[0]).valueSeq().map((item, position) => {
        return  (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left" key={position}>
                <div className="basicInfoSubtitle">{Object.keys(props.user_info[0])[position]}</div>
                {map(item).valueSeq().map((element, key) => {
                    //aqui no podemos usar el element por que el valueSeq() nos desordena la lista
                    let jsonkey = Object.keys(item)[key];
                    if (item.hasOwnProperty(jsonkey)) {
                        return <div className="container-fluid" key={key}>
                            <div className="row">
                                <div className="col-xs-5 col-sm-6 col-md-6 col-lg-6 text-left">
                                    {jsonkey}
                                </div>
                                <div className="col-xs-7 col-sm-6 col-md-6 col-lg-6 text-left">
                                    {item[jsonkey]}
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
        )
    });

    return (<div className="mainContainer">
        <div className="text-center image sectionContainer profileHeader">
            <Image src="/images/perfil2.jpg" circle />
            <div>Carlos Maximiliano Galvan Grajales / SKARIO</div>
            <div>Phone number: <span>3184475594</span> Email: <span>maxi_994@hotmail.com</span></div>
        </div>
        <div className="sectionContainer">
            <div className="sectionHeader">User Information</div>
            <div className="sectionContent">
                <div className="basicInfo">
                    <div className="row noMargin">
                        {row}
                    </div>
                </div>
            </div>
        </div>
        <div className="sectionContainer">
            <div className="sectionHeader">User Information</div>
            <div className="sectionContent">
                <div className="basicInfo">
                    <div className="row noMargin">
                        {row}
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{main}</style>
        <style jsx global>{`
            .mainContainer {
                width: 100%;
            }
            .sectionContainer {
                background-color: #ffffff;
                margin-top: 15px;
            }
            .sectionHeader {
                width:100%;
                background-color: #f7f7f7;
                padding: 5px;
                padding-left: 10px;
            }
            .sectionContent {
                padding: 5px;
            }
            .profileHeader {
                padding: 20px;
            }
            .basicInfo {
                /*max-width: 600px;*/
                margin: 0 auto;
            }
            .basicInfoSubtitle {
                font-size: 15px;
                padding: 15px;
                text-decoration: underline;
            }
            .noMargin {
                margin-right: 0;
                margin-left: 0;
            }
            .image > img {
                max-width: 100px;
                border: 7px solid #b7b7b7;
            }
            .marginTop10 {
                margin-top: 10px;
            }
        `}</style>
    </div>)
}

export default ProfileComponent;