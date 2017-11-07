import header from '../assets/header_expo.jpg';
import { Page, Heading, LargeHeading, SmallHeading, Container } from '../components/page';
import { Block, Header, Content, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

const images = require.context('../assets/expo', true, /\.png$/);
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
            <LargeHeading>JavaZone 2017<br />Expo Area</LargeHeading>
        </Heading>
        <Container>
            <CBlock>
                <CContent>
                    <P>
                        Each year we try to make the Expo Area at JavaZone a lively place.
                        Due to the unique layout and varied types of stands, no parts of the Expo are boring.
                    </P>
                    <P>
                        These schematics show the layout for JavaZone 2017. As a partner, you get to pick from
                        the shown stands, based on your selected stand type. Each partner gets to select their
                        prefered stand based on the order in which they signed up as a partner. Partners signing
                        up before January 2nd have been assigned a random ordering. We'll contact you when it's
                        your turn to select your stand.
                    </P>
                    <P>
                        Have any questions? Contact us on <a href='mailto:partner@java.no'>partner@java.no</a>.
                    </P>
                </CContent>
            </CBlock>
            <div className='partner-presentation__slides'>
                {imageList.map((image, index) => (
                    <Image src={image} key={index} id={`slide-${index}`}/>
                ))}
            </div>
            <CBlock>
                <CContent>
                    <CHeader>Color codes for the stands</CHeader>
                </CContent>
            </CBlock>
            <div className='table--expo'>
                <table className='table'>
                    <tbody>
                        <tr className='table__row gray'>
                            <td className='table__data'>Regular stands (6 square meters)</td>
                            <td className='table__data'>Gray</td>
                        </tr>
                        <tr className='table__row green'>
                            <td className='table__data'>Double stands (12 square meters)</td>
                            <td className='table__data'>Green</td>
                        </tr>
                        <tr className='table__row black'>
                            <td className='table__data'>Restaurant stands (108 square meters)</td>
                            <td className='table__data'>Black</td>
                        </tr>
                        <tr className='table__row red'>
                            <td className='table__data'>Concept stands (70 square meters)</td>
                            <td className='table__data'>Red</td>
                        </tr>
                        <tr className='table__row blue'>
                            <td className='table__data'>javaBin Area (the event organizer's space)</td>
                            <td className='table__data'>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    </Page>
);
