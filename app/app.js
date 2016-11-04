import styles from './styles/app.less';
import 'whatwg-fetch';
import someImage from './assets/some_image.png';
import * as polyfill from './components/polyfill';
import * as favicons from './favicon';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import {Provider} from 'react-redux';
import { makeStore } from './store.js';
import pageview from './analytics';
import Root from './root';
import html from './html';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createLocation } from 'history/LocationUtils';

if (typeof document !== 'undefined') {
    const container = document.querySelector('#app');
    const history = createBrowserHistory();
    const store = makeStore(history.location);

    function dispatchPage(pathname) {
        store.dispatch({
            type: 'ROUTER_NAVIGATE',
            value: pathname
        });
    }

    window.onpopstate = function(ev) {
        console.log(history.location);
        const url = history.location.pathname;
        dispatchPage(url);
    };

    render(<Provider store={store}><Root></Root></Provider>, container);
}

export default function (locals) {
    console.log(locals.path);
    // const history = createMemoryHistory();
    const location = createLocation(locals.path);
    const store = makeStore(location);
    return html(renderToString(<Provider store={store}><Root></Root></Provider>));
};
