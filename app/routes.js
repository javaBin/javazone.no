import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root';
import Index from './pages/index';
import Contact from './pages/contact';
import Partners from './pages/partners';
import About from './pages/about';
import NotFound from './pages/404.js';

export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Index} />
        <Route path='contact' component={Contact} />
        <Route path='partners' component={Partners} />
        <Route path='about' component={About} />
        <Route path='*' component={NotFound} />
    </Route>
);