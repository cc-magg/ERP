import { fromJS } from 'immutable';
import { SAVE_USER_ACCESS, REMOVE_USER_ACCESS, SAVE_LOGIN_ERROR, SAVE_NEW_USER_ACCESS } from '../action-types/index.js';
import { login } from '../../../utils/auth';

import { LocalStorageAddItem, LocalStorageRemoveItem } from '../../../localStorageOptions';

const initialState = fromJS({
    access: {},
    error: ''
});

const user = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NEW_USER_ACCESS: {
            return state.merge({access: action.payload.userAccess, error: ''});
        }
        case SAVE_USER_ACCESS: {
            //here we also save it in the localstorage of the browser
            //LocalStorageAddItem('access', JSON.stringify(action.payload.userAccess));
            return state.set('access', action.payload.userAccess);
        }
        case SAVE_LOGIN_ERROR: {
            if(action.payload.error) {
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