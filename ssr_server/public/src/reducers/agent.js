import { CREATE_BURN_AGENT } from '../action-types/index.js';
import { fromJS, Map as map, Seq  } from 'immutable';
import { List as list } from 'immutable';

const initialState = fromJS({
    uuid: '',
    type: ''
})

const agent = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BURN_AGENT: {
            return state.merge({uuid: action.payload.uuid, type: action.payload.type})
        }
        default:return state;
    }
}

export default agent;