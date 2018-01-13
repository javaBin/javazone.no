//@flow
import * as React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
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
            <Heading>
                <LargeHeading>Tickets to JavaZone 2017</LargeHeading>
                <SmallHeading>Come join us in Oslo, September 13-14th</SmallHeading>
            </Heading>
            <Container>

                <CBlock fullWidth={true} className='partners__price-container'>
                    <CHeader><span className='pink'>We are completely sold out of the JavaZone 2017 tickets</span></CHeader>
                    <CContent>
                        <div className="partners__mainprice strikethrough">NOK 6.490,-</div>
                        <P>
                            The JavaZone Ticket includes full access to the conference <br />
                            and entry to workshops on Tuesday (limited seating: first come, first served).<br />
                            The price also includes a 1 year membership in javaBin, the Norwegian Java User Group<br />
                            <span className="partners__vat">prices ex VAT</span>
                        </P>
                    </CContent>
                    <CHeader><span className='green'>Waiting list</span></CHeader>
                    <CContent>
                        <P>
                            <br />You can sign up for our ticket waiting list, <br />and we'll contact you should any tickets become available.
                            <br /><br />
                            <a className='button button--transparent' href="https://goo.gl/forms/kel6213ZvCozTBSr2">Enter the Ticket Waiting List</a>
                        </P>
                    </CContent>
                </CBlock>
            </Container>
            <Container>
                <Youtube id='OKZcwxcw85o'></Youtube>
            </Container>
            <Container>

                <Block>
                    <Header><span className='blue'>Working for one of our partners?</span></Header>
                    <Content>
                        <P>
                            All partners of JavaZone get reduced prices on tickets. Partners can buy tickets at a reduced price until July 1st. The main partner contact person can order tickets by using this <a href="https://goo.gl/forms/1vJi5DrpBO279Gyl2">invoice request form</a>. Read more about <Link href='/partners'>JavaZone partnership</Link> here.
                        </P>
                    </Content>
                </Block>

                <Block>
                    <Header><span className='pink'>Need more than one ticket?</span></Header>
                    <Content>
                        <P>
                            Multiple tickets can be bought at the same time. You can then assign the tickets to the participants via email. Just use our regular webshop and specify the number of tickets you require when buying.
                        </P>
                    </Content>
                </Block>

                <Block>
                    <Header><span className='orange'>Need an invoice?</span></Header>
                    <Content>
                        <P>
                            Paying by invoice can be accommodated if required, but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even when paying with credit card.
                            <br />
                            <span className='strikethrough'>Request your invoice here: <a href="https://goo.gl/forms/1vJi5DrpBO279Gyl2">Invoice request form</a></span>.
                            <br />
                            Tickets are sold out...
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
                            JavaZone is organized for and by the community. Your ticket includes a membership to javaBin, giving you access to all the javaBin community events and voting rights for a full year after buying the ticket.
                        </P>
                        <P>
                            Previously we used to sell tickets and memberships separately, but you saved a total of 500 NOK by buying both. It seemed silly to force you through two separate web shops to collect this discount, so we combined the two and thereby made the tickets cheaper for everyone. If you still would like to pay extra as before, let us know! ;-)
                        </P>
                    </CContent>
                </CBlock>

                <img className='partners__image' src={tickets2} />

                <CBlock>
                    <CHeader><span className='blue'>Need more info about JavaZone?</span></CHeader>
                    <CContent>
                        <P>
                            <br />
                            We'll release more information about the conference before the summer, and the detailed program with information about all the talks will be ready in July. Until then, have a look at the video on top and <a href="http://2016.javazone.no">the 2016 website</a> to get a feel for how awesome JavaZone is!
                        </P>
                        <P>
                            Don't wait too long buying your ticket though – last year we completely sold out all of the 3.000 tickets, and we expect a decent amout of interest this year as well.
                        </P>
                    </CContent>
                </CBlock>
            </Container>
        </Page>
    )
}

export default Tickets;