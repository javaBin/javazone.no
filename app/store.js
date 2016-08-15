import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { workshops, sessions, session } from './reducers';
import { browserHistory } from 'react-router';

const configureStore = function (rootReducer) {
    const middleware = applyMiddleware(thunkMiddleware);
    const store = middleware(createStore)(rootReducer);

    return store;
};

const reducer = combineReducers({
    workshops,
    sessions,
    session,
    router: routerReducer
});

const store = configureStore(reducer);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
});

export { store, history };
