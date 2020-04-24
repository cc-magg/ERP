import css from "styled-jsx/css";

export const sidebar = css`
    .logo > img {
        max-height: 100%;
        margin: 0 auto;
    }

    .logo:hover {
        cursor: pointer;
    }

    .activeRow {
        color: #1cb09a;
    }

    .collapseContainer {
        position: relative;
    }

    .bi-chevron-up, .bi-chevron-down {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translate(-50%, -50%);
    }

    .bi-chevron-up {
        display: inline-block;
    }

    .bi-chevron-down {
        display: none;
    }

    .collapsed .bi-chevron-up {
        display: none !important;
    }
    .collapsed .bi-chevron-down {
        display: inline-block !important;
    }

    .sidenav {
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #333f50;
        overflow-x: hidden;
        transition: 0.5s;
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }

    .cursor {
        font-size:30px;
        cursor:pointer
    }

    .marginLeft250 {
        margin-left: 250px !important;
    }
    .marginLeft0 {
        margin-left: 0 !important;
    }
    .widht250 {
        width: 250px !important;
    }
    .widht0 {
        width: 0 !important;
    }
    .item {
        color: #f1f1f1 !important;
        font-size: 15px !important;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        padding: 10px 0 10px 0 !important;
    }
    .item:hover{
        cursor: pointer;
        background-color: #5d7290;
    }
    .submoduleContainer {
        background-color: #586271;
    }


    /*---------------------------------------------------*/
    .active {
        background-color: #1cb09a !important;
        color: #f1f1f1 !important;
    }
    .logo {
        width: 100%;
        height: 38px;
        background-color: #ffffff;
        border-right: 1px solid #e7e7e78c;
        border-bottom: 1px solid #e7e7e78c;
    }
`;