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
        <PageHeading background={header}>Partnerpresentasjon April</PageHeading>

        <Block>
            <Column center={true}>
                <ColumnHeading>Tittel</ColumnHeading>
                <P>Masse tekst</P>
            </Column>
        </Block>

        <Block>
            <Column center={true}>
                <ul className='partner-presentation__sections'>
                    <li className='partner-presentation__link'>
                        <a href='#slide-2'>Faglig Program</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-9'>JourneyZone 2016</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-10'>15 år</a>
                    </li>
                    <li className='partner-presentation__link'>
                        <a href='#slide-40'>...</a>
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