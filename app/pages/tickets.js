import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import Timeline from '../components/timeline';

const Tickets = () => (
    <Page name='tickets'>
        <Heading>
            <LargeHeading>JavaZone Tickets</LargeHeading>
        </Heading>
        <Container>
            <Block>
                <Header>Block header</Header>
                <Content>
                    <P>
                        Block Content
                    </P>
                </Content>
            </Block>

            <CBlock>
                <CHeader>Centered block header</CHeader>
                <CContent>
                    <P>
                        Centered block content
                    </P>
                </CContent>
            </CBlock>
        </Container>
    </Page>
);

export default Tickets;
