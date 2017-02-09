import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import Timeline from '../components/timeline';
import Youtube from '../components/youtube';
import tickets1 from '../assets/tickets_1.jpg';
import tickets2 from '../assets/tickets_2.jpg';

const Tickets = () => (
    <Page name='tickets'>
        <Heading>
            <LargeHeading>JavaZone 2017</LargeHeading>
            <SmallHeading>September 13-14th</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='OKZcwxcw85o'></Youtube>
        </Container>
        <Container>

            <CBlock fullWidth={true} className='partners__price-container'>
                <CHeader><span className='green'>Early Bird JavaZone ticket</span></CHeader>
                <CContent>
                    <div className="partners__mainprice">NOK 5.890,-</div>
                    <P>
                        Get your JavaZone ticket now. It includes full access to the conference, <br />
                        including access to workshops on Tuesday (limited seating: first come, first served).<br />
                        The price also includes a 1 year membership in javaBin, the Norwegian Java User Group<br />
                        <em className="partners__latebirdprice">After April 1st, the Early Bird ends and the ticket price increases to 6.490,-</em><br />
                        <span className="partners__vat">prices ex VAT</span>
                    </P>
                    <P>
                        <a className='button button--transparent' href='https://www.eventbrite.com/e/javazone-2017-tickets-29971845597'>Buy your JavaZone 2017 ticket now</a>
                    </P>
                </CContent>
            </CBlock>

            <Block>
                <Header><span className='blue'>Working for one of our partners?</span></Header>
                <Content>
                    <P>
                        All partners of JavaZone get reduced prices on tickets. Partners can buy tickets at reduced prices until July 1st. Read more about <Link href='/partners'>partnerships of JavaZone</Link> and contact us at <a href="mailto:partner@java.no">partner@java.no</a> to buy tickets.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header><span className='pink'>Need more than one ticket?</span></Header>
                <Content>
                    <P>
                        Multiple tickets can be bought at the same time. You can then assign the tickets to the participants via email. Just use our regular webshop and specify the number of tickets you need when buying.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header><span className='orange'>Need an invoice?</span></Header>
                <Content>
                    <P>
                        Paying by invoice can be accommodated if needed, but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even though paying with credit card.
                        <br />
                        Request your invoice here: <a href="https://goo.gl/forms/1vJi5DrpBO279Gyl2">Invoice request form</a>.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header><span className='green'>Refund policy</span></Header>
                <Content>
                    <P>
                        If you need a refund on your ticket, send an email with your request to <a href="mailto:javazone@java.no">javazone@java.no</a>.
                        We'll refund the full ticket price minus a small processing fee (to cover credit card fees or invoice fees) for requests submitted before August 1st.
                        Refund requests received after August 1st will only be accepted if javaBin are able to resell the tickets.
                        For tickets bought in bulk (applies to both partner tickets and large regular orders), a maximum of 5 tickets can be refunded under this policy.
                    </P>
                </Content>
            </Block>

            <img className='partners__image' src={tickets1} />

            <CBlock>
                <CHeader><span className='tickets__news green'>New this year:</span>The javaBin membership included in the ticket</CHeader>
                <CContent>
                    <P>
                        <br />
                        JavaZone is organized for and by the community. Your ticket includes a membership in javaBin, giving you access to all the javaBin community events and voting rights for a full year after buying the ticket.
                    </P>
                    <P>
                        Previously we used to sell tickets and memberships separatly, but you saved a total of 500 NOK by buying both. It seemed silly to force you through two separate web shops to collect this discount, so we combined the two and thereby made the tickets cheaper for everyone. If you still would like to pay extra as before, let us know! ;-)
                    </P>
                </CContent>
            </CBlock>

            <img className='partners__image' src={tickets2} />

            <CBlock>
                <CHeader><span className='blue'>Need more info about JavaZone?</span></CHeader>
                <CContent>
                    <P>
                        <br />
                        We'll release more information about the conference before the summer, and the detailed program with information about all the talks will be ready in July. Until then, have a look at the video on top and <a href="http://2016.javazone.no">the 2016 webpages</a> to get a feel of how awesome JavaZone is!
                    </P>
                    <P>
                        Don't wait too long buying your ticket though – last year we completely sold out all the 3.000 tickets, and we expect a decent amout of interest this year as well.
                    </P>
                </CContent>
            </CBlock>
        </Container>
    </Page>
);

export default Tickets;
