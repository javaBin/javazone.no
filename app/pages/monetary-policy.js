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

const MonetaryPolicy = () => (
    <Page name='monetary-policy'>
        <Heading>
            <LargeHeading>Reimbursement Policy</LargeHeading>
            <SmallHeading>Refunds for speakers</SmallHeading>
        </Heading>

        <Container>
            <Block>
                <Header><span className="blue">What & How</span></Header>
                <Content>
                    <P>
                        If your presentation or a workshop is accepted, you may
                        apply for a refund for travel and accomodation. Read
                        below to find out if you are eligeble.
                    </P>
                </Content>
            </Block>
            <Block>
                <Header><span className="green">How to apply</span></Header>
                <Content>
                    <P>
                        The first thing to note is that you need to <em>apply </em>
                        for reminbursement of costs. This is necessary for our budget planning. If you require
                        financial support, please reach out
                        to <a href='mailto:refund@java.no'>refund@java.no</a> after
                        your session or workshop was accepted.
                    </P>
                    <P>
                        In this mail, provide an estimate of your travel expenses
                        and the days you will be visiting Oslo during the conference.
                    </P>
                    <P>
                        Note that we refund a maximum of 1500 NOK a night for accomodation
                        costs <strong>during</strong> the conference. We do not refund travel costs
                        above the cost of a reasonably priced economy ticket.
                    </P>
                </Content>
            </Block>
            <Block>
                <Header><span className="pink">Confirmation<br />& reimbursement</span></Header>
                <Content>
                    <P>
                        Applications must be confirmed explicitly
                        via <a href='mailto:refund@java.no'>refund@java.no</a> and are
                        only accepted prior to our conference. Reimbursements are
                        provided after the conference. For this, we require you
                        to send us copies of all receipts, the name of your bank
                        and international account numbers (IBAN, BIC/SWIFT, if
                        available). We reserve the right to decline a refund
                        application. Speakers living in proximity to Oslo are
                        not eligible.
                    </P>
                </Content>
            </Block>
        </Container>
    </Page>
);

export default MonetaryPolicy;
