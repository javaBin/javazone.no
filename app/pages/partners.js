import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import Youtube from '../components/youtube';
import { Link } from '../components/link';
import partners1 from '../assets/partners_1.jpg';

const Partners = () => (
    <Page name='videos'>
        <Heading>
            <LargeHeading>Dear JavaZone Partners!</LargeHeading>
            <SmallHeading>Join us in 2017!</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='cL57Ho55xpo'></Youtube>
        </Container>
        <Container>
            <Block>
                <Header>What exactly is this JavaZone?</Header>
                <Content>
                    <P>
                        Now, that’s a good question. JavaZone started out as a
                        small conference for Java enthusiasts, but has evolved
                        to become one of the largest developer conferences in
                        Scandinavia. Even though it is mainly centered around
                        the JVM, we welcome quite a lot of other technologies
                        (and soft skills!) as well.
                    </P>

                    <SubHeader>Completely. Sold. Out.</SubHeader>

                    <P>
                        Last year, a record breaking 3000 people attended JavaZone.
                        We also made another record: for the first time ever we
                        were completely sold out on partner stands!
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>Parters, not sponsors!</Header>

                <Content>
                    <P>
                        We want JavaZone‘s expo to be an attraction, and not
                        an unsolicited tribute to our budget planing. In the past,
                        our partners have done a fantastic job to help us with
                        this and we want to keep this tradition alive! JavaZone’s
                        expo is always a vibrant, well-visited space full of life
                        and activity. As a partner, you are not only supporting
                        our conference, you participate and help create it.
                        Please challenge us with your ideas for making the most
                        out of your partner space. Don’t be shy, there is little
                        that is impossible.
                    </P>
                </Content>
            </Block>

            <img className='partners__image-one' src={partners1} />
        </Container>

    </Page>
);

export default Partners;
