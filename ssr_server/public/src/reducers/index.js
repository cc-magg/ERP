import data from './data.js';
import backendData from './apiData.js';
import agent from './agent.js';
import user from './user.js';
import spinner from './spinner.js';
import profesors from './profesors.js';
import inventory from './inventory.js';
import userSession from './userSession';

import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    data,
    backendData,
    agent,
    user,
    spinner,
    profesors,
    inventory,
    userSession,
});

export default rootReducer;
