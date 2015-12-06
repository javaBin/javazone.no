import imageOne from '../assets/partners/stand.jpg';
import imageTwo from '../assets/partners/sal1.jpg';
import imageThree from '../assets/partners/overflow.jpg';
import header from '../assets/header_expo.jpg';
import partnerProspect from '../assets/partners/partnership-prospectus-javazone2016.pdf';

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
	    <h1 className='page__title partners__title'>Join us as a partner</h1>
        </div>

        <div className='textblock textblock--centered partners__intro'>
            <div className='textblock--centered__text'>
                <h2 className='page__sub-title'>What is JavaZone?</h2>
                <p>
		            JavaZone is one of the largest community driven conferences in the world.
		            Every year, more than 2.500 developers meet up to learn and mingle in Oslo.
		            <br /><br />
		            JavaZone is made possible with the help of our more than 40 partners.
                    Read on to learn what being a partner really means, and how you can become one.
                </p>
            </div>
        </div>

        <div className='textblock--image partners__role'>
            <div className='textblock--image__text'>
		<h2 className='textblock__title'>A partnership at JavaZone</h2>
                <p className='page__paragraph'>
		            A partnership is a really good way of exposing your company to a lot of interested developers.
                    Last year we had a total of 2800 visitors during the conference days. These are not
		            2800 random people – they are the 2800 people you most likely would want to know your company.
                </p>
                <p className='page__paragraph'>
                    All companies are given the same options when becoming a partner.
                    There is no bronze, silver or gold sponsorships – everyone are treated as equals.
                    There are, however, options to increase the size of the stand or choose one of
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
                <ul className='partners__included page__paragraph'>
                    <li className='partners__included-item'>A stand in the Expo Area (6 square meters)</li>
                    <li className='partners__included-item'>4 flexible, nameless expo tickets for the stand crew</li>
                    <li className='partners__included-item'>Discounted participant tickets for your employees</li>
                    <li className='partners__included-item'>Branding on <a href='//2016.javazone.no' className="page__link">javazone.no</a>, at the venue, the program, and other promotional material JavaZone produces</li>
                </ul>
            </div>
        </div>

        <div className='textblock--image partners__expansions'>
            <div className='textblock--image__text'>
                <h2 className='textblock__title'>Possible expansions</h2>
                <dl className='page__paragraph'>
                    <dt className='partners__expansion-title'>Extra space</dt>
                    <dd className='partners__expansion-description'>Double you stand space and get 12 square meters instead of 6.</dd>
                    <dt className='partners__expansion-title'>Restaurant stand</dt>
                    <dd className='partners__expansion-description'>
                        We have room for a total of 8 restaurant stands in the Expo Area.
			            The theme and menu is decided by you in collaboration with The Flying Culinary Circus.
                    </dd>
                    <dt className='partners__expansion-title'>Concept stand</dt>
                    <dd className='partners__expansion-description'>
                        We also have room for 2 extra large stands. These stands are about 70 square feet big,
                        and have room for a 4 meter tall wall behind it. This is your choice if you want to be
                        really creative.
                    </dd>
                </dl>
            </div>
            <div className='textblock--image__image' style={sectionThreeStyles}></div>
        </div>

        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <h2 className='page__sub-title'>Contact us today</h2>
                <p>
                    JavaZone 2016 will be held in September, but please get in touch sooner rather
		            than later.<br />Even though all stand positions at JavaZone gives you a great opportunity,<br />some of the extra options
		            will sell out early.
                </p>

                <p>
                    Contact us at <a className='page__link' href='mailto:partner@java.no'>partner@java.no</a> today,
                    and we'll work with you to create the best possible partnership for you.
                </p>

                <p className='partners__prospect'>
                    <a href={partnerProspect} className='button'>Download our Partnership Prospectus</a>
                </p>
            </div>
        </div>
    </div>
);