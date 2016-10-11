import React from 'react';
import logo from '../assets/logo-horisontal-hvit.svg';
import { Page, PageHeading, Container } from '../components/page';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const Index = () => (
    <Page name='index'>
        <div className='index__content'>
            <h1 className='index__header'>2</h1>
            <div className='index__text'>
                test
            </div>
        </div>
    </Page>
);

export default Index;
