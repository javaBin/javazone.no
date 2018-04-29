import header from '../assets/header_expo.jpg';
import pdf from '../assets/partnermote_april/partnermote.pdf';
import { Heading, LargeHeading, SmallHeading, Container } from '../components/page';
import Page from '../components/Page/Page';
import PageHeader from '../components/PageHeader/PageHeader';
import Button from '../components/Button/Button';
import { CenterBlock } from '../components/Block/Block';
import { Section } from '../components/Section/Section';
import { Block, Header, Content, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

const images = require.context('../assets/partnermote_april', true, /\.png$/);
const imageList = images.keys().map(image => images(image));

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const Image = (props) => (
    <img {...props} className='partner-presentation__slide' />
);

export default () => (
    <Page name='partner-presentation'>
        <PageHeader subHeader="Partnerpresentasjon">JavaZone</PageHeader>
        <Section>
            <CenterBlock>
                <P>
                    Nedenfor finner du presentasjonen som ble holdt på Teknologihuset<br />
                    onsdag 18. april.
                    <br />
                    Presentasjonen inneholder informasjon for partnere om JavaZone 2018.
                </P>
                <P>
                    Spørsmål? Kontakt oss på <a href='mailto:partner@java.no'>partner@java.no</a>.
                </P>
                <ul className='partner-presentation__sections'>
                    <li className='partner-presentation__link'>
                        <a href='#slide-3'>Faglig program</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-15'>Expo-området</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-20'>Den faglige arenaen</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-25'>AweZone</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-26'>Info/markedsføring</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-30'>Mattilbudet</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-33'>Partnerstands</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-36'>Konkurranse: Årets beste stand</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-39'>Frister</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-41'>Billetter</a>
                    </li>
                </ul>
            </CenterBlock>
        </Section>
        <Section fluid>
            <div className='partner-presentation__slides'>
                {imageList.map((image, index) => (
                    <Image src={image} key={index} id={`slide-${index}`}/>
                ))}
            </div>
        </Section>
        <Section>
            <CenterBlock>
                <Button link={pdf}>Last ned som PDF</Button>
            </CenterBlock>
            <CenterBlock header="Kontakt oss">
                <p>
                    JavaZone 2018 holdes i september 2018, men ta kontakt så snart som mulig
                    om du har noen tanker og idéer allerede nå. Vi jobber hardt for at alle
                    standplasseringene i Expo-området skal være godt plassert og ha en god dynamikk,
                    så om du har spesielle ønsker lønner det seg å være tidlig ute.
                </p>
                <p>
                    Send oss en e-post på <a href='mailto:partner@java.no'>partner@java.no</a>, så tar vi kontakt.
                </p>
            </CenterBlock>
        </Section>
    </Page>
);

