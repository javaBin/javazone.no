import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createLocation } from 'history/LocationUtils';
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

/**
  * If locals exists, we are on the server and use memoryHistory.
  * If not, we are on the client and can use browserHistory.
  */
export default function(locals) {
    let history = null;
    let location = null;

    if (!locals) {
        history = createBrowserHistory();
        location = history.location;
    } else {
        history = createMemoryHistory();
        location = createLocation(locals.path);
    }

    return { history, store: makeStore(location) };
}
