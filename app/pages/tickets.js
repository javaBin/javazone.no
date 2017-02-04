import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import Timeline from '../components/timeline';
import Youtube from '../components/youtube';

const Tickets = () => (
    <Page name='tickets'>
        <Heading>
            <LargeHeading>JavaZone 2017</LargeHeading>
            <SmallHeading>Get your tickets today</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='cL57Ho55xpo'></Youtube>
        </Container>
        <Container>

            <CBlock fullWidth={true} className='partners__price-container'>
                <CHeader>Early Bird JavaZone ticket</CHeader>
                <CContent>
                    <div className="partners__mainprice">NOK 5.890,-</div>
                    <P>
                        Get your JavaZone ticket now. It includes full access to the conference, <br />
                        including access to workshops on Tuesday (limited seating: first come, first served).<br />
                        The price also includes a 1 year membership in javaBin, the Norwegian Java User Group<br />
                        <em className="partners__latebirdprice">After April XXst, the ticket price increases to 6.490,-</em><br />
                        <span className="partners__vat">prices ex VAT</span>
                    </P>
                    <P>
                        <Link className='button button--transparent' href='https://www.eventbrite.com/e/javazone-2017-tickets-29971845597'>Buy your JavaZone 2017 ticket now</Link>
                    </P>
                </CContent>
            </CBlock>

            <Block>
                <Header>Working for one of our partners?</Header>
                <Content>
                    <P>
                        Partners can buy tickets at reduced prices until July 1st. Read more about partnerships of JavaZone and contact us at partner@java.no to buy tickets.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>Need more than one ticket?</Header>
                <Content>
                    <P>
                        Multiple tickets can be bought at the same time. You can then assign the tickets to the participants via email.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>Need an invoice?</Header>
                <Content>
                    <P>
                        Paying by invoice can be accommodated if needed (contact javazone@java.no), but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even though paying with credit card.
                    </P>
                </Content>
            </Block>

            <CBlock>
                <CHeader>The javaBin membership included in the ticket</CHeader>
                <CContent>
                    <P>
                    <br />
                        JavaZone is organized for and by the community. Your ticket includes a membership in javaBin, giving you access to all the javaBin community events and voting rights for a full year after buying the ticket.
                    </P>
                    <P>
                        Previously we used to sell tickets and memberships separatly, but you saved a total of 500 NOK by buying both. It seemed silly to force you through two separate web shops to collect this rebate, so we combined the two and thereby made the tickets cheaper to everyone. If you still would like to pay extra as before, let us know! ;-)
                    </P>
                </CContent>
            </CBlock>
        </Container>
    </Page>
);

export default Tickets;
