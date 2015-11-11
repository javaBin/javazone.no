import styles from './styles/app.less';
import someImage from './assets/some_image.png';
import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import routes from './routes';
import browserHistory from 'history/lib/createBrowserHistory';
import pageview from './analytics';

const history = browserHistory();
const config = {history, routes};
const container = document.querySelector('#app');
render(<Router {...config} />, container);

history.listen(location => {
    pageview(location.pathname);
});