import { fromJS, Map as map, Seq  } from 'immutable';
import { List as list } from 'immutable';
import { SET_API_DATA, UPDATE_API_DATA } from '../action-types/index.js';

const initialState = fromJS({
    apiData: [],
    newData: false
});

const data = (state = initialState, action) => {
    //que hago con el estado segun la accion
    switch (action.type) {
        case SET_API_DATA: {
            let result = [];
            result = action.payload.apiData.map(item => {
                return map(item)
            });
            /*action.payload.apiData.forEach(element => {
                result.push(map(element));
                //result = result.concat(asd)
            });*/
            //console.log(result);
            //return state.set('apiData',  result)
            return state.merge({apiData: action.payload.apiData, newData: action.payload.newData})
            //return state.set('apiData', result2);
            //return state.set('apiData', JSON.stringify({"id":2278,"type":"rss","value":"41275392","createdAt":"2018-02-28T17:35:53.316Z"}))
        }
        case UPDATE_API_DATA: {
            let a = [];
            let b = [];
            state.get('apiData').forEach(element => {
                a.push(element);
            });
            b.push(action.payload.apiData);
            let result = a.concat(b);
            return state.set('apiData', list(result))
        }
        default:return state;
    }
};

export default data;