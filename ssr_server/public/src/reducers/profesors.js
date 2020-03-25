import { fromJS, Map as map} from 'immutable';
import { SAVE_PROFESORS } from '../action-types/index.js';

const initialState = fromJS({
    profesorsList: []
});

const user = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PROFESORS: {
            //console.log("ya se guardo el profesor en el reducer")
            return state.set('profesorsList', action.payload.profesorsAction.get('profesores')); 
        }
        default: return state
    }
}

export default user;