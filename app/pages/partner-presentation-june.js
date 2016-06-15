import header from '../assets/header_expo.jpg';
import { Page, PageHeading } from '../components/page';
import { Block, Column, ColumnHeading, P } from '../components/textblock';
import pdf from '../assets/partnermote-june/2016-partnermote3.pdf';

const images = require.context('../assets/partnermote-june', true, /\.jpeg$/);
const imageList = images.keys().map(image => images(image));

const Image = (props) => (
    <img {...props} className='partner-presentation__slide' />
);

export default () => (
    <Page name='presentation-june'>
        <PageHeading background={header}>JavaZone Partnerpresentasjon</PageHeading>

        <Block>
            <Column center={true}>
                <ColumnHeading>Presentasjon fra partnermøte 15. juni 2016</ColumnHeading>
                <P>Nedenfor finner du presentasjonen som ble holdt på JavaZone’s partnermøte på Teknologihuset 15. juni 2016.</P>
                <P>Ta kontakt på <a href="mailto:partner@java.no">partner@java.no</a> om du ønsker å diskutere noe av dette med oss.<br /><br /></P>
                <P><a href={pdf} className='button button--red button--big'>Last ned partnerpresentasjon som PDF</a></P>
            </Column>
        </Block>

        <Block>
            <Column center={true}>
                <ul className='partner-presentation__sections'>
                    <li className='partner-presentation__link'>
                        <a href='#slide-2'>Faglig program</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-10'>JourneyZone</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-12'>Expo-området</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-17'>Den faglige arenaen</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-21'>AweZone</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-24'>Info/markedsføring</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-28'>Mat-tilbudet</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-32'>Partnerstands</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-40'>Standplassering</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-44'>Veien videre</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-48'>Huskeliste</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-54'>Billetter</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-57'>Oppsummering</a>
                    </li>
                </ul>
            </Column>
        </Block>

        <div className='partner-presentation__slides'>
            {imageList.map((image, index) => (
                <Image src={image} key={index} id={`slide-${index}`}/>
            ))}
        </div>
    </Page>
);