import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {syncHistory, routeReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { workshops, sessions, session } from './reducers';
import browserHistory from 'history/lib/createBrowserHistory';
import withScroll from 'scroll-behavior';

const history = withScroll(browserHistory());
const middleware = syncHistory(history);
const reducer = combineReducers({
    workshops,
    sessions,
    session,
    routing: routeReducer
});
const finalCreateStore = compose(
    applyMiddleware(
        thunkMiddleware,
        middleware
    )
)(createStore);
const store = finalCreateStore(reducer);

export { store, history };
