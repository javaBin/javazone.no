import {Link} from 'react-router';
import imageOne from '../assets/partners/stand.jpg';
import imageTwo from '../assets/partners/sal1.jpg';
import imageThree from '../assets/partners/overflow.jpg';
import header from '../assets/header_expo.jpg';
import partnerProspect from '../assets/partners/partnership-prospectus-javazone2016.pdf';
import { P } from '../components/textblock';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript#6274381
function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../assets/partner-logos-png', false, /\.png$/);
const images = imagesContext.keys().map(image => imagesContext(image));
console.log(images);

function getimage(images, image) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].indexOf(image) >= 0)
            return images[i];
    }
}

const signedPartners = shuffle([
    {name: 'Bouvet', logo: 'bouvet.png'},
    {name: 'Couchbase', logo: 'couchbase.png'},
    {name: 'Dips', logo: 'dips.png'},
    {name: 'Itera', logo: 'itera.png'},
    {name: 'Finn', logo: 'finn.png'},
    {name: 'Computas', logo: 'computas.png'},
    {name: 'Miles', logo: 'miles.png'},
    {name: 'Kodemaker', logo: 'kodemaker.png'},
    {name: 'Systek', logo: 'systek.png'},
    {name: 'JetBrains', logo: 'jetbrains.png'},
    {name: 'Conduct', logo: 'conduct.png'},
    {name: 'Mesan', logo: 'mesan.png'},
    {name: 'SANS Institute, EMEA', logo: 'sans-emea.png'},
    {name: 'Decisive', logo: 'decisive.png'},
    {name: 'Tripletex', logo: 'tripletex.png'},
    {name: 'BEKK', logo: 'bekk.png'},
    {name: 'Ciber', logo: 'ciber.png'},
    {name: 'NAV IKT', logo: 'nav.png'},
    {name: 'Capgemini', logo: 'capgemini.png'},
    {name: 'Accenture', logo: 'accenture.png'},
    {name: 'Skatteetaten', logo: 'skatteetaten.png'},
    {name: 'KnowIT', logo: 'knowit.png'},
    {name: 'Acando', logo: 'acando.png'},
    {name: 'Sopra Steria', logo: 'soprasteria.png'},
    {name: 'Nets', logo: 'nets.png'},
    {name: 'Webstep', logo: 'webstep.png'},
    {name: 'Politiet', logo: 'politiet.png'},
    {name: 'Kantega', logo: 'kantega.png'},
    {name: 'Visma', logo: 'visma.png'},
]).map(partner => (
    {name: partner.name, logo: getimage(images, partner.logo)}
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

const Partner = ({name, logo}) => (
    <li className='partners__logo'>
        <div className='partners__logo-link'>
            <img src={logo} className='partners__logo-image' alt={name} />
        </div>
    </li>
);

export default () => (
    <div className='page partners'>
        <div className='page__header page__header--centered' style={headerStyle}>
           <h1 className='page__title partners__title'>Join us as a partner</h1>
        </div>

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
                        our last partner meeting in Desember for a status update. English version coming soon.
                        <br />
                        <Link to='partner-presentation' className='page__link'>Slides in Norwegian</Link>
                    </P>
                </div>
            </div>
        </div>
    </div>
);