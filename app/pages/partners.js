import imageOne from '../assets/partners/1.jpg';
import imageTwo from '../assets/partners/2.jpg';
import imageThree from '../assets/partners/3.jpg';
import header from '../assets/header_sal1.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const sectionOneStyles = {
    backgroundImage: `url('${imageOne}')`
};

const sectionTwoStyles = {
    backgroundImage: `url('${imageTwo}')`
};

const sectionThreeStyles = {
    backgroundImage: `url('${imageThree}')`
};

export default () => (
    <div className='page partners'>
        <div className='page__header page__header--centered' style={headerStyle}>
            <h1 className='page__title partners__title'>Become a partner</h1>
        </div>

        <div className='textblock--centered partners__intro'>
            <div className='textblock--centered__text'>
                <h2 className='page__sub-title'>What is JavaZone?</h2>
                <p className='page__paragraph'>
                    Every partner of JavaZone plays a big role in making the conference possible.
                    It is because of our partners that we have had the possibility to keep the high
                    quality that JavaZone is known to have.
                    Read on to learn what being a partner really means, and how you can become one.
                </p>
            </div>
        </div>

        <div className='textblock--image partners__role'>
            <div className='textblock--image__text'>
                <h2 className='textblock__title'>A partnership</h2>
                <p className='page__paragraph'>
                    A partnership is a really good way of exposing your company to a lot of interested parties,
                    and making yourself visible to the right people.
                    Last year we had a total of 2800 visitors during the conference days. These are not
                    2800 random people – these are the 2800 you most likely would want to know your company.
                </p>
                <p className='page__paragraph'>
                    All companies are given the same options when becoming a partner.
                    There is no bronze, silver or gold sponsorships, everyone are treated as equals.
                    There are, however, options to increase the size of the stand or buy in on one of
                    our restaurant stands. We are also willing to accomodate creative ideas, so please
                    let us know if you have anything special in mind.
                </p>
            </div>
            <div className='textblock--image__image' style={sectionOneStyles}></div>
        </div>

        <div className='textblock--image'>
            <div className='textblock--image__image' style={sectionTwoStyles}></div>
            <div className="textblock--image__text">
                <h2 className='textblock__title'>Included in all partnerships</h2>
                <ul className='partners__included'>
                    <li className='partners__included-item'>A stand in the expo area (6 square meters)</li>
                    <li className='partners__included-item'>4 flexible, nameless expo tickets for the stand crew</li>
                    <li className='partners__included-item'>Discounted participant tickets for your employees</li>
                    <li className='partners__included-item'>Branding on <a href='//2016.javazone.no' className="page__link">javazone.no</a>, at the venue, the program, and other promotional material JavaZone produces</li>
                </ul>
            </div>
        </div>

        <div className='textblock--image partners__expansions'>
            <div className='textblock--image__text'>
                <h2 className='textblock__title'>Possible expansions</h2>
                <dl>
                    <dt className='partners__expansion-title'>Extra stand space</dt>
                    <dd className='partners__expansion-description'>Double you stand space and get 12 square feet instead of 6.</dd>
                    <dt className='partners__expansion-title'>Restaurand stand</dt>
                    <dd className='partners__expansion-description'>
                        We have room for a total of 8 restaurant stands in the expo area.
                        The theme and menu is decided by you in colaboration with The Flying Culinary Circus.
                    </dd>
                    <dt className='partners__expansion-title'>Concept stand</dt>
                    <dd className='partners__expansion-description'>
                        We also have room for 2 extra large stands. These stands are about 70 square feet,
                        and have room for a 4 meter tall wall behind it. This is your choice if you want to be
                        really creative.
                    </dd>
                </dl>
            </div>
            <div className='textblock--image__image' style={sectionThreeStyles}></div>
        </div>

        <div className='textblock--centered'>
            <div className='textblock--centered__text'>
                <h2 className='page__sub-title'>Contact us today</h2>
                <p className='page__paragraph'>
                    JavaZone 2016 will be held in September, but please get in touch sooner rather
                    than later.<br />Even though all stand positions are considered equal,<br />the extra options
                    often sell out early.
                </p>

                <p className='page__paragraph'>
                    Contact us at <a className='page__link' href='mailto:partner@java.no'>partner@java.no</a> today,
                    and we'll work with you to create the best possible partnership for you.
                </p>
            </div>
        </div>
    </div>
);


                // <p className='page__paragraph'>
                //     JavaZone is a conference organized by and for a great community of developers.
                //     Over the years it has become one of the largest and most important conferences in Norway,
                //     hosting both participants and speakers from all over the world.
                //     This year is a bit special – JavaZone 2016 will be the 15th time we arrange this conference.
                // </p>
                // <p className='page__paragraph'>
                //     Last year, we had around 2,500 attendees at the conference, including speakers and
                //     volunteers and around 100 representatives from our partners.
                // </p>
                // <p className='page__paragraph'>
                //     We would not be able to arrange a conference of this size and quality without 
                //     the involvement and support of every one of our partners.
                //     Each year, more than 40 partners contribute to make JavaZone a great success.
                // </p>