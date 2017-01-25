import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import samfundet from '../assets/academy/samfundet.jpg';

const oslo = {
    image: teknologihuset,
    city: 'Oslo',
    date: 'February 14th',
    location: 'Teknologihuset',
    location_link: 'http://www.teknologihuset.no',
    pax: 100,
    program: 'academy-oslo',
    registration: [
        {text: 'Register for Academy Oslo', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdCD9dm8F7771fEHHXuTRLejLLTrhbTzYCnkQYWu3G-hFqh7A/viewform?c=0&w=1'}
    ]
};

const bergen = {
    image: kvarteret,
    city: 'Bergen',
    date: 'February 16th',
    location: 'Det Akademiske Kvarter',
    location_link: 'http://kvarteret.no/',
    pax: 80,
    program: 'academy-bergen',
    registration: [
        {text: 'Register for Academy Bergen', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfK6Lwo_5fRLTbzuzZKNuUUS2bo2O_TLnQswpwQXkVndv9GYg/viewform?c=0&w=1'},
    ]
};

const trondheim = {
    image: samfundet,
    city: 'Trondheim',
    date: 'February 15th',
    location: 'Studentersamfundet',
    location_link: 'https://www.samfundet.no/',
    pax: 100,
    program: 'academy-trondheim',
    registration: [
        {text: 'Register for Academy Trondheim', link: 'https://abakus.no/event/1946-javazone-academy-2017/'},
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
                        to <strong>Oslo</strong>, <strong> Bergen</strong> and <strong>Trondheim</strong>.
                        Join us for a great evening!
                    </P>
                </CContent>
            </CBlock>
        </Container>

        <ul className='academy__locations'>
            <Location location={oslo} />
            <Location location={bergen} />
            <Location location={trondheim} />
        </ul>

        <Container>
            <Block>
                <Header>Program and Speakers</Header>
                <Content>
                    <P>
                        JavaZone Academy starts at 1200 (doors open at 1130), and lasts until 1800.
                        Afterwards, there will be food and drinks.
                        There will be 4 or 5 presentations at each location.
                        The exact program will be available once the event is approacing.
                    </P>
                </Content>
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
    </Page>
);

export default Academy;
