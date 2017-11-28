import header from '../assets/header_expo.jpg';
//import pdf from '../assets/partnermote_april/partnermote.pdf'; <---
import { Page, Heading, LargeHeading, SmallHeading, Container } from '../components/page';
import { Block, Header, Content, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

const images = require.context('../assets/partnermote_april', true, /\.jpg$/);
const imageList = images.keys().map(image => images(image));

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const Image = (props) => (
    <img {...props} className='partner-presentation__slide' />
);

export default () => (
    <Page name='partner-presentation'>
        <Heading>
            <LargeHeading>JavaZone<br />Partnerpresentasjon</LargeHeading>
        </Heading>
        <Container>
            <CBlock>
                <CContent>
                    <P>
                        Nedenfor finner du presentasjonen som ble holdt på Teknologihuset<br />
                        onsdag 19. april.
                        <br />
                        Presentasjonen inneholder informasjon for partnere om JavaZone 2017.
                    </P>
                    <P>
                        Spørsmål? Kontakt oss på <a href='mailto:partner@java.no'>partner@java.no</a>.
                    </P>
                    <ul className='partner-presentation__sections'>
                        <li className='partner-presentation__link'>
                            <a href='#slide-3'>Faglig program</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-17'>Expo-området</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-23'>Den faglige arenaen</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-27'>AweZone</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-29'>Info/markedsføring</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-32'>Mattilbudet</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-34'>Partnerstands</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-37'>Konkurranse: Årets beste stand</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-40'>Frister</a>
                        </li>
                        <li className='partner-presentation__link'>
                            <a href='#slide-41'>Billetter</a>
                        </li>
                    </ul>
                </CContent>
            </CBlock>
            <div className='partner-presentation__slides'>
                {imageList.map((image, index) => (
                    <Image src={image} key={index} id={`slide-${index}`}/>
                ))}
            </div>
            <CBlock>
                <CContent>
                    <P>
                        <a href={pdf} className='button button--transparent'>Last ned som PDF</a>
                    </P>
                </CContent>
            </CBlock>
            <CBlock>
                <CContent>
                    <CHeader>Kontakt oss</CHeader>
                    <P>
                        JavaZone 2017 holdes i september 2017, men ta kontakt så snart som mulig
                        om du har noen tanker og idéer allerede nå. Vi jobber hardt for at alle
                        standplasseringene i Expo-området skal være godt plassert og ha en god dynamikk,
                        så om du har spesielle ønsker lønner det seg å være tidlig ute.
                    </P>
                    <P>
                        Send oss en e-post på <a href='mailto:partner@java.no'>partner@java.no</a>, så tar vi kontakt.
                    </P>
                </CContent>
            </CBlock>
        </Container>
    </Page>
);
