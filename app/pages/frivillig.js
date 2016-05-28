import header from '../assets/frivillig.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content, SubHeader } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const CenteredButton = ({children}) => (
    <CenteredBlock>
        <CenteredContent>
            <p>
                <a href='#' className='button button--green button--big'>{children}</a>
            </p>
        </CenteredContent>
    </CenteredBlock>
);

export default () => (
    <Page name='journeyzone'>
        <PageHeading background={header}>Bli Frivillig!</PageHeading>

        <Container>
            <CenteredBlock>
                <CenteredHeader>Hjelp oss å arrangere en av Europas største IT-konferanser. Meld deg som frivillig!</CenteredHeader>
            </CenteredBlock>

            <Block>
                <Header>Hva er JavaZone?</Header>
                <Content>
                    <p>
                        Hvert år strømmer over 2000 utviklere til Oslo for å delta på JavaZone. I tillegg kommer over 150 foredragsholdere fra hele verden, pluss mennesker fra over 40 ulike partnere.
                    </p>
                    <p>
                        Har du lyst til å bidra til at disse 2.500 menneskene skal få en fantastisk opplevelse, og også få ta del i dette selv? Er du student høsten 2016? Perfekt! Du er akkurat den vi leter etter! Søk som frivillig på JavaZone 2016, og bli med å hjelpe oss å lage tidenes beste JavaZone!
                    </p>
                </Content>
            </Block>

            <CenteredButton>Meld deg som frivillig!</CenteredButton>

            <CenteredBlock className='frivillig__frist'>
                <CenteredContent>
                    Frist for å søke er X. juni 2016. Søknader mottatt etter dette<br />blir løpende vurdert dersom vi trenger flere frivillige.
                </CenteredContent>
            </CenteredBlock>

            <ul className='frivillig__questions'>
                <li className='frivillig__question'>
                    <div className='frivillig__header'>Hvem kan bli frivillig på JavaZone?</div>
                    <div className='frivillig__answer'>Alle studenter som behersker norsk og engelsk flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du hjertelig velkommen til å søke!</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header'>Hvor mange frivillige bidrar på JavaZone?</div>
                    <div className='frivillig__answer'>Hvert år deltar ca 50 frivillige på JavaZone. Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette hindre deg i å søke, prøv da vel!</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header'>Får jeg med meg noe faglig som frivillig?</div>
                    <div className='frivillig__answer'>Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du får derfor ca 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header'>Hva med reise hvis jeg ikke bor i Oslo?</div>
                    <div className='frivillig__answer'>JavaZone dekker ikke reise eller overnatting for frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi reisestøtte. Spør derfor instituttet/skolen din om dette.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header'>Får jeg bli med på AweZone?</div>
                    <div className='frivillig__answer'>Selvsagt får du det! JavaZone er ikke det samme uten! Her får du se 6 band og snakke med de kuleste folka i IT-bransjen! Ingen jobbing på kvelden – bare fest og morro =)</div></li>
                <li className='frivillig__question'>
                    <div className='frivillig__header'>I don’t speak norwegian… What about me?</div>
                    <div className='frivillig__answer'>Beeing a volunteer at JavaZone requires you to be fluent in both norwegian and english. This is because you are one of the main goto-people for 2500 guests.</div>
                </li>
            </ul>

            <CenteredButton>Meld deg som frivillig!</CenteredButton>

            <CenteredBlock className='frivillig__frist'>
                <CenteredContent>
                    Frist for å søke er X. juni 2016. Søknader mottatt etter dette<br />blir løpende vurdert dersom vi trenger flere frivillige.
                </CenteredContent>
            </CenteredBlock>
        </Container>
    </Page>
);