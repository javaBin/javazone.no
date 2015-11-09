import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root';
import Index from './pages/index';
import Contact from './pages/contact';
import NotFound from './pages/404.js';

export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Index} />
        <Route path='contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);