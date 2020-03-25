import css from "styled-jsx/css";

export const main = css`
    .path {
        background-color: #f2f2f2;
        width: 100%;
        padding: 10px;
    }
    .padding0, .padding0>div {
        padding: 0 !important;
    }
    .margin0 {
        margin-bottom: 0 !important;
    }
    .contentMenu {
        position: relative;
        /*padding: 5px;*/
        background-color: #FFFFFF;
        border-bottom: 1px solid #e7e7e78c;
        /*height: auto;*/
    }
    .mainPadding {
        padding: 10px;
    }
    .iconContainer{
        width: 30px;
        padding-left: 5px;
        padding-right: 5px;
        display: inline-block;
    }
    .displayInline {
        display: inline-block;
    }
    .firstItem {
        margin-left: 40px;
    }
    .floatRight {
        position: absolute;
        right: 0;
        bottom: 0px;
    }
    .padding5px {
        padding-left: 5px;
        padding-right: 5px;
    }
    .icon {
        font-size: 20px;
    }
    .pageIndicator {
        width: 100%;
        background-color: #f7f7f7;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .pageIndicatorText {
        padding-left: 10px;
        font-size: 15px;
    }
    @media (max-width: 584px) {
        .floatRight{
            position: relative;
            bottom: 0;
        }
    }
`;

export const sidebar = css`
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
        color: #f1f1f1;
        font-size: 15px;
        transition: 0.5s;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .item:hover{
        cursor: pointer;
        background-color: #5d7290;
    }


    /*---------------------------------------------------*/
    .navIcon3 {
        position: absolute;
        margin-left: 10px;
        width: 20px;
        /*position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);*/
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    .navIcon3 span{
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: #333f50;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .navIcon3 span:nth-child(1) {
        top: 7px;
    }
    
    .navIcon3 span:nth-child(2),.navIcon3 span:nth-child(3) {
        top: 17px;
    }
    
    .navIcon3 span:nth-child(4) {
        top: 27px;
    }
    
    .navIcon3.open span:nth-child(1) {
        top: 10px;
        width: 0%;
        left: 50%;
    }
    
    .navIcon3.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
    .navIcon3.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    
    .navIcon3.open span:nth-child(4) {
        top: 10px;
        width: 0%;
        left: 50%;
    }
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