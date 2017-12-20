import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

const configureStore = function (rootReducer) {
    const middleware = applyMiddleware(thunkMiddleware);
    const store = middleware(createStore)(rootReducer);

    return store;
};

const store = configureStore(combineReducers(reducers));

export { store };
