import { combineReducers } from 'redux';
import Common from './Common';
import MyHeader from './MyHeader';

export function createReducer(initialparams, reducerMap) {
    return (params = initialparams, action) => {
        const reducer = reducerMap[action.type]
        return reducer ? reducer(params, action.payload ? action.payload : {}, action.params) : params
    }
}

export default combineReducers({
    Common,
    MyHeader,
});