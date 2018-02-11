//@flow
import * as React from 'react';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { Pitch } from '../../components/page';
import { Block, Header, Content, SubHeader, P } from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import Timeline from '../../components/timeline';
import Youtube from '../../components/youtube';
import speakers1 from '../../assets/speakers_1.jpg';
import speakers2 from '../../assets/speakers_2.jpg';
import speakers3 from '../../assets/speakers_3.jpg';
import './Speakers.less';

type SpeakerProps = {
}

function Speakers(props: SpeakerProps) {
    return (
        <Page name='speakers'>
            <PageHeader subHeader="Speak at JavaZone 2018">Call for speakers</PageHeader>
        </Page>
    )
}

export default Speakers;