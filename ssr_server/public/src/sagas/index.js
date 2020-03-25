import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { Map as map } from 'immutable';

import { login } from '../../../utils/auth';
import { CALL_METRICS, CALL_USER_ACCESS, CALL_PROFESORS } from '../action-types/index.js';
import { setApiData, saveUserAccess, saveLoginError, saveProfesors, saveUserTokenAndDeleteOldErrors } from '../actions/index.js';

import { config } from '../../../config';


export function* getUserAccess(action) {
    try {
        console.log('antes del call '+config.apiKeyToken);
        //const response = yield call(axios.get, `http://localhost:8080/login/${action.payload.user}/${action.payload.password}`);
        const response = yield call(axios.post, `http://localhost:3000/api`, { apiKeyToken: config.apiKeyToken });

        /*const apiCall = () => {
            return axios.post('http://localhost:3000/api/auth/sign-in', { apiKeyToken: config.apiKeyToken }, {
                auth: {
                    email: action.payload.email,
                    password: action.payload.password
                }
            }).then(response => response.data)
                .catch(err => {
                    throw err;
                });
        }*/
        //if(response.data) login(response.data.newUserToken);
        //yield put(saveUserAccess(map(response.data)));
        console.log('resultado', response.data);

        yield put((response.data.error) ? saveLoginError(response.data.error) : saveUserTokenAndDeleteOldErrors(response.data.newUserToken));
    } catch (error) {
        console.log('Request failed¡¡ error: ' + error);
    }
}
export function* getProfesors(action) {
    try {
        const response = yield call(axios.post, `http://localhost:5678/graphql`, { query: 'query Profesores{profesores {id,nombre,nacionalidad,genero,cursos {titulo,id}}}' });

        yield put(saveProfesors(map(response.data.data)));
    } catch (error) {
        console.log('Request failed¡¡ error: ' + error);
    }
}

export function* actionsWatcher() {
    yield all([
        takeEvery(CALL_USER_ACCESS, getUserAccess),
        takeEvery(CALL_PROFESORS, getProfesors)
    ])
}

export default function* mySaga() {
    yield all([
        actionsWatcher()
    ])
}