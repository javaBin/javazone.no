import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import nova from '../assets/academy/nova.jpg';

const Speakers = () => (
    <Page name='speakers'>
        <Heading>
            <LargeHeading>Call for Speakers</LargeHeading>
            <SmallHeading>Yeah</SmallHeading>
        </Heading>
    </Page>
);

export default Speakers;
