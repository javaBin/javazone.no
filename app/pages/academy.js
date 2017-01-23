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
    date: 'February 16th',
    location: 'Teknologihuset',
    location_link: 'http://www.teknologihuset.no',
    pax: 120,
    program: 'academy-oslo',
    registration: [
        {text: 'Register for Academy Oslo', link: 'https://docs.google.com/forms/d/1JfeJsALw_6Dur0br1uVxQ7KAe0neKlTZAIVoxO7zFBE/viewform?usp=send_form'}
    ]
};

const bergen = {
    image: kvarteret,
    city: 'Bergen',
    date: 'February 17th',
    location: 'Det Akademiske Kvarter',
    location_link: 'http://kvarteret.no/',
    pax: 120,
    program: 'academy-bergen',
    registration: [
        {text: 'Register for Academy Bergen', link: 'https://docs.google.com/forms/d/1XsRJ-77y0YjrhWh6QkzN8NS2qwOD7EEOY4zzaoZuP0s/viewform?usp=send_form'},
    ]
};

const trondheim = {
    image: samfundet,
    city: 'Trondheim',
    date: 'February 18th',
    location: 'Studentersamfundet',
    location_link: 'https://www.samfundet.no/',
    pax: 200,
    program: 'academy-trondheim',
    registration: [
        {text: 'Register @ Abakus', link: 'https://abakus.no/event/1693-javazone-academy-2016/'},
        {text: 'Register @ Online', link: 'https://online.ntnu.no/events/254/javazone-academy-2016/'}
    ]
};

const Academy = () => (
    <Page name='academy'>
        <Heading>
            <LargeHeading>JavaZone Academy</LargeHeading>
        </Heading>
    </Page>
);

export default Academy;
