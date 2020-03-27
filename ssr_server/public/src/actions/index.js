import {
    //ADD_NEW_MESSAGE,
    SET_API_DATA,
    /*UPDATE_API_DATA,
    CREATE_BURN_AGENT,
    CALL_METRICS,*/
    CALL_USER_ACCESS,
    SAVE_USER_ACCESS,
    REMOVE_USER_ACCESS,
    SAVE_LOGIN_ERROR,
    SHOW_SPINNER_STATUS,
    CALL_PROFESORS,
    SAVE_PROFESORS,
    SAVE_NEW_USER_ACCESS,
    SAVE_TOKEN_VALIDATION,
    CALL_USER_TOKEN_VALIDATION
} from '../action-types/index.js';

//import { List as list } from 'immutable';
//import axios from 'axios';

//const dataTest = [{"id":2278,"type":"rss","value":"41275392","createdAt":"2018-02-28T17:35:53.316Z"},{"id":2275,"type":"rss","value":"41230336","createdAt":"2018-02-28T17:35:51.300Z"},{"id":2272,"type":"rss","value":"40923136","createdAt":"2018-02-28T17:35:49.313Z"},{"id":2269,"type":"rss","value":"40644608","createdAt":"2018-02-28T17:35:47.723Z"},{"id":2266,"type":"rss","value":"40869888","createdAt":"2018-02-19T21:59:10.480Z"},{"id":2263,"type":"rss","value":"40824832","createdAt":"2018-02-19T21:59:08.492Z"},{"id":2260,"type":"rss","value":"40783872","createdAt":"2018-02-19T21:59:06.499Z"},{"id":2257,"type":"rss","value":"40361984","createdAt":"2018-02-19T21:59:04.552Z"},{"id":2254,"type":"rss","value":"42201088","createdAt":"2018-02-19T03:57:41.620Z"},{"id":2251,"type":"rss","value":"42156032","createdAt":"2018-02-19T03:57:39.548Z"},{"id":2248,"type":"rss","value":"42115072","createdAt":"2018-02-19T03:57:37.587Z"},{"id":2245,"type":"rss","value":"42070016","createdAt":"2018-02-19T03:57:35.535Z"},{"id":2242,"type":"rss","value":"42024960","createdAt":"2018-02-19T03:57:33.547Z"},{"id":2239,"type":"rss","value":"41984000","createdAt":"2018-02-19T03:57:31.522Z"},{"id":2236,"type":"rss","value":"41938944","createdAt":"2018-02-19T03:57:29.644Z"},{"id":2233,"type":"rss","value":"41897984","createdAt":"2018-02-19T03:57:27.529Z"},{"id":2230,"type":"rss","value":"41852928","createdAt":"2018-02-19T03:57:25.515Z"},{"id":2227,"type":"rss","value":"41807872","createdAt":"2018-02-19T03:57:23.513Z"},{"id":2224,"type":"rss","value":"41771008","createdAt":"2018-02-19T03:57:21.518Z"},{"id":2221,"type":"rss","value":"41717760","createdAt":"2018-02-19T03:57:19.590Z"}];

export function callProfesors(data) {
    return {
        type: CALL_PROFESORS,
        payload: {
            data
        }
    }
}

export function saveProfesors(profesorsAction) {
    return {
        type: SAVE_PROFESORS,
        payload: {
            profesorsAction
        }
    }
}

export function showSpinner(status) {
    return {
        type: SHOW_SPINNER_STATUS,
        payload: {
            status
        }
    }
}

export function saveUserAccess(userAccess) {
    return {
        type: SAVE_USER_ACCESS,
        payload: {
            userAccess
        }
    }
}

export function saveUserTokenAndDeleteOldErrors(userAccess) {
    return {
        type: SAVE_NEW_USER_ACCESS,
        payload: {
            userAccess
        }
    }
}

export function saveTokenAuthResult(isTokenValid) {
    return {
        type: SAVE_TOKEN_VALIDATION,
        payload: {
            isTokenValid
        }
    }
}

export function callUserTokenValidation(userToken) {
    return {
        type: CALL_USER_TOKEN_VALIDATION,
        payload: {
            userToken
        }
    }
}

export function removeUserAccess() {
    return {
        type: REMOVE_USER_ACCESS
    }
}

export function callUserAccess(user, password) {
    return {
        type: CALL_USER_ACCESS,
        payload: {
            user,
            password
        }
    }
}

export function saveLoginError(error) {
    return {
        type: SAVE_LOGIN_ERROR,
        payload: {
            error
        }
    }
}

export function setApiData(apiData) {
    return {
        type: SET_API_DATA,
        payload: {
            apiData,
            newData: true
        }
    }
}

export function addNewMessage(message, userID) {
    return {
        type: ADD_NEW_MESSAGE,
        payload: {
            message: message,
            userID: userID
        }
    }
}

export function createBurnAgent(uuid, type) {
    return {
        type: CREATE_BURN_AGENT,
        payload: {
            uuid: uuid,
            type: type
        }
    }
}

export function updateApiData(apiData) {
    return {
        type: UPDATE_API_DATA,
        payload: {
            apiData: apiData,
            newData: true
        }
    }
}

export function callMetrics(uuid, type) {
    return {
        type: CALL_METRICS,
        payload: {
            uuid,
            type
        }
    }
}

/*export function callMetrics(uuid, type) {
    return dispatch => {
        return axios.get(`http://localhost:8080/metrics/${uuid}/${type}`)
        .then(response => {
            //console.log(response.data);
            dispatch(setApiData(response.data));
        })
    }
}*/