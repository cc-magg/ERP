import Router from 'next/router';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';

export const auth = ctx => {
    //en caso de que ya tenga un token pues deberiamos validarlo a la api para ver si aun es valido
    //en caso de que si sea valido entonces se muestra la web
    //en caso de que no sea valido o no tenga token pues se muestra el login
    const { token } = nextCookie(ctx);
    console.log('desde auth: req = ' + ctx.req + ' token = ' + token);
    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: '/login' }).end();
    }

    if (!token) {
        Router.push("/login");
    }

    return token;
};

export const logout = () => {
    Cookies.remove('token');
    //there is an explanention for why we use localstorage in the localstorage event listener
    //To trigger the event listener we save some random data into the `logout` key, the triggered event must be in each page componentwillmount and componentdidmount
    window.localStorage.setItem("logout", Date.now());
    Router.push("/login");
};

export const login = (token, redirectTo) => {
    //expires set the amount of days to expire
    Cookies.set("token", token, { expires: 1 });
    //console.log('from auth: redirecTo: '+redirectTo+' '+Cookies.get('token'));
    Router.push(redirectTo);
};

export const getSessionToken = () => Cookies.get('token');

export const validateToken = () => {
    if (Cookies.get('token')) return true;
    //here we make a request to the api to know if the token is still valid or not
    return false;
};