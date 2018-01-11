import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import uit from '../assets/academy/tromso.jpg';
import acando from '../assets/partners-17/acando.svg';
import accenture from '../assets/partners-17/accenture.svg';
import capgemini from '../assets/partners-17/capgemini.svg';
import finn from '../assets/partners-17/finn.svg';
import kantega from '../assets/partners-17/kantega.svg';

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
    location: 'Universitetet i Tromsø',
    location_link: 'https://www.uit.no',
    pax: 60,
    program: 'academy-tromso',
    registration: [
        {text: 'Register for Academy Tromsø', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc4UVInVgFIiPDExRfYCr0p3BwT7h9Hhhk5546Tp6sxiYcVfA/viewform?c=0&w=1'},
    ]
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

const Academy = () => (
    <Page name='academy'>
        <Heading>
            <LargeHeading>JavaZone Academy</LargeHeading>
            <SmallHeading>Come join us in February 2018</SmallHeading>
        </Heading>

        <Container>
            <CBlock>
                <CContent>
                    <P>
                        Are you a student? Interested in IT? Come join us for JavaZone Academy.
                        JavaZone Academy is a free event for students in Norway, where we invite you
                        to take part in the JavaZone experience.
                    </P>
                    <P>
                        We will bring great talks, food, mingling and great partners
                        to <strong>Oslo</strong>, <strong> Bergen</strong> and <strong>Tromsø</strong>.
                        Join us for a great evening!
                    </P>
                    <P>
                        A detailed program and more information will be soon posted here. Watch this space!
                    </P>
                </CContent>
            </CBlock>
        </Container>

        <ul className='academy__locations'>
            <Location location={bergen} />
            <Location location={tromso} />
            <Location location={oslo} />
        </ul>

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
);

export default Academy;
