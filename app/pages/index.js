import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import { Page, Container } from '../components/page';
import { TransitionWord } from '../components/word-transition.js';
import { Link } from '../components/link';

const Index = () => (
    <Page name='index' showLogo={true}>
        <Container>
            <div className='index__content'>
                <div className='index__text'>
                    Welcome to<br />JavaZone 2017
                </div>
                <ul className='index__links'>
                    <li className='index__links-item'>
                        <Link href='/partners' className='index__link index__link--blue'>Partners</Link>
                    </li>
                    <li className='index__links-item'>
                        <Link href='/speakers' className='index__link index__link--pink'>Speakers</Link>
                    </li>
                    <li className='index__links-item'>
                        <Link href='/tickets' className='index__link index__link--orange'>Tickets</Link>
                    </li>
                    <li className='index__links-item'>
                        <Link href='/kids' className='index__link index__link--green'>Kids</Link>
                    </li>
                </ul>
            </div>
        </Container>
    </Page>
);

export default Index;
