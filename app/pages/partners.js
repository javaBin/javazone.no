import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
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
                <Header>What exactly is this JavaZone thing?</Header>
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

            <Block>
                <Header>Partner Options</Header>
                <Content>
                    <P>
                        Even though all partners are considered equal, there are
                        a few options to consider. There is a base package that
                        everyone gets, and then there are a few, limited expansions.
                    </P>

                    <SubHeader>Included in all partnerships</SubHeader>

                    <ul className='list'>
                        <li className='list__item'>
                            A stand in the Expo Area (6 square meters)
                        </li>
                        <li className='list__item'>
                            4 flexible, nameless expo tickets for the stand crew
                        </li>
                        <li className='list__item'>
                            Discounted participant tickets for your employees
                        </li>
                        <li className='list__item'>
                            Branding on <a href='http://javazone.no'>javazone.no</a>,
                            at the venue, the program, and other promotional material
                            JavaZone produces
                        </li>
                    </ul>

                    <SubHeader>Possible expansions</SubHeader>

                    <dl className='definition-list'>
                        <dt className='definition-list__term'>
                            Extra Stand Space
                        </dt>
                        <dd className='definition-list__data'>
                            Double you stand space and get 12 square meters instead of 6.
                        </dd>
                        <dt className='definition-list__term'>
                            Restaurant Stand
                        </dt>
                        <dd className='definition-list__data'>
                            We have room for a total of 8 restaurant stands in the Expo Area. The theme and menu is decided by you in collaboration with our food provider.
                        </dd>
                        <dt className='definition-list__term'>
                            Concept Stand
                        </dt>
                        <dd className='definition-list__data'>
                            We also have room for 3 extra large stands. These stands are about 70 square feet big, and have room for a 4 meter tall wall behind it. This is your choice if you want to be really creative.
                        </dd>
                    </dl>
                </Content>
            </Block>


            <CBlock fullWidth={true} className='partners__price-container'>
                <CHeader>Prices</CHeader>
                <CContent>
                    <P>
                        Price for regular stand is xxx,-. If you’re late, it’s xxx,-.
                    </P>
                    <div className='partners__prices'>
                        <div className='partners__stand-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row'>
                                        <td className='table__data'>Extra Stand Space</td>
                                        <td className='table__data'>xxx,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Restaurant Stand</td>
                                        <td className='table__data'>xxx,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Concept Stand</td>
                                        <td className='table__data'>xxx,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='partners__ticket-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (0 - 30)</td>
                                        <td className='table__data'>xxx,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (31 - 50)</td>
                                        <td className='table__data'>xxx,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (51 - ∞)</td>
                                        <td className='table__data'>xxx,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CContent>
            </CBlock>

            <Block>
                <Header>Contact Us</Header>
                <Content>
                    <P>
                        JavaZone 2017 will be held in September, but please get in
                        touch sooner rather than later. Even though all stand
                        positions at JavaZone give you a great opportunity,
                        some of the extra options will sell out early.
                        Contact us at <a href='mailto:contact@java.no'>contact@java.no</a>
                        today, and we’ll work with you to create the best possible
                        partnership for you.
                    </P>
                </Content>
            </Block>
        </Container>

    </Page>
);

export default Partners;
