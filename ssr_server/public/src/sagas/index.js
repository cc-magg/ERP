import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { Map as map } from 'immutable';

import { login } from '../../../utils/auth';
import {
    CALL_METRICS,
    CALL_USER_ACCESS,
    CALL_PROFESORS
} from '../action-types/index.js';
import {
    setApiData,
    saveUserAccess,
    saveLoginError,
    saveProfesors,
    saveUserTokenAndDeleteOldErrors
} from '../actions/index.js';

import { apiKeyToken } from '../../../keysConfig';


export function* getUserAccess(action) {
    const token = Buffer.from(`${action.payload.user}:${action.payload.password}`, 'utf8').toString('base64');
    try {
        /*const response = yield call(axios.post, `http://localhost:3000/api/auth/sign-in`, { apiKeyToken }, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });*/
        const response = yield call(axios.post, `/validateUser`, { token });
        if (response.data.name && response.data.name === 'Error') {
            //console.log('SALIO SINEDO UN ERROR');
            throw new Error('' + response.data.message);
        } else {
            //console.log('guardo el nuevo token: '+JSON.stringify(response));
            yield put(saveUserTokenAndDeleteOldErrors(response.data.token));
        }
        //yield put((response.data.error) ? saveLoginError(response.data.error) : saveUserTokenAndDeleteOldErrors(response.data.token));
    } catch (error) {
        console.log('Request failed¡¡ error: ' + error.message);
        yield put(saveLoginError(error.message));
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