import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faHome } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return <div className="container">
        <div className="row shadow header">
            <div className="col-12">
                <img src="/images/perfil2.jpg" className="mx-auto d-block" alt="profile" />
            </div>
            <div className="col-12 text-center headerTitle">
                <h3 className="name">Carlos Maximiliano Galvan Grajales</h3>
                <div className="text-uppercase roll">gerente</div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="row microCardContainer shadow">
                    <div className="col-3 text-center icon emailIcon">
                        <FontAwesomeIcon icon={faEnvelope} color="white" size="1x" />
                    </div>
                    <div className="col-9 my-auto basicInfoText">maxi_994@hotmail.com</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="row microCardContainer shadow">
                    <div className="col-3 text-center icon phoneIcon">
                        <FontAwesomeIcon icon={faPhoneAlt} color="white" size="1x" />
                    </div>
                    <div className="col-9 my-auto basicInfoText">3184475594</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="row microCardContainer shadow">
                    <div className="col-3 text-center icon addressIcon">
                        <FontAwesomeIcon icon={faHome} color="white" size="1x" />
                    </div>
                    <div className="col-9 my-auto basicInfoText">calle del escultor julio leonardo capuz #8</div>
                </div>
            </div>
        </div>
        <div className="row shadow accountInfo">
            <div className="col-12 text-center">
                <h4>informacion de la cuenta</h4>
            </div>
        </div>

        <style jsx>{`.header{
            color: #FFFFFF;
            margin-top: 20px;
            padding: 30px;
            background: url('/images/colors.jpg');
            background-repeat: no-repeat !important;
            background-size: cover !important;
            background-position: center;
        }
        .header img {
            max-width: 100px;
            border-radius: 20%;
        }
        .headerTitle {
            margin-top: 20px;
        }
        .microCardContainer {
            margin: 10px;
            background-color: #FFFFFF;
        }
        .icon {
            padding: 10px;
        }
        .emailIcon {
            background-color: #ed7d31;
        }
        .phoneIcon {
            background-color: #4472c4;
        }
        .addressIcon {
            background-color: #44546a;
        }
        .basicInfoText {
            font-size: .8rem;
        }
        .accountInfo {
            padding: 20px;
            background-color: #FFFFFF;
        }`}</style>
    </div>
};