//@flow
import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import Page from '../../components/Page/Page';
import { Section } from '../../components/Section/Section';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Block, Header, Content, SubHeader, P} from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import Timeline from '../../components/timeline';
import Youtube from '../../components/youtube';
import tickets1 from '../../assets/tickets_1.jpg';
import tickets2 from '../../assets/tickets_2.jpg';
import './Tickets.less';

type TicketsProps = {
}

function Tickets(props: TicketsProps) {
    return (
        <Page name='tickets'>
            <PageHeader subHeader="Come join us in Oslo, September 13-14th">Tickets to JavaZone 2018</PageHeader>
        </Page>
    )
}

export default Tickets;