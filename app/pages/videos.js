import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import Youtube from '../components/youtube';

const Videos = () => (
    <Page name='videos'>
        <Heading>
            <LargeHeading>1000</LargeHeading>
            <SmallHeading>Awesome Videos</SmallHeading>
        </Heading>
        <Container>
            <Pitch>
                Hour upon hours of learning & inspiration, teasers & reveals, knowledge & fun!<br/>
                A personal mini-conference in your own couch, all you need is a TV.<br/>
                All for free, as a gift from your friends JavaZone.<br/>
                Enjoy!
            </Pitch>
            <Youtube id='AUSm90PjqrM'></Youtube>
            <Youtube id='m6All1O9Iuo'></Youtube>
            <Youtube id='nTFk0P5qX6E'></Youtube>
            <Youtube id='0ZRuRS3m1FA'></Youtube>
        </Container>
    </Page>
);

export default Videos;
