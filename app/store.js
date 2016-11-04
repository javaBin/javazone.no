import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import * as reducers from './reducers';
import { workshops } from './reducers/workshops';
import { sessions } from './reducers/sessions';
import { session } from './reducers/session';
import { routes } from './reducers/routes';

const configureStore = function (rootReducer) {
    const middleware = applyMiddleware(thunkMiddleware);
    const store = middleware(createStore)(rootReducer);

    return store;
};

function makeStore(location) {
    return configureStore(combineReducers({
        workshops,
        sessions,
        session,
        routes: routes(location)
    }));
}

export { makeStore };
