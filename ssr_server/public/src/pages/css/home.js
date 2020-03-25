import css from "styled-jsx/css";

export const home = css`
.asd {
    background-color:red;
}
.headerContainer {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
.pageContainer {
    max-width: 1080px;
    margin: 0 auto;
    padding: 20px;
}
.pageTitle {
    text-align: center;
    margin-top: 0;
}
.posRelative {
    position: relative;
}
.erp_descriptionImage {
    width: 100%;
}

@media (max-width: 579px) {
    .circle {
        max-width: 300px;
    }
}
@media (min-width: 580px) and (max-width: 639px) {
    .circle {
        max-width: 500px;
    }
}
@media (min-width: 640px) and (max-width: 767px) {
    .circle {
        max-width: 400px;
    }
    .pageTitle {
        padding-top: 50px;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .circle {
        max-width: 350px;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .circle {
        max-width: 600px;
    }
}
@media (min-width: 1200px) {
    .circle {
        max-width: 600px;
    }
}`;