import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import partners1 from '../../assets/partners_1.jpg';
import partners2 from '../../assets/partners_2.jpg';
import partners3 from '../../assets/partners_3.jpg';
import { CenterBlock, ImageBlock, LeftBlock } from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import { Header, SubHeader } from '../../components/Header/Header';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { Link } from '../../components/link';
import Youtube from '../../components/youtube';
import partners from '../../data/partners';
import './Partners.less';

function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../../assets/partners-18', false, /\.svg$/);
const images = imagesContext.keys().map(image => (
    {context: imagesContext(image), filename: image}
));

function getimage(images, image) {
    return images.find(img => img.filename.indexOf(image) >= 0);
}

type PartnerListProps = {
    partners: []
}

function PartnerList(props: PartnerListProps) {
    const shuffled = shuffle(props.partners);
    return (
        <Grid fluid>
            <Row className="partners-list-container">
                {shuffled.map((partner) => {
                    return (
                        <Col key={partner.name}>
                            <Link href={partner.url} className="partners-list-item">
                                <img className="partner-logo" src={getimage(images, partner.logo).context} alt={partner.name}/>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Grid>    
    );
}

function Partners() {
    return (
        <Page name='partners'>
            <PageHeader subHeader="Join us in 2018">Dear Javazone Partners</PageHeader>

            <Section>
                <LeftBlock header="JavaZone 2018: Bigger and better than ever">
                    <p>
                        JavaZone started out in 2002 as a small conference for Java developers but has since then evolved
                        to become one of the largest developer conferences in the world. Each year thousands of people gather
                        in Oslo Spektrum for three full days of learning, mingling, and fun!
                    </p>
                </LeftBlock>
                <LeftBlock header="Last two years: Completely. Sold. Out.">
                    <p>
                        We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together.
                        In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018!
                        JavaZone’s Expo Area is a vibrant, busy space full of life and activity.
                    </p>
                    <p>
                        As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere.
                        We work closely with our Partners to help them realize their ideas and make the most out of their stands.
                        Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                    </p>
                </LeftBlock>
                <LeftBlock header="Our philosophy: Partners, not sponsors">
                    <p>
                        We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together.
                        In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018!
                        JavaZone’s Expo Area is a vibrant, busy space full of life and activity.
                    </p>
                    <p>
                        As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere.
                        We work closely with our Partners to help them realize their ideas and make the most out of their stands.
                        Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                    </p>
                </LeftBlock>
            </Section>
            <Section alternate pixel>
                <Header align='center'>Partners</Header>
                <PartnerList partners={partners} />
            </Section>
            <Section fluid>
                <ImageBlock image={partners2} alt="JavaZone Expo" />
            </Section>
            <Section>
                <CenterBlock header="The Expo Area">
                    <p>
                        All our partner stands are traditionally located in the Expo Area, which is centrally located in the venue.
                        During each break, the Expo is full of attendees. This is partly because we serve food continuously from
                        restaurant stands throughout the day, and partly because of you – our Partners – make this area one of
                        the liveliest Expo Areas of any conference.
                    </p>
                    <SubHeader>People! People everywhere!</SubHeader>
                    <p>
                        Don‘t you believe us? Have a look for yourself! Our new Partners are always surprised by the
                        huge attention their stands receive in the Expo Area. We have put together a short 15-second
                        timelapse from 2 hours of Expo time, showing both the flow of people during talks and in the breaks between talks.
                        Yes, you get exposure to that many people, for a total of 20 hours!
                    </p>
                </CenterBlock>
            </Section>
            <Section>
                <Youtube id='IVLtxmuzfl4'></Youtube>
            </Section>
            <Section dark>
                <LeftBlock header="Partner options">
                    <p>
                        Even though all Partners are considered equal, there are
                        a few options to choose from. There is a base package that
                        everyone gets, and then there are a few available expansions. 
                        Notice that these expansions have a limited availability.
                    </p>
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
                            <span className='partners__stand-option partners__stand-option'>Double Stand Space</span>
                        </dt>
                        <dd className='definition-list__data'>
                            Double your stand space and get 12 square meters instead of 6. This gives you a bigger wall for your message and more floor space for your activities.
                        </dd>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand-option'>Restaurant Stand</span>
                        </dt>
                        <dd className='definition-list__data'>
                            We have the capacity for a total of 8 restaurant stands in the Expo Area. The theme and menu are decided by you in collaboration with our food provider.
                            If you have a restaurant stand, you can also opt in for extra food servings and exposure during the evening party.
                        </dd>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand'>Concept Stand</span>
                        </dt>
                        <dd className='definition-list__data'>
                            We also have room for 3 extra large ‘Concept‘ stands. These stands have about 70 square meters floor space and have room for a 4-meter tall wall behind it. This is your choice if you want to be really creative.
                        </dd>
                    </dl>
                </LeftBlock>
            </Section>
            <Section fluid>
                <ImageBlock image={partners1} alt="JavaZone Expo" />
            </Section>
            <Section alternate pixel>
                <Header align="center">Partnership Prices</Header>
                <SubHeader align="center">[And we're sold out!]</SubHeader>
                <CenterBlock>
                    <div className="partner-prices-main sold-out-text">NOK 69.000,-</div>
                    <p>
                        <em>
                            Note that all 50 partnerships for JavaZone 2017 were sold out long before the conference.
                        </em>
                        <br />
                        <em>
                            The same happened this year – we are sold out. Again. 
                        </em>
                        <br />
                        <em>
                            Please, feel free to contact us
                            if you would like to be put on the waiting list or the contact list for the next year.
                        </em>
                        <br />
                        <em>
                            All existing partners are still able to get the conference tickets for a special, reduced price.
                        </em>
                    </p>
                    <p>
                        All partnerships have a base price for entry which gives you everything described above.<br />
                        We also have some add ons, as well as tickets for your employees, priced below.<br />
                        <em className="partner-prices-emph">After March 1st, the base price increases to NOK 84.000,-</em><br />
                        <span className="partner-prices-vat">(prices ex VAT)</span>
                    </p>
                </CenterBlock>
                <LeftBlock alternate header="Partnership Stand">
                    <div className='partners-table-section'>
                        <table className='table sold-out-text-table'>
                            <tbody>
                                <tr className='table-row'>
                                    <td className='partners-desc-column'>Extra Stand Space</td>
                                    <td className='partners-price-column'>NOK 38.000,-</td>
                                </tr>
                                <tr className='table-row'>
                                    <td className='partners-desc-column'>Restaurant Stand</td>
                                    <td className='partners-price-column'>NOK 63.000,-</td>
                                </tr>
                                <tr className='table-row'>
                                    <td className='partners-desc-column'>Restaurant Stand (Evening)</td>
                                    <td className='partners-price-column'>NOK 20.000,-</td>
                                </tr>
                                <tr className='table-row'>
                                    <td className='partners-desc-column'>Concept Stand</td>
                                    <td className='partners-price-column'>NOK 55.000,-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </LeftBlock>
                <LeftBlock alternate header="Partnership Ticket">
                    <div className='partners-table-section'>
                        <table className='table'>
                            <tbody>
                                <tr className='table__row'>
                                    <td className='partners-desc-column'>Tickets for employees (Late-Bird)</td>
                                    <td className='partners-price-column'>NOK 6.190,-</td>
                                </tr>
                                <tr className='table__row sold-out-text-table'>
                                    <td className='partners-desc-column'>Tickets for employees (0 - 30)</td>
                                    <td className='partners-price-column'>NOK 5.590,-</td>
                                </tr>
                                <tr className='table__row sold-out-text-table'>
                                    <td className='partners-desc-column'>Tickets for employees (31 - 50)</td>
                                    <td className='partners-price-column'>NOK 5.390,-</td>
                                </tr>
                                <tr className='table__row sold-out-text-table'>
                                    <td className='partners-desc-column'>Tickets for employees (51 - ∞)</td>
                                    <td className='partners-price-column'>NOK 5.190,-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </LeftBlock>
            </Section>
            <Section fluid>
                <ImageBlock image={partners3} alt="JavaZone Expo" />
            </Section>
            <Section>
                <CenterBlock header="Contact Us">
                    <p>
                        You can contact us about partnership details at <a href='mailto:partner@java.no'>partner@java.no</a>.
                    </p>
                </CenterBlock>
                <CenterBlock>
                    <Button link='/partnermote-april'>Slides from last partner meeting (in Norwegian)</Button>
	            </CenterBlock>
            </Section>
        </Page>
    )
}

export default Partners;