import React from 'react';
import { LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Page from '../components/Page/Page';
import { Section } from '../components/Section/Section';
import { CenterBlock } from '../components/Block/Block';
import PageHeader from '../components/PageHeader/PageHeader';
import teknologihuset from '../assets/academy/teknologihuset.jpg';
import kvarteret from '../assets/academy/kvarteret.jpg';
import uit from '../assets/academy/tromso.jpg';
import acando from '../assets/partners-18/acando.svg';
import accenture from '../assets/partners-18/accenture.svg';
import ambita from '../assets/partners-18/ambita.svg';
import capra from '../assets/partners-18/capra.svg';
import finn from '../assets/partners-18/finn.svg';
import kantega from '../assets/partners-18/kantega.svg';
import miles from '../assets/partners-18/miles.svg';
import tripletex from '../assets/partners-18/tripletex.svg';


const sponsorImages = {
    acando,
    accenture,
    ambita,
    capra,
    finn,
    kantega,
    miles,
    tripletex
};

const Slot = ({time, title, speaker}, key) => (
    <li className='program__slot' key={key}>
        <div className='program__hours'>{time}</div>
        <div className='program__info'>
            <div className='program__title'>{title}</div>
            {speaker ? <div className='academy-program-table-speaker'>{speaker}</div> : <div></div>}
        </div>
    </li>
);

const Location = ({title, date, sponsors, program}) => () => (
    <Page name='academy-program'>
        <PageHeader subHeader="JavaZone Academy">Hello, {title}</PageHeader>
        <Section>
            <CenterBlock header="Welcome to JavaZone Academy">
                <p>
                    JavaZone Academy will be a day packed full of greate talks,
                    food and mingling. See the final program below, and start
                    getting excited!
                </p>
            </CenterBlock>
        </Section>
        <Section>
            <ul className='academy__sponsors academy__sponsors--small'>
                {sponsors.map((sponsor, key) => (
                    <li key={key} className={`academy__sponsor academy__sponsor--${sponsors.length}`}>
                        <img className='academy__sponsor-image' src={sponsorImages[sponsor]} />
                    </li>
                ))}
            </ul>
        </Section>
        <Section dark>
            <ul className='academy-program-table'>
                {program.map((slot, key) => Slot(slot, key))}
            </ul>
        </Section>
    </Page>
);

export default Location;