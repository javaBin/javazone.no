import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import { Page, Container } from '../components/page';
import { Link } from '../components/link';

const Index = () => (
    <Page name='index'>
        <Container>
            <div className='index__content'>
                <div className='index__text'>
                    Welcome to<br />JavaZone 2017
                </div>
                <div className='index__info'>
                    September 13th –14th<br />
                    Oslo Spektrum
                </div>
                <ul className='index__links'>
                    <li className='index__links-item'>
                        <Link href='/info' className='index__link index__link--green'>Info</Link>
                    </li>
                    <li className='index__links-item'>
                        <Link href='/tickets' className='index__link index__link--blue'>Tickets</Link>
                    </li>
                    <li className='index__links-item'>
                        <Link href='/speakers' className='index__link index__link--pink'>Speakers</Link>
                    </li>
                    <li className='index__links-item'>
                        <Link href='/partners' className='index__link index__link--orange'>Partners</Link>
                    </li>
                </ul>
            </div>
        </Container>
    </Page>
);

export default Index;
