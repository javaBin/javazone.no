import React from 'react';
import index from './pages/index';
import videos from './pages/videos';
import partners from './pages/partners';
import notFound from './pages/404.js';
import partnermoteDesember from './pages/partnermote-desember';
import partnermoteApril from './pages/partnermote-april.js';
import partnermoteJuni from './pages/partnermote-juni.js';
import konkurranse from './pages/konkurranse';
import academy from './pages/academy';
import academyLocation from './pages/academy-program.js';
import expo from './pages/expo';
import kids from './pages/kids';
import speakers from './pages/speakers';
import monetaryPolicy from './pages/monetary-policy';
import tipsAndTricks from './pages/tips-and-tricks';
import tickets from './pages/tickets';
import { store } from './store';
import pageview from './analytics';
import academyData from './data/academy';
import frivillig from './pages/frivillig';
import journeyZone from './pages/journeyzone';
import info from './pages/info'

const routes = {
    '/': index,
    '/videos': videos,
    '/partners': partners,
    '/partnermote-desember': partnermoteDesember,
    '/partnermote-april': partnermoteApril,
    '/partnermote-juni': partnermoteJuni,
    '/konkurranse': konkurranse,
    '/academy': academy,
    '/expo': expo,
    '/kids': kids,
    '/academy/oslo': academyLocation(academyData.oslo),
    '/academy/trondheim': academyLocation(academyData.trondheim),
    '/academy/bergen': academyLocation(academyData.bergen),
    '/speakers': speakers,
    '/speakers/monetary-policy': monetaryPolicy,
    '/speakers/tips': tipsAndTricks,
    '/tickets': tickets,
    '/frivillig': frivillig,
    '/journeyzone': journeyZone,
    '/info': info,
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
    if (requestedPage[requestedPage.length - 1] === '/' && requestedPage.length > 1) {
        requestedPage = requestedPage.substring(0, requestedPage.length - 1);
    }

    const page = routes[requestedPage];
    if (!page) {
        pageview('/404');
        return notFound;
    }

    pageview(requestedPage);

    if (page.component) {
        if (page.action) {
            store.dispatch(page.action());
        }
        return page.component;
    } else {
        return page;
    }
};

export function link(text, href) {
    return React.createElement('a', {href: href, 'data-url': href, onClick: navigate}, text);
}
