import React from 'react';
import logo from '../assets/logo-horisontal-hvit.svg';
import { Page, PageHeading, Container } from '../components/page';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const Index = () => (
    <Page name='index'>
        <img src={logo} className='index__logo' />
        <div className='index__content'>
            <h1 className='index__header'>2</h1>
        </div>
    </Page>
);

export default Index;
