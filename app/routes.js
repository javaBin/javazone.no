import React from 'react';
import root from './components/root';
import { store } from './store';
import pageview from './analytics';


// function navigate(ev) {
//     const url = ev.target.getAttribute('data-url');
//     if (!url) {
//         return true;
//     }

//     history.pushState(null, null, url);
//     dispatchPage(url);
//     ev.preventDefault();
//     return false;
// }


// export function link(text, href) {
//     return React.createElement('a', {href: href, 'data-url': href, onClick: navigate}, text);
// }
