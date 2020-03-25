import data from './data.js';
import backendData from './apiData.js';
import agent from './agent.js';
import user from './user.js';
import spinner from './spinner.js';
import profesors from './profesors';

import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    data,
    backendData,
    agent,
    user,
    spinner,
    profesors
});

export default rootReducer;
