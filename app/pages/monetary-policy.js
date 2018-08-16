import React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Content, SubHeader, P} from '../components/block';
import { CLeftBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import { Section } from '../components/Section/Section';
import { CenterBlock, LeftBlock, ImageBlock  } from '../components/Block/Block';
import { Header } from '../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../components/Button/Button';
import Page from '../components/Page/Page';
import PageHeader from '../components/PageHeader/PageHeader';
import Youtube from '../components/youtube';
import partners from '../data/partners';
import partners1 from '../assets/partners_1.jpg';
import partners2 from '../assets/partners_2.jpg';
import partners3 from '../assets/partners_3.jpg';

type MonetaryPolicyProps = {
}

function MonetaryPolicy(props: MonetaryPolicyProps) {
    return (
        <Page name='monetary-policy'>
            <PageHeader subHeader="Refunds for speakers">Reimbursement Policy</PageHeader>

            <Section>
                <LeftBlock header="What & How">
                        <p>
                            If your presentation or a workshop is accepted, you may
                            apply for a refund for travel and accomodation. Read
                            below to find out if you are eligeble.
                        </p>
                </LeftBlock>
                <LeftBlock header="How to apply">
                        <p>
                            The first thing to note is that you need to <em>apply </em>
                            for reminbursement of costs. This is necessary for our budget planning. If you require
                            financial support, please reach out
                            to <a href='mailto:refund@java.no'>refund@java.no</a> after
                            your session or workshop was accepted.
                        </p>
                        <p>
                            In this mail, provide an estimate of your travel expenses
                            and the days you will be visiting Oslo during the conference.
                        </p>
                        <p>
                            Note that we refund a maximum of 1500 NOK a night for accomodation
                            costs <strong>during</strong> the conference. We do not refund travel costs
                            above the cost of a reasonably priced economy ticket.
                        </p>
                </LeftBlock>
                <LeftBlock header="Confirmation & reimbursement">
                        <p>
                            Applications <strong><em>must</em></strong> be confirmed explicitly
                            via <a href='mailto:refund@java.no'>refund@java.no</a> and are
                            only accepted prior to our conference. Reimbursements are
                            provided after the conference. For this, we require you
                            to send us copies of all receipts, the name of your bank
                            and international account numbers (IBAN, BIC/SWIFT, if
                            available). We reserve the right to decline a refund
                            application. Speakers living in proximity to Oslo are
                            not eligible.
                        </p>
                        <p>
                            Reimbursements are processed and payed after the conference. We will
                            reach out to speakers who applied for reimbursement and process
                            the payments once payment details are provided.
                        </p>
                </LeftBlock>
            </Section>
        </Page>
    )
}

export default MonetaryPolicy;
