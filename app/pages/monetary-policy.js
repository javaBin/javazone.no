import header from '../assets/speakers.jpg';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Column, ColumnHeading, P } from '../components/textblock';
import { Dl, Dt, Dd } from '../components/definition-list';
import { List, ListItem } from '../components/list';
import application from '../assets/refund-application.txt';

export default () => (
    <Page name='monetary-policy'>
        <PageHeading background={header}>JavaZone Monetary Policy</PageHeading>

        <Container>
            <Block>
                <Column justify={true}>
                    <P>
                        The organizer of JavaZone is javaBin (the Norwegian Java
                        User Group), an independent, non-profit organization. Its
                        objective is to promote Java expertise among its members,
                        their companies and in the market. javaBin is based in Oslo,
                        with local groups in Sørlandet, Stavanger, Vestfold,
                        Bergen and Trondheim. JavaZone is based on voluntary work.
                    </P>
                    <P>
                        JavaZone offers a partner program, which differs from more
                        traditional sponsorships. JavaZone’s partners are able to
                        make suggestions for content, but are unable to influence
                        the Program Committee’s work. In other words partners are
                        not allowed to buy speaker slots or influence the selection
                        of talks.
                    </P>
                </Column>
                <Column justify={true}>
                    <P>
                        As a result of this independence, we have limited resources
                        when it comes to covering costs for our speakers but we
                        attempt to cover costs for speakers that require financial
                        support. In the case of the conference ending in positive
                        figures, we assure you that the money will be pushed back
                        to the Java community.
                    </P>
                    <P>
                        There are cases where we may cover travel and accommodation
                        costs, or parts of these for some speakers. We wish to be
                        100% transparent regarding our monetary policy. Also we
                        want to be sure that all speakers receive the same
                        information.
                    </P>
                </Column>
            </Block>

            <Block>
                <Column>
                    <ColumnHeading>Frequently asked questions</ColumnHeading>
                    <Dl>
                        <Dt>Refundable items</Dt>
                        <Dd>
                            Speakers can apply for refunds on the hotel you live in
                            during the conference, and for travel costs. Please
                            note that under no circumstances do we pay anyone to
                            speak.
                        </Dd>
                        <Dt>Approval for refunds</Dt>
                        <Dd>
                            All costs must be approved by e-mail from
                            javazone@java.no. We prefer that you find reasonably
                            priced airlines and hotels.
                        </Dd>
                        <Dt>No up-front refunds</Dt>
                        <Dd>
                            Refunds are made after the conference, given the
                            approval. Unfortunately, we do not have the capacity
                            to provide a refund up-front.
                        </Dd>
                        <Dt>Time to refund</Dt>
                        <Dd>
                            Our goal is that all refunds are completed within two
                            weeks after the conference, given that we have received
                            the proper details. If you have any further questions,
                            please don’t hesitate to contact us on javazone@java.no.
                        </Dd>
                    </Dl>
                </Column>
            </Block>
            <Block>
                <Column>
                    <ColumnHeading>How we handle reimbursements</ColumnHeading>
                    <P>
                        Before the conference, you have to apply for reimbursements
                    </P>
                    <List>
                        <ListItem>Copy the <a href={application}>refund application</a></ListItem>
                        <ListItem>Fill in the details</ListItem>
                        <ListItem>Send in your application by email, to <a href='mailto:javazone@java.no'>javazone@java.no</a></ListItem>
                    </List>
                </Column>
                <Column>
                    <ColumnHeading>&nbsp;</ColumnHeading>
                    <P>
                        After the conference, send an invoice to javazone@java.no including the following bank information
                    </P>
                    <List>
                        <ListItem>The name of your bank</ListItem>
                        <ListItem>Your IBAN account number</ListItem>
                        <ListItem>The BIC/Swift code</ListItem>
                    </List>
                </Column>
            </Block>

            <Block>
                <Column center={true}>
                    <P>
                        We hope you agree with the spirit of our monetary policy,
                        and hope to see you as a speaker at JavaZone 2015!
                    </P>
                    <P>
                        Best regards,<br />
                        the JavaZone Organizers
                    </P>
                </Column>
            </Block>
        </Container>
    </Page>
);
