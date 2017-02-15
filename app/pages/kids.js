import React from 'react';
import { connect } from 'react-redux';
import { getWorkshops } from '../actions/workshops';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import mbot from '../assets/kids/mbot.jpg';
import codestudio from '../assets/kids/codestudio.jpg';
import minecraft from '../assets/kids/minecraft.jpg';
import arduino from '../assets/kids/arduino.jpg';
import { find } from 'lodash/fp';

const kidsInfo = {
    'kids_codestudio': {
        background: codestudio,
        age: '4-10 år',
        title: 'Codestudio',
        odd: true
    },
    'kids_computercraft': {
        background: minecraft,
        age: '11+ år',
        title: 'ComputerCraft i Minecraft',
        odd: false
    },
    'kids_robot': {
        background: mbot,
        age: '10-14år',
        title: 'Lær å programmere roboter',
        odd: true
    },
    'kids_arduino': {
        background: arduino,
        age: '12+ år',
        title: 'Kreativ Elektronikk med Arduino',
        odd: false
    }
};

function workshopUrl(workshop) {
    if (!workshop) {
        return '#';
    }
    return `https://javazone.no/moosehead/#/register/${workshop.id}`;
}

function workshopClass(workshop) {
    if (!workshop) {
        return 'button--disabled';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'button--green';
    case 'FEW_SPOTS': return 'button--yellow';
    case 'FULL': return 'button--red';
    case 'VERY_FULL': return 'button--red';
    case 'CLOSED': return 'button--disabled';
    default: return 'button--disabled';
    }
}

function workshopStatus(workshop) {
    if (!workshop) {
        return 'Påmeldingen åpner mandag 20. februar kl. 12.00';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'Meld deg på nå';
    case 'FEW_SPOTS': return 'Få plasser igjen, meld deg på nå';
    case 'FULL': return 'Påmelding m/ venteliste';
    case 'VERY_FULL': return 'Ingen ledige plasser';
    case 'CLOSED': return 'Påmelding stengt';
    default: return 'Påmeldingen åpner mandag 20. februar kl. 12.00';
    }
}

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops
    };
}

const Session = ({session, children}) => {
    if (!session) {
        return null;
    }

    const extra = kidsInfo[session.id];
    console.log(extra.odd);
    const image = (
        <div className='kids__image'>
            <div className='background-image' style={{backgroundImage: `url(${extra.background})`}}></div>
        </div>
    );
    const info = (
        <div className={`kids__info kids__info--${extra.odd ? 'right' : 'left'}`}>
            <div className='kids__event-title'>{extra.title}</div>
            <div className='kids__age'>{extra.age}</div>
            {children}
            <a className={`button ${workshopClass(session)} kids_registrate`}
               href={workshopUrl(session)}>
                {workshopStatus(session)}
            </a>
        </div>
    );

    return (
        <div className='kids__event'>
            {extra.odd ? image : info }
            {!extra.odd ? image : info}
        </div>
    );
};

const Kids = ({workshops}) => {
    const wcodestudio = find({id: 'kids_codestudio'}, workshops);
    const wminecraft = find({id: 'kids_computercraft'}, workshops);
    const wrobot = find({id: 'kids_robot'}, workshops);
    const warduino = find({id: 'kids_arduino'}, workshops);
    return (
        <Page name='kids'>
            <Heading>
                <LargeHeading>JavaZone Kids</LargeHeading>
            </Heading>

            <Container>
                <CBlock>
                    <CHeader>En smakebit på JavaZone for framtidens utviklere</CHeader>
                    <CContent>
                        <P>
                            JavaZone inviterer alle, og spesielt deltakere på JavaZone,
                            til å ta med seg sine barn på Teknologihuset
                            søndag 19. mars for å gi dem en smakebit på
                            voksenlivet. Vi kjører 4 parallelle sesjoner,
                            slik at vi har noe for både de aller minste
                            barna og de største ungdommene.
                        </P>
                        <P>
                            Opplegget arrangeres i samarbeid med <a href='http://www.kidsakoder.no/'>Lær Kidsa Koding</a> som
                            har lang erfaring med å arrangere kodeklubber for de
                            minste, <a href='https://bitraf.no/'>Bitraf</a> som
                            er Oslos fremste eksperter på bygging av kule ting,
                            og <a href="https://kodegenet.no">Kodegenet</a> som til
                            daglig arrangerer spennende og
                            engasjerende kursopplegg for barn og unge.
                        </P>
                    </CContent>
                </CBlock>

                <Block>
                    <Header>Praktisk</Header>
                    <Content>
                        <SubHeader>Tid & Sted</SubHeader>
                        <P>
                            Arrangementet finner sted på Teknologihuset
                            søndag 19. mars fra klokken 12.00 til
                            15.00. Vi serverer enkel mat underveis. Det
                            er viktig at du som forelder også setter av
                            tid til å være til stede hele perioden. Vi
                            lager en egen "foreldresone" med kaffe.
                        </P>
                        <SubHeader>Påmelding</SubHeader>
                        <P>
                            Vi har et begrenset antall plasser derfor er det viktig at
                            du melder dere på arrangementet.
                            Påmeldingen åpner mandag 20. februar kl. 12.00.
                        </P>
                        <SubHeader>Forberedelser</SubHeader>
                        <P>
                            Noen av kursene vil kreve litt forberedelse,
                            det vil bli sendt ut egen informasjon om
                            dette pr. mail.
                        </P>
                    </Content>
                </Block>

                <Block>
                    <Header>4 Parallelle Sesjoner</Header>
                    <Content>
                        <P>
                            Vi kjører 4 parallelle sesjoner. Du kan lese mer om
                            de ulike sesjonene under, og melde dere på den dere
                            ønsker å delta på. Har du flere barn i forskjellige
                            aldere som ønsker å være med på ulike sesjoner, så
                            kan du melde deg på flere sesjoner – sørg i så fall
                            for å melde på riktig antall barn til hver sesjon.
                        </P>
                        <P>
                            Påmeldingen åpner mandag 20. februar kl. 12.00.
                        </P>
                    </Content>
                </Block>

                <Session session={wcodestudio}>
                    <P>
                        Programmering med CodeStudio sine oppgaver for de aller
                        yngste. Her vil vi ta i bruk <a href="https://code.org">Code.org</a>
                        sine opplegg for Kodetimen. Dette vil bli en lett
                        introduksjon som verken krever forkunnskaper i lesing
                        eller matematikk.
                    </P>
                    <P>
                        Oppgavene finnes på <a href="https://studio.code.org">studio.code.org</a>.
                    </P>
                </Session>

                <Session session={wminecraft}>
                    <P>
                        ComputerCraft er en mod til Minecraft, som lar deg
                        bygge datamaskiner og roboter inne i spillet.
                        Disse datamaskinene og robotene kan programmeres til
                        å kontrollere dører, grave huler, bygge hus og så videre.
                        ComputerCraft bruker programmeringsspråket Lua, som er
                        et enkelt og fleksibelt tekstbasert programmeringsspråk.
                        For å delta på dette kurset må deltagerne ha en
                        Minecraft-konto.
                    </P>
                    <P>
                        <a href="http://kodeklubben.github.io/computercraft/installasjon/installasjon.html">Oppskrift for hvordan du installerer ComputerCraft</a>.
                    </P>
                </Session>

                <Session session={wrobot}>
                    <P>
                        Bygg og styr en <a href="http://makeblock.com/mbot-stem-educational-robot-kit-for-kids/">mBot</a> både med en app eller la den styre seg selv. Vi får roboten til å bruke motor, sensorer, lys og lyd mens vi lærer hvordan man kan styre den.
                    </P>
                    <P>
                        Se også <a href="https://www.youtube.com/watch?v=pmsSipper3Y">videoen som forklarer mBot</a>.
                    </P>
                </Session>

                <Session session={warduino}>
                    <P>
                        Ved å lære enkel programmering lærer man å bli kreativ med et
                        av de kraftigste arbeidsverktøyene vi har i dag.
                    </P>
                    <P>
                        Arduino gjør det mulig å styre alt fra en LED-dimmer
                        til en 3D-printer. I dette tretimerskurset skal vi
                        lære mer om hva en Arduino er og hva elektronikk kan
                        brukes til. Men aller viktigst - vi skal lære å få lamper
                        til å blinke, vi skal måle temperaturen i rommet -
                        og kanskje vi rekker å få en motor til å rotere!
                    </P>
                </Session>

                <CBlock>
                    <CHeader>
                        Vi sees på Teknologihuset søndag 19. mars!
                    </CHeader>
                    <CContent>
                        <P>
                            Vennlig hilsen,<br />
                            javaBin, Lær Kidsa Koding, Bitraf og Kodegenet
                        </P>
                    </CContent>
                </CBlock>
            </Container>
        </Page>
    );
};

export default {
    component: connect(mapStateToProps)(Kids),
    action: getWorkshops
};
