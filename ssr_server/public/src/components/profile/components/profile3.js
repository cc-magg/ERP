import React from 'react';

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
                        <svg className="bi bi-envelope" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z" clipRule="evenodd" />
                            <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                        </svg>
                    </div>
                    <div className="col-9 my-auto basicInfoText">maxi_994@hotmail.com</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="row microCardContainer shadow">
                    <div className="col-3 text-center icon phoneIcon">
                        <svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="col-9 my-auto basicInfoText">3184475594</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="row microCardContainer shadow">
                    <div className="col-3 text-center icon addressIcon">
                        <svg className="bi bi-house" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="col-9 my-auto basicInfoText">calle del escultor julio leonardo capuz #8</div>
                </div>
            </div>
        </div>
        <div className="row grid-divider shadow accountInfo">
            <div className="col-12 text-center">
                <h4>informacion de la cuenta</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="row">
                    <div className="col-6">
                        nombre
                    </div>
                    <div className="col-6">
                        carlos maximiliano
                    </div>
                    <div className="col-6">
                        nombre
                    </div>
                    <div className="col-6">
                        carlos maximiliano
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="row">
                    <div className="col-6">
                        nombre
                    </div>
                    <div className="col-6">
                        carlos arturo
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        nombre
                    </div>
                    <div className="col-6">
                        carlos arturo
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        nombre
                    </div>
                    <div className="col-6">
                        carlos arturo
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`.header{
            color: #FFFFFF;
            margin-top: 20px;
            padding: 30px;
            /*background: url('/images/colors.jpg');
            background-repeat: no-repeat !important;
            background-size: cover !important;
            background-position: center;*/
            background-image: linear-gradient(#25c9fc, #8b4cfc);
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
        .icon svg {
            color: #ffffff;
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