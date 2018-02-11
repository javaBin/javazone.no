//@flow
import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import { Block, Header, Content, SubHeader, P} from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import { Section } from '../../components/Section/Section';
import { CenterBlock } from '../../components/Block/Block';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import teknologihuset from '../../assets/academy/teknologihuset.jpg';
import kvarteret from '../../assets/academy/kvarteret.jpg';
import uit from '../../assets/academy/tromso.jpg';
import acando from '../../assets/partners-18/acando.svg';
import accenture from '../../assets/partners-18/accenture.svg';
import capgemini from '../../assets/partners-18/capgemini.svg';
import finn from '../../assets/partners-18/finn.svg';
import kantega from '../../assets/partners-18/kantega.svg';
import './Academy.less';

const sponsors = [acando, accenture, capgemini, finn, kantega];

const oslo = {
    image: teknologihuset,
    city: 'Oslo',
    date: 'February 7th',
    location: 'Teknologihuset',
    location_link: 'http://www.teknologihuset.no',
    pax: 100,
    program: 'academy-oslo',
    registration: [
        {text: 'Register for Academy Oslo', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeFEhvSathx259fwJKGTevlUPIWv7BpkLuQZPiR8DWBcgR-GQ/viewform?c=0&w=1'}
    ]
};

const bergen = {
    image: kvarteret,
    city: 'Bergen',
    date: 'February 5th',
    location: 'Det Akademiske Kvarter',
    location_link: 'http://kvarteret.no/',
    pax: 80,
    program: 'academy-bergen',
    registration: [
        {text: 'Register for Academy Bergen', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJLNRKU9aP_rqSf0qYfs6zEyvMqRvulU1P2PbdRf4sLyzo5A/viewform?c=0&w=1'},
    ]
};

const tromso = {
    image: uit,
    city: 'Tromsø',
    date: 'February 6th',
    location: 'TBA',
    location_link: 'https://www.uit.no',
    pax: 60,
    program: 'academy-tromso',
    registration: [
        {text: 'Register for Academy Tromsø', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc4UVInVgFIiPDExRfYCr0p3BwT7h9Hhhk5546Tp6sxiYcVfA/viewform?c=0&w=1'},
    ]
};

type AcademyProps = {
}

type LocationProps = {
    location: Object
}

function Location(props: LocationProps) {
    return (
        <div className='location'>
            <div className='location__image' style={{backgroundImage: `url('${props.location.image}')`}}>
                <h3 className='location__title'>{props.location.city}</h3>
            </div>
            <p className='location__date'>
                <strong>{props.location.date}</strong>
            </p>
            <p className='location__location'>
                <a href={props.location.location_link}>
                    {props.location.location}
                </a>
            </p>
            <p className='location__pax'>
                {props.location.pax} students
            </p>
            {props.location.registration.map((reg, key) => (
                <p key={key}>
                    <a className='button button--transparent' href={reg.link}>
                        {reg.text}
                    </a>
                </p>
            ))}
        </div>
    )
}

function AcademyItem() {
    return (
        <Col xs={12} sm={6} md={3} lg={3}>
            <StatItem image={location}>Oslo Sepktrum, Norway</StatItem>
        </Col>
    )
}

function Academy(props: AcademyProps) {
    return (
        <Page name='academy'>
            <PageHeader subHeader="Come join us in February 2018">JavaZone Academy</PageHeader>
            <Section>
                <CenterBlock>
                    <p>
                        Are you a student? Interested in IT? Come join us for JavaZone Academy.
                        JavaZone Academy is a free event for students in Norway, where we invite you
                        to take part in the JavaZone experience.
                    </p>
                    <p>
                        We will bring great talks, food, mingling and great partners
                        to <strong>Oslo</strong>, <strong> Bergen</strong> and <strong>Tromsø</strong>.
                        Join us for a great evening!
                    </p>
                    <p>
                        A detailed program and more information will be soon posted here. Watch this space!
                    </p>
                </CenterBlock>
            </Section>
            <Section alternate>
                <Grid className="stats">
                    <Row center="xs">
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Row>
                                <Col xs={12} sm={6} md={3} lg={3}>
                                    <StatItem image={location}>Oslo Sepktrum, Norway</StatItem>
                                </Col>
                                <Col xs={12} sm={6} md={3} lg={3}>
                                    <StatItem image={calendar}>September 12th-13th</StatItem>
                                </Col>
                                <Col xs={12} sm={6} md={3} lg={3}>
                                    <StatItem image={mic}>24 Speakers</StatItem>
                                </Col>
                                <Col xs={12} sm={6} md={3} lg={3}>
                                    <StatItem image={partners}>36 Stands</StatItem>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <ul className='academy__locations'>
                    <Location location={bergen} />
                    <Location location={tromso} />
                    <Location location={oslo} />
                </ul>
            </Section>
            {/*
            <Container>
                <CBlock>
                    <CHeader>Program and Speakers</CHeader>
                </CBlock>
                <div className='academy__program-links'>
                    <ul className='list'>
                        <li className='list__item academy__program-link'>
                            <Link href='/academy/oslo' className='button button--transparent'>Academy Oslo</Link>
                        </li>
                        <li className='list__item academy__program-link'>
                            <Link href='/academy/tromso' className='button button--transparent'>Academy Tromsø</Link>
                        </li>
                        <li className='list__item academy__program-link'>
                            <Link href='/academy/bergen' className='button button--transparent'>Academy Bergen</Link>
                        </li>
                    </ul>
                </div>
                <Block>
                    <Header>How do I register?</Header>
                    <Content>
                        <P>
                            Use the signup links above to sign up for your prefered town.
                            We’ll contact you as soon as possible with information about
                            whether you got a spot.
                            The events are usually quite popular, so make sure to registrer as soon as possible.
                        </P>
                    </Content>
                </Block>
            </Container>

            <ul className='academy__sponsors'>
                {sponsors.map((sponsor, key) => (
                    <li key={key} className='academy__sponsor'>
                        <img className='academy__sponsor-image' src={sponsor} />
                    </li>
                ))}
            </ul>
            */
            }
        </Page>
    )
}

export default Academy;