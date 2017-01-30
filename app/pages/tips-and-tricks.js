import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';
import { Link } from '../components/link';
import partners from '../data/partners';
import partners1 from '../assets/partners_1.jpg';
import partners2 from '../assets/partners_2.jpg';
import partners3 from '../assets/partners_3.jpg';

const TipsAndTricks = () => (
    <Page name='monetary-policy'>
        <Heading>
            <LargeHeading>Advice for you CfS</LargeHeading>
        </Heading>
    </Page>
);

export default TipsAndTricks;
