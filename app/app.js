import styles from './styles/app.less';
import someImage from './assets/some_image.png';
import * as polyfill from './components/polyfill';
import {render} from 'react-dom';
import Router from 'react-router';
import {Provider} from 'react-redux';
import { history, store } from './store.js';
import routes from './routes';
import pageview from './analytics';

const config = {history, routes};
const container = document.querySelector('#app');

render(
    <Provider store={store}>
        <Router {...config} />
    </Provider>,
    container
);
history.listen(location => {
    pageview(location.pathname);
});
