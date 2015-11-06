import styles from './styles/app.less';
import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import routes from './routes';
import browserHistory from 'history/lib/createBrowserHistory';

const history = browserHistory();
const config = {history, routes};
const container = document.querySelector('#app');
render(<Router {...config} />, container);

styles.use();