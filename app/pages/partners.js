import {Link} from 'react-router';
import imageOne from '../assets/partners/stand.jpg';
import imageTwo from '../assets/partners/sal1.jpg';
import imageThree from '../assets/partners/overflow.jpg';
import header from '../assets/header_expo.jpg';
import partnerProspect from '../assets/partners/partnership-prospectus-javazone2016.pdf';
import { Page, PageHeading, Container } from '../components/page';
import { P } from '../components/textblock';
import partners from '../data/partners';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript#6274381
function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../assets/partner-logos', false, /\.png$/);
const images = imagesContext.keys().map(image => imagesContext(image));

function getimage(images, image) {
    return images.find(img => img.indexOf(image) >= 0);
}

const signedPartners = shuffle(partners).map(partner => (
    {name: partner.name, logo: getimage(images, partner.logo), url: partner.url}
));

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

const Partner = ({name, logo, url}) => (
    <li className='partners__logo'>
        <a className='partners__logo-link' href={url} target='_blank'>
            <img src={logo} className='partners__logo-image' alt={name} />
        </a>
    </li>
);

export default () => (
    <Page>
        <PageHeading background={header}>
           Join us as a partner
        </PageHeading>

        <Container>
            <div className='textblock'>
                <div className='textblock__column textblock__column--centered'>
                    <div className='textblock__text'>
                        <h2 className='textblock__title'>What is JavaZone?</h2>
                        <P>
                            JavaZone is one of the largest community driven conferences in the world.
                            Every year, more than 2.500 developers meet up to learn and mingle in Oslo.
                            <br /><br />
                            JavaZone is made possible with the help of our more than 40 partners.
                            Read on to learn what being a partner really means, and how you can become one.
                        </P>
                    </div>
                </div>
            </div>

            <div className='textblock'>
                <div className='textblock__column textblock__column--centered'>
                    <span className='textblock__sub-title'>
                        These awesome partners have already signed up for JavaZone 2016.<br/>
                        Contact us at <a className='page__link' href='mailto:partner@java.no'>partner@java.no</a> to join in.
                    </span>
                </div>
            </div>

            <ul className='partners__logos'>
                {signedPartners.map((partner, kp) => (<Partner key={kp} {...partner} />))}
            </ul>

            <div className='textblock partners__role'>
                <div className='textblock__column textblock__column--dark'>
                    <div className='textblock__text'>
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
                </div>
                <div className='textblock__column'>
                    <div className='background-image' style={sectionOneStyles}></div>
                </div>
            </div>

            <div className='textblock'>
                <div className='textblock__column'>
                    <div className='background-image' style={sectionTwoStyles}></div>
                </div>
                <div className="textblock__column textblock__column--dark">
                    <div className='textblock__text'>
                        <h2 className='textblock__title'>Included in all partnerships</h2>
                        <ul className='partners__included page__paragraph'>
                            <li className='partners__included-item'>A stand in the Expo Area (6 square meters)</li>
                            <li className='partners__included-item'>4 flexible, nameless expo tickets for the stand crew</li>
                            <li className='partners__included-item'>Discounted participant tickets for your employees</li>
                            <li className='partners__included-item'>Branding on <a href='//2016.javazone.no' className="page__link">javazone.no</a>, at the venue, the program, and other promotional material JavaZone produces</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='textblock partners__expansions'>
                <div className='textblock__column textblock__column--dark'>
                    <div className='textblock__text'>
                        <h2 className='textblock__title'>Possible expansions</h2>
                        <dl className='page__paragraph'>
                            <dt className='partners__expansion-title'>Extra space</dt>
                            <dd className='partners__expansion-description'>Double you stand space and get 12 square meters instead of 6.</dd>
                            <dt className='partners__expansion-title'>Restaurant stand (sold out)</dt>
                            <dd className='partners__expansion-description'>
                                We have room for a total of 8 restaurant stands in the Expo Area.
                                The theme and menu is decided by you in collaboration with our food provider.
                            </dd>
                            <dt className='partners__expansion-title'>Concept stand (sold out)</dt>
                            <dd className='partners__expansion-description'>
                                We also have room for 3 extra large stands. These stands are about 70 square feet big,
                                and have room for a 4 meter tall wall behind it. This is your choice if you want to be
                                really creative.
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className='textblock__column'>
                    <div className='background-image' style={sectionThreeStyles}></div>
                </div>
            </div>

            <div className='textblock'>
                <div className='textblock__column textblock__column--centered'>
                    <div className='textblock__text textblock__text--fill'>
                        <h2 className='textblock__title'>Contact us today</h2>
                        <P>
                            JavaZone 2016 will be held in September, but please get in touch sooner rather
                            than later.<br />Even though all stand positions at JavaZone gives you a great opportunity,<br />some of the extra options
                            will sell out early.
                        </P>

                        <P>
                            Contact us at <a className='page__link' href='mailto:partner@java.no'>partner@java.no</a> today,
                            and we’ll work with you to create the best possible partnership for you.
                        </P>

                        <P className='partners__prospect'>
                            <a href={partnerProspect} className='button button--green'>Download our Partnership Prospectus</a>
                        </P>

                        <P>
                            <span className='textblock__sub-title'>A note about partner meetings</span>
                            <br />
                            We arrange regular partner meetings for both existing and new partners,
                            where we outline the progress of the conference. See the slides from
                            our last partner meeting in April for a status update.
                            <br />
                        </P>
                        <P className='partners__prospect'>
                            <Link to='partner-presentation-april' className='button button--red'>See the slides from the last partner meeting</Link>
                        </P>
                    </div>
                </div>
            </div>
        </Container>
    </Page>
);
