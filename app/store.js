import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {syncHistory, routeReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { workshops } from './reducers';
import browserHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useSimpleScroll';

const history = useScroll(browserHistory)();
const middleware = syncHistory(history);
const reducer = combineReducers({
    workshops,
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
