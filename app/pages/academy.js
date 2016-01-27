import header from '../assets/academy.jpg';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import samfundet from '../assets/academy/samfundet.jpg';
import accenture from '../assets/academy/accenture.jpg';
import finn from '../assets/academy/finn.jpg';
import kantega from '../assets/academy/kantega.jpg';

const sponsors = [accenture, finn, kantega];

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const oslo = {
    image: teknologihuset,
    city: 'Oslo',
    date: 'February 16th',
    location: 'Teknologihuset',
    location_link: 'http://www.teknologihuset.no',
    pax: 120,
    registration: [
        {text: 'Register for Academy Trondheim', link: 'https://docs.google.com/forms/d/1JfeJsALw_6Dur0br1uVxQ7KAe0neKlTZAIVoxO7zFBE/viewform?usp=send_form'}
    ]
};

const bergen = {
    image: kvarteret,
    city: 'Bergen',
    date: 'February 17th',
    location: 'Det Akademiske Kvarter',
    location_link: 'http://kvarteret.no/',
    pax: 120,
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
    registration: [
        {text: 'Register @ Abakus', link: 'https://abakus.no/event/1693-javazone-academy-2016/'},
        {text: 'Register @ Online', link: 'https://online.ntnu.no/'}
    ]
};

const Location = ({image, city, date, location, location_link, pax, registration}) => (
    <li className='academy__location location'>
        <div className='location__image' style={{backgroundImage: `url('${image}')`}}>
            <h3 className='location__title'>{city}</h3>
        </div>
        <p className='location__date'><strong>{date}</strong></p>
        <p className='location__location'>
            <a href={location_link}>{location}</a>
        </p>
        <p className='location__pax'>{pax} students</p>
        {registration.map((reg, key) => (
            <p key={key}>
                <a className="button button--red" href={reg.link}>{reg.text}</a>
            </p>
        ))}
    </li>
);

export default () => (
    <div className='page academy'>
        <div className='page__header page__header-centered' style={headerStyle}>
            <h1 className='page__title'>JavaZone Academy</h1>
        </div>

        <div className='textblock textblock--centered'>
            <div className='textblock__column textblock__column--centered'>
                <div className='textblock__text textblock__text--fill'>
                    <h2 className='textblock__title'>A free taste of JavaZone for students</h2>
                    <p>
                        Are you a student? Interested in IT? Come join us for JavaZone Academy.
                        JavaZone Academy is a free event for students in Norway, where we invite you
                        to take part in the Javazone experience.
                    </p>
                    <p>
                        We will bring great talks, food, mingling and great partners to <strong>Oslo</strong>,
                        <strong> Bergen</strong> and <strong>Trondheim</strong>. Join us for a great evening!
                    </p>
                </div>
            </div>
        </div>

        <ul className='academy__sponsors'>
            {sponsors.map((sponsor, key) => (
                <li key={key} className='academy__sponsor'>
                    <img className='academy__sponsor-image' src={sponsor} />
                </li>
            ))}
        </ul>

        <ul className='academy__locations'>
            <Location {...oslo} />
            <Location {...bergen} />
            <Location {...trondheim} />
        </ul>

        <div className='textblock textblock--centered'>
            <div className='textblock__column textblock__column--centered'>
                <div className='textblock__text'>
                    <h2 className='textblock__title'>Program and speakers</h2>
                    <p>
                        The format will be presentations from 1200 to 1800 and mingling and networking with 
                        food and drinks after 1800. We plan to have 4 or 5 presentations at each location.
                    </p>
                    <p>
                        The detailed program and speakers for each location will be revealed closer to the event, but this is a sneak peak of some of the speakers who will attend JavaZone Academy.
                    </p>
                    <ul className="academy__speaker-list">
                        <li>Lotte Johansen</li>
                        <li>Christin Gorman</li>
                        <li>Christian Johansen</li>
                        <li>Rafael Winterhalter</li>
                    </ul>
                </div>
            </div>
            <div className='textblock__column textblock__column--centered'>
                <div className='textblock__text'>
                    <h2 className='textblock__title'>How to register?</h2>
                    <p>
                        Use the signup links above to sign up for your prefered town. We'll contact you as soon as possible with information about whether you got a spot.
                    </p>
                    <p>
                        The events are usually quite popular, so make sure to registrer as soon as possible.
                    </p>
                </div>
            </div>
        </div>
        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
            </div>
        </div>

    </div>
);
