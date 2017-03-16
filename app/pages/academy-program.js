import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import nova from '../assets/academy/nova.jpg';
import acando from '../assets/partners-17/acando.svg';
import accenture from '../assets/partners-17/accenture.svg';
import capgemini from '../assets/partners-17/capgemini.svg';
import finn from '../assets/partners-17/finn.svg';
import kantega from '../assets/partners-17/kantega.svg';

const sponsorImages = {
    acando,
    accenture,
    capgemini,
    finn,
    kantega
};

const Slot = ({time, title, speaker}, key) => (
    <li className='program__slot' key={key}>
        <div className='program__hours'>{time}</div>
        <div className='program__info'>
            <div className='program__title'>{title}</div>
            {speaker ? <div className='program__speaker'>{speaker}</div> : <div></div>}
        </div>
    </li>
);

const Location = ({title, date, sponsors, program}) => () => (
    <Page name='academy-program'>
        <Heading>
            <LargeHeading>Hello, {title}</LargeHeading>
            <SmallHeading>JavaZone Academy</SmallHeading>
        </Heading>

        <Container>
            <CBlock>
                <CHeader>Welcome to JavaZone Academy {title}</CHeader>
                <CContent>
                    <P>
                        JavaZone Academy will be a day packed full of greate talks,
                        food and mingling. See the final program below, and start
                        getting excited!
                    </P>
                </CContent>
            </CBlock>

            <ul className='academy__sponsors academy__sponsors--small'>
                {sponsors.map((sponsor, key) => (
                     <li key={key} className={`academy__sponsor academy__sponsor--${sponsors.length}`}>
                         <img className='academy__sponsor-image' src={sponsorImages[sponsor]} />
                     </li>
                 ))}
            </ul>

            <ul className='program'>
                {program.map((slot, key) => Slot(slot, key))}
            </ul>
        </Container>
    </Page>
);

export default Location;
