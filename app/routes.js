import React from 'react';
import index from './pages/Index/Index.js';
import partners from './pages/Partners/Partners.js';
import notFound from './pages/404.js';
import partnermoteDesember from './pages/partnermote-desember';
import partnermoteApril from './pages/partnermote-april.js';
import partnermoteJuni from './pages/partnermote-juni.js';
import academy from './pages/Academy/Academy.js';
import academySeptember from './pages/academy-september.js';
import academyLocation from './pages/academy-program.js';
import speakers from './pages/Speakers/Speakers.js';
import speakerinfo from './pages/speakerinfo';
import tickets from './pages/Tickets/Tickets.js';
import { store } from './store';
import pageview from './analytics';
import academyData from './data/academy';
import info from './pages/Info/Info.js';

const routes = compile({
    '/partners': partners,
    '/partnermote-desember': partnermoteDesember,
    '/academy': academy,
    '/academy/oslo': academyLocation(academyData.oslo),
    '/academy/trondheim': academyLocation(academyData.trondheim),
    '/academy/bergen': academyLocation(academyData.bergen),
    '/speakers': speakers,
    '/tickets': tickets,
    '/info': info,
    '/': index
});

function compile(routes) {
    const compiled = [];
    Object.keys(routes).forEach(route => {
        compiled.push({
            pattern: new RegExp(`^${route.replace(/\//g, '\\/')}$`),
            page: routes[route]
        });
    });
    return compiled;
}

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

    const page = routes.find((routes) => {
        return routes.pattern.test(requestedPage);
    });

    if (!page) {
        pageview('/404');
        return notFound;
    }

    pageview(requestedPage);

    if (page && page.page.component) {
        if (page.page.action) {
            store.dispatch(page.page.action());
        }
        return page.page.component;
    } else {
        const match = requestedPage.match(page.pattern);
        if (match.length > 1) {
            return page.page(match[1]);
        } else {
            return page.page;
        }
    }
};

export function link(text, href) {
    return React.createElement('a', {href: href, 'data-url': href, onClick: navigate}, text);
}
