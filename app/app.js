import reactFlexboxGrid from 'react-flexbox-grid';
import styles from './styles/App.less';
import 'whatwg-fetch';
import 'es6-promise/auto';
import * as polyfill from './components/polyfill';
import * as favicons from './favicon';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { store } from './store.js';
import routes from './routes';
import pageview from './analytics';
import Root from './root';

const container = document.querySelector('#app');

render(<Provider store={store}><Root></Root></Provider>, container);
