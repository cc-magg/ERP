import { fromJS } from 'immutable';
//import data
import apiData from '../api.json';
//import normalizedData from '../schemas/index.js';

import { ADD_NEW_MESSAGE } from '../action-types/index.js';

const initialState = fromJS({
    /*entities: normalizedData.entities,
    categories: normalizedData.result.categories,*/
    message: apiData.message,
    userMessage: '',
    userID: ''
});

const data = (state = initialState, action) => {
    //que hago con el estado segun la accion
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            console.log('mensaje: '+action.payload.query+' id: '+action.payload.userID);
            return state.merge({userMessage: action.payload.message, userID: action.payload.userID})
        }
        default:return state;
    }
};

export default data;