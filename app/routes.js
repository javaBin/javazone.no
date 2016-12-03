import React from 'react';
import root from './components/root';
import index from './pages/index';
import videos from './pages/videos';
import partners from './pages/partners';
import notFound from './pages/404.js';
import partnermoteDesember from './pages/partnermote-desember';
import { store } from './store';
import pageview from './analytics';

const routes = {
    '/': index,
    '/videos': videos,
    '/partners': partners,
    '/partnermote-desember': partnermoteDesember
};

function dispatchPage(pathname) {
    store.dispatch({
        type: 'ROUTER_NAVIGATE',
        value: pathname
    });
}

window.onpopstate = function(ev) {
    const url = window.location.pathname;
    dispatchPage(url);
};

function navigate(ev) {
    const url = ev.target.getAttribute('data-url');
    if (!url) {
        return true;
    }

    window.history.pushState(null, null, url);
    dispatchPage(url);
    ev.preventDefault();
    return false;
}

export function getPage(requestedPage) {
    const page = routes[requestedPage];
    if (!page) {
        pageview('/404');
        return notFound;
    }

    pageview(requestedPage);
    return page;
};

export function link(text, href) {
    return React.createElement('a', {href: href, 'data-url': href, onClick: navigate}, text);
}
