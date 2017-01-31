import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import { Page } from '../components/page';
import { TransitionWord } from '../components/word-transition.js';
import { Link } from '../components/link';

const Index = () => (
    <Page name='index' showLogo={false}>
        <div className='index__content'>
            <img className='index__logo' src={logo} />
            <div className='index__text'>
                Welcome to<br />JavaZone 2017
            </div>
            <p className='index__teasertext'>While you wait:</p>
            <ul className='index__links'>
                <li className='index__link'>
                    <Link href='/videos' className='button button--transparent'>One thousand videos awaits you!</Link>
                </li>
                <li className='index__link'>
                    <Link href='/konkurranse' className='button button--transparent'>Lag neste JavaZone-video (norwegian)</Link>
                </li>
            </ul>
            <p className='index__partnerlink'>Interested in <Link href='/partners'>being a partner</Link> of JavaZone?</p>
        </div>
    </Page>
);

export default Index;
