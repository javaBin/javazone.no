import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import nova from '../assets/academy/nova.jpg';

const Slot = ({time, title, speaker}, key) => (
    <li className='program__slot' key={key}>
        <div className='program__hours'>{time}</div>
        <div className='program__info'>
            <div className='program__title'>{title}</div>
            {speaker ? <div className='program__speaker'>{speaker}</div> : <div></div>}
        </div>
    </li>
);

const Location = ({title, date, program}) => () => (
    <Page name='academy-program'>
        <Heading>Hello, {title}</Heading>

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

            <ul className='program'>
                {program.map((slot, key) => Slot(slot, key))}
            </ul>
        </Container>
    </Page>
);

export default Location;
