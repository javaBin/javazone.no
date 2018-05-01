import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { SubHeader, Header } from '../../components/Header/Header';
import { LeftBlock, CenterBlock, ImageBlock } from '../../components/Block/Block';
import Button from '../../components/Button/Button';
//import header_img from '../assets/frivillig.jpg';
import './Frivillig.less';

type FrivilligProps = {
}

function Frivillig(props: FrivilligProps) {
    return (
        <Page name='frivillig'>
            <PageHeader subHeader="Meld deg på i dag!">Bli frivillig på JavaZone</PageHeader>
            <Section>
                <LeftBlock header="Hva er JavaZone?">
                    <p>
                        Hvert år strømmer over 3100 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 200 foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere.
                    </p>
                    <p>
                        Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del i dette selv?
                        Er du student høsten 2018? 
                        Perfekt! Du er akkurat den vi leter etter! 
                        Søk som frivillig på JavaZone 2018, og bli med å hjelpe oss å lage tidenes beste JavaZone!
                    </p>
                </LeftBlock>
                <CenterBlock>
                    <p>
                        <a className='button button--transparent' href="http://bit.ly/jzf2018">Meld deg som frivillig!</a>
                    </p>
                </CenterBlock>
            </Section>

            <Section>
                <ul className='frivillig__questions'>
                    <li className='frivillig__question'>
                        <div className='frivillig__header'>Hvem kan bli frivillig på JavaZone?</div>
                        <div className='frivillig__answer'>Alle studenter som behersker norsk og engelsk flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du hjertelig velkommen til å søke!</div>
                    </li>
                    <li className='frivillig__question'>
                        <div className='frivillig__header'>Hvor mange frivillige bidrar på JavaZone?</div>
                        <div className='frivillig__answer'>Hvert år deltar over 50 frivillige på JavaZone. Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette hindre deg i å søke, prøv da vel!</div>
                    </li>
                    <li className='frivillig__question'>
                        <div className='frivillig__header'>Får jeg med meg noe faglig som frivillig?</div>
                        <div className='frivillig__answer'>Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du får ca 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.</div>
                    </li>
                    <li className='frivillig__question'>
                        <div className='frivillig__header'>Hva med reise hvis jeg ikke bor i Oslo?</div>
                        <div className='frivillig__answer'>JavaZone dekker ikke reise eller overnatting for frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi reisestøtte. Spør derfor instituttet/skolen din om dette.</div>
                    </li>
                    <li className='frivillig__question'>
                        <div className='frivillig__header'>Får jeg bli med på AweZone?</div>
                        <div className='frivillig__answer'>Selvsagt får du det! JavaZone er ikke det samme uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen jobbing på kvelden – bare fest og morro =)</div></li>
                    <li className='frivillig__question'>
                        <div className='frivillig__header'>I don’t speak Norwegian… What about me?</div>
                        <div className='frivillig__answer'>Beeing a volunteer at JavaZone requires you to be fluent in both Norwegian and English. This is because you are one of the main goto-people for 3100 guests.</div>
                    </li>
                </ul>
            </Section>

            <Section>
                <CenterBlock>
                    <p>
                        <a className='button button--transparent' href="http://bit.ly/jzf2018">Meld deg som frivillig!</a>
                    </p>
                </CenterBlock>
            </Section>
        </Page>
    )
}

export default Frivillig;

