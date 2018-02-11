//@flow
import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import { Block, Content, SubHeader, P} from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import { Section } from '../../components/Section/Section';
import { CenterBlock, LeftBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import teknologihuset from '../../assets/academy/teknologihuset.jpg';
import kvarteret from '../../assets/academy/kvarteret.jpg';
import uit from '../../assets/academy/tromso.jpg';
import acando from '../../assets/partners-18/acando.svg';
import accenture from '../../assets/partners-18/accenture.svg';
import capra from '../../assets/partners-18/capra.svg';
import finn from '../../assets/partners-18/finn.svg';
import kantega from '../../assets/partners-18/kantega.svg';
import miles from '../../assets/partners-18/miles.svg';
import tripletex from '../../assets/partners-18/tripletex.svg';
import ambita from '../../assets/partners-18/ambita.svg';
import './Academy.less';

const sponsors = [acando, accenture, ambita, finn, capra, kantega, miles, tripletex];

const oslo = {
    image: teknologihuset,
    city: 'Oslo',
    date: 'February 7th',
    location: 'Teknologihuset',
    location_link: 'http://www.teknologihuset.no',
    pax: 100,
    program: 'academy-oslo',
    registration: {
        //text: 'is closed for Academy Oslo', 
        text: 'Registration for Academy Oslo is closed', 
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeFEhvSathx259fwJKGTevlUPIWv7BpkLuQZPiR8DWBcgR-GQ/viewform?c=0&w=1'
    }
};

const bergen = {
    image: kvarteret,
    city: 'Bergen',
    date: 'February 5th',
    location: 'Det Akademiske Kvarter',
    location_link: 'http://kvarteret.no/',
    pax: 80,
    program: 'academy-bergen',
    registration: {
        //text: 'Register for Academy Bergen', 
        text: 'Registration for Academy Bergen is closed', 
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJLNRKU9aP_rqSf0qYfs6zEyvMqRvulU1P2PbdRf4sLyzo5A/viewform?c=0&w=1'
    }
};

const tromso = {
    image: uit,
    city: 'Tromsø',
    date: 'February 6th',
    location: 'Universitetet i Tromsø',
    location_link: 'https://www.uit.no',
    pax: 60,
    program: 'academy-tromso',
    registration: {
        //text: 'Register for Academy Tromsø', 
        text: 'Registration for Academy Tromsø is closed', 
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSc4UVInVgFIiPDExRfYCr0p3BwT7h9Hhhk5546Tp6sxiYcVfA/viewform?c=0&w=1'
    }
};

const Location = ({location}) => (
    <div className='location'>
        <div className='location__image' style={{backgroundImage: `url('${location.image}')`}}>
            <h3 className='location__title'>{location.city}</h3>
        </div>
        <p className='location__date'>
            <strong>{location.date}</strong>
        </p>
        <p className='location__location'>
            <a href={location.location_link}>
                {location.location}
            </a>
        </p>
        <p className='location__pax'>
            {location.pax} students
        </p>
        {location.registration.map((reg, key) => (
            <p key={key}>
                <a className='button button--transparent' href={reg.link}>
                    {reg.text}
                </a>
            </p>
        ))}
    </div>
);

type AcademyItemProps = {
    location: Object
}

function AcademyItem(props: AcademyItemProps) {
    return (
        <Col xs={12} sm={12} md={12} lg={4}>
            <Row center="xs"> 
                <div className='academy-item-image' style={{backgroundImage: `url('${props.location.image}')`}}>
                    <h3 className='academy-item-title'>{props.location.city}</h3>
                </div>
            </Row>
            <Row center="xs">
                <h1>{props.location.date}</h1>
            </Row>
            <Row className="academy-item-location" center="xs">
                <a href={props.location.location_link}>{props.location.location}</a>
            </Row>
            <Row className="academy-item-students" center="xs">
                {props.location.pax} students
            </Row>
            <Row center="xs">
                <Button target alternate link={props.location.registration.link}>{props.location.registration.text}</Button>
            </Row>
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
                <div className="academy-item-container">
                    <Grid>
                        <Row center="xs">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row center="xs">
                                    <AcademyItem location={bergen}></AcademyItem>
                                    <AcademyItem location={tromso}></AcademyItem>
                                    <AcademyItem location={oslo}></AcademyItem>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Section>
            <Section>
                <CenterBlock header="Program and speakers">
                    <Grid className="academy-block-air">
                        <Row center="xs">
                            <Col xs={12} sm={12} md={9} lg={9}>
                                <Row center="xs">
                                    <Col xs={12} sm={12} md={3} lg={3}>
                                        <Button link='/academy/oslo'>Academy Oslo</Button>
                                    </Col>
                                    <Col xs={12} sm={12} md={3} lg={3}>
                                        <Button link='/academy/bergen'>Academy Bergen</Button>
                                    </Col>
                                    <Col xs={12} sm={12} md={3} lg={3}>
                                        <Button link='/academy/tromso'>Academy Tromsø</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </CenterBlock>
                <LeftBlock header="How do I register?">
                    <p>
                        Use the signup links above to sign up for your prefered town. We’ll contact you as soon as possible with information about whether you got a spot. The events are usually quite popular, so make sure to registrer as soon as possible.
                    </p>
                </LeftBlock>
                <CenterBlock>
                    <ul className='academy__sponsors academy__sponsors--small'>
                        {sponsors.map((sponsor, key) => (
                            <li key={key} className={`academy__sponsor academy__sponsor--${sponsors.length}`}>
                                <img className='academy__sponsor-image' src={sponsor} />
                            </li>
                        ))}
                    </ul>
                </CenterBlock>
            </Section>
        </Page>
    );
}

export default Academy;
