import styles from './styles/app.less';
import 'whatwg-fetch';
import someImage from './assets/some_image.png';
import * as polyfill from './components/polyfill';
import * as favicons from './favicon';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import {Provider} from 'react-redux';
import makeStore from './store.js';
import pageview from './analytics';
import Root from './root';
import html from './html';

if (typeof document !== 'undefined') {
    const container = document.querySelector('#app');
    const { history, store} = makeStore();

    function dispatchPage(pathname) {
        store.dispatch({
            type: 'ROUTER_NAVIGATE',
            value: pathname
        });
    }

    window.onpopstate = function(ev) {
        const url = history.location.pathname;
        dispatchPage(url);
    };

    render(<Provider store={store}><Root></Root></Provider>, container);
}

export default function (locals) {
    const { store } = makeStore(locals);
    return html(renderToString(<Provider store={store}><Root></Root></Provider>));
};
