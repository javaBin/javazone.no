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
                Pitch stuff
            </Pitch>
            <Youtube id='CStaLR0ipxY'></Youtube>
        </Container>
    </Page>
);

export default Videos;
