import header from '../assets/frivillig.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

const CenteredButton = ({children}) => (
    <CBlock>
    <CContent>
        <p>
        <a href='http://bit.ly/jzf2017' className='button button--transparent' target='_blank'>{children}</a>
        </p>
    </CContent>
    </CBlock>
);

export default () => (
    <Page name='journeyzone'>

    <Heading>
        <LargeHeading>Bli frivillig på JavaZone</LargeHeading>
        <SmallHeading>Meld deg på i dag</SmallHeading>
    </Heading>

    <Container>

        <Block>
        <Header><span className='pink'>Hva er JavaZone?</span></Header>
        <Content>
            <p>
            Hvert år strømmer nesten 3000 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 200 foredragsholdere fra hele verden, pluss mennesker fra 50 ulike partnere.
            </p>
            <p>
            Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del i dette selv? Er du student høsten 2017? Perfekt! Du er akkurat den vi leter etter! Søk som frivillig på JavaZone 2017, og bli med å hjelpe oss å lage tidenes beste JavaZone!
            </p>
        </Content>
        </Block>

        <CenteredButton>Meld deg som frivillig!</CenteredButton>

        <ul className='frivillig__questions'>
        <li className='frivillig__question'>
            <div className='frivillig__header green'>Hvem kan bli frivillig på JavaZone?</div>
            <div className='frivillig__answer'>Alle studenter som behersker norsk og engelsk flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du hjertelig velkommen til å søke!</div>
        </li>
        <li className='frivillig__question'>
            <div className='frivillig__header green'>Hvor mange frivillige bidrar på JavaZone?</div>
            <div className='frivillig__answer'>Hvert år deltar over 50 frivillige på JavaZone. Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette hindre deg i å søke, prøv da vel!</div>
        </li>
        <li className='frivillig__question'>
            <div className='frivillig__header orange'>Får jeg med meg noe faglig som frivillig?</div>
            <div className='frivillig__answer'>Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du får ca 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.</div>
        </li>
        <li className='frivillig__question'>
            <div className='frivillig__header orange'>Hva med reise hvis jeg ikke bor i Oslo?</div>
            <div className='frivillig__answer'>JavaZone dekker ikke reise eller overnatting for frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi reisestøtte. Spør derfor instituttet/skolen din om dette.</div>
        </li>
        <li className='frivillig__question'>
            <div className='frivillig__header blue'>Får jeg bli med på AweZone?</div>
            <div className='frivillig__answer'>Selvsagt får du det! JavaZone er ikke det samme uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen jobbing på kvelden – bare fest og morro =)</div></li>
        <li className='frivillig__question'>
            <div className='frivillig__header blue'>I don’t speak norwegian… What about me?</div>
            <div className='frivillig__answer'>Beeing a volunteer at JavaZone requires you to be fluent in both norwegian and english. This is because you are one of the main goto-people for 3000 guests.</div>
        </li>
        </ul>

        <CenteredButton>Meld deg som frivillig!</CenteredButton>
    </Container>
    </Page>
);