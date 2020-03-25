import { SHOW_SPINNER_STATUS } from '../action-types/index.js';
import { fromJS, Map as map, List as list } from 'immutable';

const initialState = fromJS({
    showSpinner: false
})

const spinnerStatus = (state = initialState, action) => {
    
    switch (action.type) {
        case SHOW_SPINNER_STATUS: {
            return state.set('showSpinner', action.payload.status);
        }
        default:return state;
    }
}

export default spinnerStatus;