import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import background from '../assets/background.jpg';
import { Page, PageHeading, Container } from '../components/page';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { TransitionWord } from '../components/word-transition.js';
import { Link } from '../components/link';

const twoSettings = {minWrongChars: 20, maxWrongChars: 25, delay: 900};
const fourSettings = {minWrongChars: 25, maxWrongChars: 35, delay: 900};
const textSettings = {minWrongChars: 10, maxWrongChars: 20, delay: 900};

const Index = () => (
    <Page name='index'>
        <div className='index__content'>
            <img className='index__logo' src={logo} />
            <div className='index__text'>
                <TransitionWord settings={textSettings}>September 13th-14th 2017</TransitionWord>
                <TransitionWord settings={textSettings}>Oslo / Norway / World</TransitionWord>
                <TransitionWord settings={textSettings}>Save the date</TransitionWord>
            </div>
            <ul className='index__links'>
                <li className='index__link'>
                    <a href='https://2016.javazone.no' className='button button--transparent'>
                        Retro? JavaZone 2016!
                    </a>
                </li>
                <li className='index__link'>
                    <Link href='/videos' className='button button--transparent'>Boost your knowledge</Link>
                </li>
            </ul>
        </div>
    </Page>
);

export default Index;
