import { fromJS } from 'immutable';
import { SAVE_SESSION_LOCATION, ERROR } from '../action-types/index.js';

const initialState = fromJS({
    location: '',
    errors: []
});

const userSession = (state = initialState, action) => {
    
    switch (action.type) {
        case SAVE_SESSION_LOCATION: {
            return state.set('location', action.payload.data);
        }
        case ERROR: {
            let newErrors = [...state.get('errors'), action.payload.error];
            //console.log('new error array',newErrors);
            return state.set('errors', newErrors);
        }
        default:return state;
    }
}

export default userSession;