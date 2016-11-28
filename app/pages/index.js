import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import { Page } from '../components/page';
import { TransitionWord } from '../components/word-transition.js';
import { Link } from '../components/link';

const twoSettings = {minWrongChars: 20, maxWrongChars: 25, delay: 900};
const fourSettings = {minWrongChars: 25, maxWrongChars: 35, delay: 900};
const textSettings = {minWrongChars: 10, maxWrongChars: 20, delay: 900};

const Index = () => (
    <Page name='index' showLogo={false}>
        <div className='index__content'>
            <img className='index__logo' src={logo} />
            <div className='index__text'>
                <TransitionWord settings={textSettings}>September 13th-14th 2017</TransitionWord>
                <TransitionWord settings={textSettings}>Oslo / Norway / World</TransitionWord>
                <TransitionWord settings={textSettings}>Save the date</TransitionWord>
            </div>
            <p className='index__teasertext'>While you wait:</p>
            <ul className='index__links'>
                <li className='index__link'>
                    <Link href='/videos' className='button button--transparent'>One thousand videos awaits you!</Link>
                </li>
            </ul>
        </div>
    </Page>
);

export default Index;
