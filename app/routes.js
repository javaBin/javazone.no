import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root';
import Index from './pages/index';
import Contact from './pages/contact';
import Partners from './pages/partners';
import PartnerPresentation from './pages/partner-presentation';
import PartnerPresentationEN from './pages/partner-presentation-en';
import PartnerPresentationApril from './pages/partner-presentation-april';
import About from './pages/about';
import Kids from './pages/kids';
import Academy from './pages/academy';
import Speakers from './pages/speakers';
import Tickets from './pages/tickets';
import MonetaryPolicy from './pages/monetary-policy';
import NotFound from './pages/404.js';

// Academy
import AcademyOslo from './pages/academy/oslo';
import AcademyBergen from './pages/academy/bergen';
import AcademyTrondheim from './pages/academy/trondheim';

export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Index} />
        <Route path='contact' component={Contact} />
        <Route path='partners' component={Partners} />
        <Route path='partner-presentation' component={PartnerPresentation} ignoreScrollBehavior/>
        <Route path='partner-presentation-en' component={PartnerPresentationEN} ignoreScrollBehavior/>
        <Route path='partner-presentation-april' component={PartnerPresentationApril} ignoreScrollBehavior/>
        <Route path='about' component={About} />
        <Route path='kids' component={Kids} />
        <Route path='academy' component={Academy} />
        <Route path='speakers' component={Speakers} />
        <Route path='tickets' component={Tickets} />
        <Route path='monetary-policy' component={MonetaryPolicy} />
        <Route path='academy-oslo' component={AcademyOslo} />
        <Route path='academy-bergen' component={AcademyBergen} />
        <Route path='academy-trondheim' component={AcademyTrondheim} />
        <Route path='*' component={NotFound} />
    </Route>
);