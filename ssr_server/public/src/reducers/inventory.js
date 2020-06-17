import { SAVE_INVENTORY, CLEAR_INVENTORY } from '../action-types/index.js';
import { fromJS} from 'immutable';

const initialState = fromJS({
    products: []
})

const spinnerStatus = (state = initialState, action) => {
    
    switch (action.type) {
        case SAVE_INVENTORY: {
            return state.set('products', action.payload.data);
        }
        case CLEAR_INVENTORY: {
            return state.set('products', []);
        }
        default:return state;
    }
}

export default spinnerStatus;