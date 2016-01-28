import header from '../assets/header_expo.jpg';
import pdf from '../assets/partnermote/2016-partnermote1.pdf';

const images = require.context('../assets/partnermote', true, /\.jpeg$/);
const imageList = images.keys().map(image => images(image));

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const Image = (props) => (
    <img {...props} className='partner-presentation__slide' />
);

export default () => (
    <div className='page partner-presentation'>
        <div className='page__header page__header--centered' style={headerStyle}>
            <h1 className='page__title'>JavaZone Partner Presentation</h1>
        </div>
        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <p>
                    Nedenfor finner du presentasjonen som ble holdt på Teknologihuset torsdag 3. desember.
                    <br />
                    Presentasjonen inneholder informasjon for partnere om JavaZone 2016.
                </p>
                <p>
                    Spørsmål? Kontakt oss på <a href='mailto:partner@java.no'>partner@java.no</a>.
                </p>
                <ul className='partner-presentation__sections'>
                    <li className='partner-presentation__link'>
                        <a href='#slide-0'>JavaZone 2015</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-13'>Programmet 2016</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-25'>Partnerskap & Muligheter</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-40'>JavaZone Academy</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-48'>Kontaktinformasjon</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className='partner-presentation__slides'>
            {imageList.map((image, index) => (
                <Image src={image} key={index} id={`slide-${index}`}/>
            ))}
        </div>

        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <p>
                    <a href={pdf} className='button'>Last ned partnerpresentasjon</a>
                </p>
            </div>
        </div>

        <div className='textblock textblock--centered'>
            <div className='textblock--centered__text'>
                <h2 className='textblock__title'>Kontakt oss</h2>
                <p>
                    JavaZone 2016 holdes i september 2016, men ta kontakt så snart som mulig
                    om du har noen tanker og idéer allerede nå. Vi jobber hardt for at alle
                    standplasseringene i Expo-området skal være godt plassert og ha en god dynamikk,
                    så om du har spesielle ønsker lønner det seg å være tidlig ute.
                </p>
                <p>
                    Send oss en e-post på <a href='mailto:partner@java.no'>partner@java.no</a>, så tar vi kontakt.
                </p>
            </div>
        </div>
    </div>
);
