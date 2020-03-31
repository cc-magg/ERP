import Router from 'next/router';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import axios from 'axios';

export const auth = async ctx => {
    //en caso de que ya tenga un token pues deberiamos validarlo a la api para ver si aun es valido
    //en caso de que si sea valido entonces se muestra la web
    //en caso de que no sea valido o no tenga token pues se muestra el login

    /*const { token, sessionName } = nextCookie(ctx);
    console.log(sessionName? sessionName : 'DESDE AUTH NO ENCONTRO ESA COOKIE');*/
    /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
    /* if (ctx.req && !sessionName) {
         ctx.res.writeHead(302, { Location: "/login" });
         ctx.res.end();
     }
 
     // We already checked for server. This should only happen on client.
     if (!sessionName) {
         return '';
     }*/

    //return result;
};

export const logout = async origin => {
    /*Cookies.remove('sessionName');
    Cookies.remove('token');*/
    //there is an explanention for why we use localstorage in the localstorage event listener found on every private page like /main
    //To trigger the event listener we save some random data into the `logout` key, the triggered event must be in each page componentwillmount and componentdidmount

    const result = await axios.get('http://localhost:8000/logout');
    if (result) {
        if(result.data == 'deleted'){
            window.localStorage.setItem("logout", Date.now());
            if (origin != '/login') Router.push("/login");
        }
        //console.log('cookie logout result', result.data);
        return result.data;
    }
};

export const checkInCookieForUsers = async () => {
    /*if (Cookies.get('token')) return true;
    //here we make a request to the api to know if the token is still valid or not
    return false;*/
    const result = await axios.get('http://localhost:8000/checkToken');
    if (result) return result;
};

export const login = async () => {
    //expires set the amount of days to expire
    //Cookies.set("token", token, { expires: 1 });
    //console.log('from auth: redirecTo: '+redirectTo+' '+Cookies.get('token'));
    //Router.push(redirectTo);
    const result = await axios.get('http://localhost:8000/loginCheck');
    if (result) return result;
};

export const getSessionToken = () => Cookies.get('token');