import { fromJS } from 'immutable';
import { SAVE_USER_ACCESS, REMOVE_USER_ACCESS, SAVE_LOGIN_ERROR, SAVE_NEW_USER_ACCESS, SAVE_TOKEN_VALIDATION } from '../action-types/index.js';
import { login } from '../../../utils/auth';

import { LocalStorageAddItem, LocalStorageRemoveItem } from '../../../localStorageOptions';

const initialState = fromJS({
    access: {},
    isTokenValid: false,
    error: ''
});

const user = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NEW_USER_ACCESS: {
            return state.merge({ access: action.payload.userAccess, error: '', isTokenValid: true });
        }
        case SAVE_USER_ACCESS: {
            //here we also save it in the localstorage of the browser
            //LocalStorageAddItem('access', JSON.stringify(action.payload.userAccess));
            if(action.payload.userAccess == '') {
                return state.merge({ access: action.payload.userAccess, error: '', isTokenValid: false });
            }
            return state.set('access', action.payload.userAccess);
        }
        case SAVE_TOKEN_VALIDATION: {
            //here we check if the request reponses as token valid then we save a true otherwise false
            if (action.payload.isTokenValid) {
                return state.set('isTokenValid', true);
            } else return state.set('isTokenValid', false);
        }
        case SAVE_LOGIN_ERROR: {
            if (action.payload.error) {
                return state.set('error', action.payload.error);
            }
            return null;
        }
        case REMOVE_USER_ACCESS: {
            LocalStorageRemoveItem('access');
            return state.set('access', '');
        }
        default: return state
    }
}

export default user;