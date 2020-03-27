import Router from 'next/router';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import axios from 'axios';

export const auth = async ctx => {
    //en caso de que ya tenga un token pues deberiamos validarlo a la api para ver si aun es valido
    //en caso de que si sea valido entonces se muestra la web
    //en caso de que no sea valido o no tenga token pues se muestra el login

    const { token } = nextCookie(ctx);
    /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: "/login" });
        ctx.res.end();
    }

    // We already checked for server. This should only happen on client.
    if (!token) {
        return '';
    }

    //this happens in the ssr_server server side so the console.log appears in the next.js console not in the browser
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/api/vistaprivada',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log('response --> ', response);
    //en caso de que el request retorne un error diferente a que el token expiro, entonces, se le debe mostrar una ventana de 
    //error al usuario con un boton para ir al menu
    
    //si el token expiro entonces hacemos un silent auth (es un request) para pedir un token nuevo y lo guardamos para
    //proceder a pedir nuevamente la informacion a /vistaprivada pero esta vez con un token valido

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