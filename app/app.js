import styles from './styles/app.less';
import someImage from './assets/some_image.png';
import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {syncHistory, routeReducer} from 'react-router-redux';
import routes from './routes';
import browserHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useSimpleScroll';
import pageview from './analytics';

const history = useScroll(browserHistory)();
const middleware = syncHistory(history);
const reducer = combineReducers({
    routing: routeReducer
});
const finalCreateStore = compose(
    applyMiddleware(middleware)
)(createStore);
const store = finalCreateStore(reducer);
const config = {history, routes};
const container = document.querySelector('#app');

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <Router {...config} />
    </Provider>,
    container
);
history.listen(location => {
    pageview(location.pathname);
});
