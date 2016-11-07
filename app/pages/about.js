import header from '../assets/header_expo.jpg';
import github from '../assets/about/github.png';
import trackjs from '../assets/about/trackjs.png';
import heroes from '../data/heroes.js';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='page about'>
        <div className='page__header page__header--centered' style={headerStyle}>
            <h1 className='page__title about__title'>About</h1>
        </div>

        <div className='textblock textblock--first'>
            <div className='textblock__column textblock__column--centered'>
                <div className='textblock__text'>
                    <h2 className='textblock__title'>JavaZone</h2>
                    <p>
                        JavaZone is a conference organized by and for a great community of developers.
                        The conference has been held in the heart of Oslo for 14 consecutive years, and JavaZone 2016 will be the 15th time we arrange the conference.
                    </p>
                </div>
            </div>
        </div>

        <div className='textblock'>
            <div className='textblock__column'>
                <div className='textblock__text'>
                    <h2 className='textblock__title'>Open Source</h2>
                    <p>
                        We make almost every piece of software used to run the conference ourselves.
                        And, as a true independent organization, we open source most of it as well.
                        You can find most of our software over at <a href="https://github.com/javabin">Github</a>
                    </p>
                </div>
            </div>
            <ul className='textblock__column textblock__column--centered about__services'>
                <li className='about__service'>
                    <a href='https://github.com/javabin'>
                        <img src={github} className='about__service-icon' />
                    </a>
                </li>
                <li className='about__service'>
                    <a href='https://trackjs.com'>
                        <img src={trackjs} className='about__service-icon' />
                    </a>
                </li>
            </ul>
        </div>

        <div className='textblock about__heroes'>
            <div className='textblock__column'>
                <h2 className="textblock__title">The heroes</h2>
                <p>
                    JavaZone certainly don't make itself, a lot of awesome people work throughout the year to make sure that JavaZone 2016 will be the most awesome JavaZone ever!
                </p>
            </div>
        </div>
    </div>
);
