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

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript#6274381
function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../assets/partner-logos', false, /\.png$/);
const images = imagesContext.keys().map(image => (
    {context: imagesContext(image), filename: image}
));

function getimage(images, image) {
    return images.find(img => img.filename.indexOf(image) >= 0);
}

const signedPartners = shuffle(partners).map(partner => (
    {name: partner.name, logo: getimage(images, partner.logo), url: partner.url}
));

const Partner = ({name, logo, url}) => (
    <li className='partners__logo'>
        <a className='partners__logo-link' href={url} target='_blank'>
            <img src={logo.context} className='partners__logo-image' alt={name} />
        </a>
    </li>
);

const Partners = () => (
    <Page name='videos'>
        <Heading>
            <LargeHeading>Dear JavaZone Partners</LargeHeading>
            <SmallHeading>Join us in 2017</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='cL57Ho55xpo'></Youtube>
        </Container>
        <Container>
            <Block>
                <Header><span className="green">JavaZone 2017:<br />bigger and better than ever</span></Header>
                <Content>
                    <P>
                        JavaZone started out in 2002 as a small conference for Java developers, but has since then evolved
                        to become one of the largest developer conferences in the world. Each year thousands of people gather
                        in Oslo Spektrum for three full days of learning, mingling and fun.
                    </P>

                    <SubHeader>Last year: Completely. Sold. Out.</SubHeader>

                    <P>
                        Last year, a record breaking 3000 people attended JavaZone.
                        We were completely sold out of tickets AND partner stands.
                        This was a first for us, but based on feedback we have a feeling that we
                        might sell out this year as well. So join in early if you
                        want to be part of the conference!
                    </P>
                </Content>
            </Block>

            <CBlock fullWidth={true}>
                <CHeader>Partners of JavaZone 2016</CHeader>
                <ul className='partners__logos'>
                    {signedPartners.map((partner, kp) => (<Partner key={kp} {...partner} />))}
                </ul>
            </CBlock>

            <Block>
                <Header><span className="orange">Our philosophy:<br />partners, not sponsors</span></Header>

                <Content>
                    <P>
                        We want JavaZone‘s Expo Area to be an attractive space where partners and participants can hang out and spend time together.
                        In previous years our partners have done a fantastic job to help us achieve this, and we want to keep this tradition alive.
                        JavaZone’s Expo Area is a vibrant, busy space full of life and activity.
                        As a partner you are not just supporting our conference economically. You participate during the event and help create the unique atmosphere.
                        Please share with us your ideas for making the most out of your partner space.
                        Don’t be shy, almost anything is possible!
                    </P>
                </Content>
            </Block>

            <img className='partners__image' src={partners2} />

            <Block>
                <Header><span className="blue">The Expo Area</span></Header>
                <Content>
                    <P>
                        All our partner stands are located in the Expo Area, which is centrally located in the venue.
                        During each break the Expo is full of attendees. This is partly because we serve food continously from
                        restaurant stands throughout the day, and partly because you – our partners – make this area one of
                        the liveliest Expo Areas of any conference.
                    </P>

                    <SubHeader>People! People everywhere!</SubHeader>

                    <P>
                        Don't you belive us? Have a look for yourself! Our new partners are always surprised by the
                        huge attention their stands recieve in the Expo Area. We have put together a short 15-second
                        timelapse from 2 hours of Expo time, showing both the crowd in the breaks between talks and during talks.
                        Yes, you get exposure to that many people, for a total of 20 hours!
                    </P>

                    <P>
                        <Link className='button button--transparent' href='/expo'>See blueprints of the JavaZone 2017 Expo Area</Link>
                    </P>

                </Content>
            </Block>

            <Container>
                <Youtube id='IVLtxmuzfl4'></Youtube>
            </Container>

            <Block>
                <Header><span className="pink">Partner Options</span></Header>
                <Content>
                    <P>
                        Even though all partners are considered equal, there are
                        a few options to choose from. There is a base package that
                        everyone gets, and then there are a few availiable expansions, with limited supply.
                    </P>

                    <SubHeader>Included in all partnerships</SubHeader>

                    <ul className='list'>
                        <li className='list__item'>
                            A stand in the Expo Area (6 square meters).
                        </li>
                        <li className='list__item'>
                            4 flexible, nameless expo tickets for the stand crew.
                        </li>
                        <li className='list__item'>
                            Discounted participant tickets for your employees.
                        </li>
                        <li className='list__item'>
                            Branding on <a href='http://javazone.no'>javazone.no</a>,
                            at the venue, the program, and in other promotional material that
                            JavaZone produces.
                        </li>
                    </ul>

                    <SubHeader>Possible expansions</SubHeader>

                    <dl className='definition-list'>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand-option--sold-out'>Double Stand Space</span> (SOLD OUT!)
                        </dt>
                        <dd className='definition-list__data'>
                            Double your stand space and get 12 square meters instead of 6. This gives you a bigger wall for your message, and more floor space for your activities.
                        </dd>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand-option--sold-out'>Restaurant Stand</span> (SOLD OUT!)
                        </dt>
                        <dd className='definition-list__data'>
                            We have capacity for a total of 8 restaurant stands in the Expo Area. The theme and menu is decided by you in collaboration with our food provider.
                            If you have a restaurant stand, you can also opt in for extra food servings and exposure during the evening party.
                        </dd>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand-option--sold-out'>Concept Stand</span> (SOLD OUT!)
                        </dt>
                        <dd className='definition-list__data'>
                            We also have room for 2 extra large stands. These stands have about 70 square meters floor space, and have room for a 4 meter tall wall behind it. This is your choice if you want to be really creative.
                        </dd>
                    </dl>
                </Content>
            </Block>

            <img className='partners__image' src={partners1} />

            <CBlock fullWidth={true} className='partners__price-container'>
                <CHeader><span className="green">Partnership Prices</span></CHeader>
                <CContent>
                    <div className="partners__mainprice partners__stand-option--sold-out">NOK 67.000,-</div>
                    <em className="pink">All 45 partnerships for JavaZone 2017 are sold out</em>
                    <P>
                        All partnerships have a base price for entry which gives you everything described above.<br />
                        We also have some addons, as well as tickets for your employees, priced below.<br />
                        <em className="partners__latebirdprice">After March 1st, the base price increases to NOK 82.000,-</em><br />
                        <span className="partners__vat">all prices ex VAT</span>
                    </P>
                    <div className='partners__prices'>
                        <div className='partners__stand-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row partners__stand-option partners__stand-option--sold-out'>
                                        <td className='table__data'>Extra Stand Space</td>
                                        <td className='table__data'>NOK 30.000,-</td>
                                    </tr>
                                    <tr className='table__row partners__stand-option partners__stand-option--sold-out'>
                                        <td className='table__data'>Restaurant Stand</td>
                                        <td className='table__data'>NOK 62.000,-</td>
                                    </tr>
                                    <tr className='table__row partners__stand-option partners__stand-option--sold-out'>
                                        <td className='table__data'>Restaurant Stand (Evening)</td>
                                        <td className='table__data'>NOK 20.000,-</td>
                                    </tr>
                                    <tr className='table__row partners__stand-option partners__stand-option--sold-out'>
                                        <td className='table__data'>Concept Stand</td>
                                        <td className='table__data'>NOK 47.000,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='partners__ticket-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (0 - 30)</td>
                                        <td className='table__data'>NOK 5.490,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (31 - 50)</td>
                                        <td className='table__data'>NOK 5.290,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (51 - ∞)</td>
                                        <td className='table__data'>NOK 5.090,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (Late-Bird)</td>
                                        <td className='table__data'>NOK 5.990,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CContent>
            </CBlock>

            <img className='partners__image' src={partners3} />

            <Block>
                <Header><span className="blue">Contact us</span></Header>
                <Content>
                    <P>
                        You can contact us about partnership details at <a href='mailto:partner@java.no'>partner@java.no</a>.
                        Even though partnerships for 2017 are sold out, we could discuss a possible partnership for 2018.
                    </P>
                </Content>
            </Block>

            <CBlock>
                <CContent>
                    <P>
                        <Link className='button button--transparent' href='/partnermote-desember'>Slides from last partner meeting (in Norwegian)</Link>
                    </P>
                </CContent>
            </CBlock>
        </Container>

    </Page>
);

export default Partners;
