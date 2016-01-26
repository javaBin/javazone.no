import header from '../assets/academy.jpg';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import samfundet from '../assets/academy/samfundet.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

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

        <ul className='academy__locations'>
            <li className='academy__location academy__location--oslo location'>
                <div className='location__image' style={{backgroundImage: `url('${teknologihuset}')`}}></div>
                <h3 className='location__title'>Oslo</h3>
                <p className='location__date'><strong>February 16th</strong></p>
                <p className='location__location'>@ <a href="http://www.teknologihuset.no/">Teknologihuset</a></p>
                <p className='location__pax'>120 students</p>
                <p className='location__register'>
                    <a href="https://docs.google.com/forms/d/1JfeJsALw_6Dur0br1uVxQ7KAe0neKlTZAIVoxO7zFBE/viewform?usp=send_form">Register for Academy Oslo</a>
                </p>
            </li>
            <li className='academy__location academy__location--bergen location'>
                <div className='location__image' style={{backgroundImage: `url('${kvarteret}')`}}></div>
                <h3 className='location__title'>Bergen</h3>
                <p className='location__date'><strong>February 17th</strong></p>
                <p className='location__location'>@ <a href="http://kvarteret.no/">Det Akademiske Kvarter</a></p>
                <p className='location__pax'>120 students</p>
                <p className='location__register'>
                    <a href="https://docs.google.com/forms/d/1XsRJ-77y0YjrhWh6QkzN8NS2qwOD7EEOY4zzaoZuP0s/viewform?usp=send_form">Register for Academy Bergen</a>
                </p>
            </li>
            <li className='academy__location academy__location--trondheim location'>
                <div className='location__image' style={{backgroundImage: `url('${samfundet}')`}}></div>
                <h3 className='location__title'>Trondheim</h3>
                <p className='location__date'><strong>February 18th</strong></p>
                <p className='location__location'>@ <a href="https://www.samfundet.no/">Studentersamfundet</a></p>
                <p className='location__pax'>200 students</p>
                <p className='location__register'>
                    <a href="https://abakus.no/event/1693-javazone-academy-2016/">Register @ Abakus</a>
                </p>
                <p className='location__register'>
                    <a href="https://online.ntnu.no/">Register @ Online</a>
                </p>
            </li>
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
                    <ul className="location__speakerlist">
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
