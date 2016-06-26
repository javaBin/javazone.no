import { Link } from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { Dl, Dt, Dd } from '../components/definition-list';

import header from '../assets/academy.jpg';

export default () => (
    <Page>
        <PageHeading background={header}>
            JavaZone Academy
        </PageHeading>
        <Container>
            <Block block={true}>
                <BlockHeading center={true}>A free taste of JavaZone for IT-students</BlockHeading>
                <Columns>
                    <Column justify={true}>
                        <P>
                            Are you a student? Interested in IT? Come join us for JavaZone Academy.
                            JavaZone Academy is a free event for students in Norway which takes place during the second day of the conference.
                            We invite you to take part in the JavaZone experience in Oslo Spektrum for a full day.
                        </P>
                    </Column>
                    <Column justify={true}>
                        <P>
                            You will get a free ticket which gives you access to <a href="/info">the full conference experience</a> on Thursday, September 8th.
                            You will be able to attend <a href="/program">all the talks</a>, mingle in the expo area, talk to <a href="/partners">our partners</a>, taste our great food,
                            and all in all have a great time learning new stuff.
                        </P>
                    </Column>
                </Columns>
            </Block>

            <Block block={true}>
                <BlockHeading center={true}>Practicalities</BlockHeading>
                <Columns>
                    <Column justify={true}>
                        <Dl>
                            <Dt>Program and speakers</Dt>
                            <Dd>
                                As you will get a full JavaZone ticket for Thursday, you can just check out our <a href="/program">regular program</a> for info about the talks.
                                The detailed program that specify which talks will be on Thursday will be published in August.
                            </Dd>
                            <Dt>What does it cost?</Dt>
                            <Dd>
                                Well, we're happy to say that there <i>is</i> such a thing as a free lunch! JavaZone Academy is 100% free.
                                You get the ticket, the talks, the food and everything from us for free. Should you need to travel to be able to attend,
                                that's on you. :)
                            </Dd>
                        </Dl>
                    </Column>
                    <Column justify={true}>
                        <Dl>
                            <Dt>How to register?</Dt>
                            <Dd>
                                The registration for JavaZone Academy will open in August. Sign up for our <a href="http://eepurl.com/bxvsEn">student mailing list</a> to
                                be notified when the registration opens.
                            </Dd>
                            <Dt>Do you do other things for students?</Dt>
                            <Dd>
                                Yes, we do! We usually do the JavaZone Academy event twice a year. In September, it's at the main conference, and in the spring time
                                we come to your town to do it. More info will come. You could also <a href="/frivillig">become a volunteer</a> at the conference.
                            </Dd>
                        </Dl>
                    </Column>
                </Columns>
            </Block>
        </Container>
    </Page>
);
