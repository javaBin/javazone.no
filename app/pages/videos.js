import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import Youtube from '../components/youtube';
import { Link } from '../components/link';

const Videos = () => (
    <Page name='videos'>
        <Heading>
            <LargeHeading>One Thousand</LargeHeading>
            <SmallHeading>Awesome Videos</SmallHeading>
        </Heading>
        <Container>
            <Pitch>
                Hour upon hours of learning & inspiration, teasers & reveals, knowledge & fun!<br/>
                A personal mini-conference in your own couch, all you need is a TV.<br/>
                All for free, as a gift from your friends JavaZone.<br/>
                Enjoy!
            </Pitch>
        </Container>
        <Container>
            <Youtube id='AUSm90PjqrM'></Youtube>
            <div className="videos__info">
                <h3 className="videos__header">Watch Sven Peters' full talk, and 1000 others on Vimeo</h3>
                <a href='https://vimeo.com/181781922' className='button button--big button--transparent videos__button'>Watch now!</a>
            </div>
        </Container>
        <Container>
            <Youtube id='m6All1O9Iuo'></Youtube>
            <div className="videos__info">
                <h3 className="videos__header">Watch Christin & Eivind's talk, and 1000 others on Vimeo</h3>
                <a href='https://vimeo.com/182070294' className='button button--big button--transparent videos__button'>Watch now!</a>
            </div>
        </Container>
        <Container>
            <Youtube id='0ZRuRS3m1FA'></Youtube>
            <div className="videos__info">
                <h3 className="videos__header">Watch Line Moseng's full talk, and 1000 others on Vimeo</h3>
                <a href='https://vimeo.com/181918406' className='button button--big button--transparent videos__button'>Watch now!</a>
            </div>
        </Container>
        <Container>
            <Youtube id='nTFk0P5qX6E'></Youtube>
            <div className="videos__info">
                <h3 className="videos__header">Watch Neal Ford's full talk, and 1000 others on Vimeo</h3>
                <a href='https://vimeo.com/181905275' className='button button--big button--transparent videos__button'>Watch now!</a>
            </div>
        </Container>
        <Container>
            <Pitch>
                JavaZone will return to Oslo Spektrum September 13th-14th 2017.<br/>
                Join our big 2^4 anniversary and see all the speakers live!<br/>
                Ticket sales & Call for Speakers opens February 2017.<br/>
                See you soon!
            </Pitch>
        </Container>

    </Page>
);

export default Videos;
