import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root';
import Index from './pages/index';
import Contact from './pages/contact';
import Partners from './pages/partners';
import PartnerPresentation from './pages/partner-presentation';
import PartnerPresentationEN from './pages/partner-presentation-en';
import About from './pages/about';
import Kids from './pages/kids';
import Academy from './pages/academy';
import Speakers from './pages/speakers';
import NotFound from './pages/404.js';

export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Index} />
        <Route path='contact' component={Contact} />
        <Route path='partners' component={Partners} />
        <Route path='partner-presentation' component={PartnerPresentation} ignoreScrollBehavior/>
        <Route path='partner-presentation-en' component={PartnerPresentationEN} ignoreScrollBehavior/>
        <Route path='about' component={About} />
        <Route path='kids' component={Kids} />
        <Route path='academy' component={Academy} />
        <Route path='speakers' component={Speakers} />
        <Route path='*' component={NotFound} />
    </Route>
);