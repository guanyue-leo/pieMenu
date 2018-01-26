import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index'

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ]);
        default:
            return state
    }
}

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        promiseMiddleware,
        createLogger({diff: true})
    )
);

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
});

export default store;