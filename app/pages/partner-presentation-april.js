import header from '../assets/header_expo.jpg';
import { Page, PageHeading } from '../components/page';
import { Block, Column, ColumnHeading, P } from '../components/textblock';

const images = require.context('../assets/partnermote-april', true, /\.jpeg$/);
const imageList = images.keys().map(image => images(image));

const Image = (props) => (
    <img {...props} className='partner-presentation__slide' />
);

export default () => (
    <Page name='presentation-april'>
        <PageHeading background={header}>JavaZone Partnerpresentasjon</PageHeading>

        <Block>
            <Column center={true}>
                <ColumnHeading>Presentasjon fra partnermøte 7. april 2016</ColumnHeading>
                <P>Nedenfor finner du presentasjonen som ble holdt på JavaZone's partnermøte på Teknologihuset 7. april 2016.</P>
                <P>Ta kontakt på <a href="mailto:partner@java.no">partner@java.no</a> om du ønsker å diskutere noe av dette med oss.</P>
            </Column>
        </Block>

        <Block>
            <Column center={true}>
                <ul className='partner-presentation__sections'>
                    <li className='partner-presentation__link'>
                        <a href='#slide-2'>Faglig program</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-11'>Deltakerundersøkelse</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-15'>Expo-området</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-21'>Den faglige arenaen</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-24'>AweZone</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-27'>Info/markedsføring</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-31'>Mat-tilbudet</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-36'>Partnerstands</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-45'>Standplassering</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-49'>Huskeliste</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-51'>Deltakerbilletter</a>
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