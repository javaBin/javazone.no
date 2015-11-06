import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root';
import Index from './pages/index';
import NotFound from './pages/404.js';

export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Index} />
        <Route path='*' component={NotFound} />
    </Route>
);