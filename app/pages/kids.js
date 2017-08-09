import React from 'react';
import { connect } from 'react-redux';
import { getWorkshops } from '../actions/workshops';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import sonicpi from '../assets/kids/sonicpi.png';
import scratch from '../assets/kids/scratch.jpg';
import appinventor from '../assets/kids/appinventor.png';
import { find } from 'lodash/fp';
import kidsimage from '../assets/kids.png';

const kidsInfo = {
    'kids_sonicpi': {
        background: sonicpi,
        age: '13+ år',
        title: 'Compose with code',
        odd: true
    },
    'kids_scratch': {
        background: scratch,
        age: '10+ år',
        title: 'Scratch',
        odd: false
    },
    'kids_appinventor': {
        background: appinventor,
        age: '11+ år',
        title: 'Komme igang med App Inventor',
        odd: true
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
    case 'FEW_SPOTS': return 'button--orange';
    case 'FULL': return 'button--pink';
    case 'VERY_FULL': return 'button--pink';
    case 'CLOSED': return 'button--disabled';
    default: return 'button--disabled';
    }
}

function workshopStatus(workshop) {
    if (!workshop) {
        return 'Påmelding 21. august kl. 12.00';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'Meld deg på nå';
    case 'FEW_SPOTS': return 'Få plasser igjen, meld deg på';
    case 'FULL': return 'Påmelding m/ venteliste';
    case 'VERY_FULL': return 'Ingen ledige plasser';
    case 'CLOSED': return 'Påmelding stengt';
    default: return 'Påmelding 21. august kl. 12.00';
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
    const image = (
        <div className='kids__image'>
            <div className='background-image' style={{backgroundImage: `url(${extra.background})`}}></div>
        </div>
    );
    const info = (
        <div className={`kids__info kids__info--${extra.odd ? 'right' : 'left'}`}>
            <div className='kids__event-title blue'>{extra.title}</div>
            <div className='kids__age'>{extra.age}</div>
            {children}
            <a className={`button button--transparent ${workshopClass(session)} kids_registrate`}
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
    const wsonicpi = find({id: 'kids_sonicpi'}, workshops);
    const wscratch = find({id: 'kids_scratch'}, workshops);
    const wappinventor = find({id: 'kids_appinventor'}, workshops);
    return (
        <Page name='kids'>
            <Heading>
                <LargeHeading>JavaZone Kids</LargeHeading>
                <SmallHeading>10. sept 2017</SmallHeading>
            </Heading>

            <img className='kids__largeimage' src={kidsimage} />

            <Container>
                <CBlock>
                    <CHeader><span className="green">En smakebit på JavaZone for framtidens utviklere</span></CHeader>
                    <CContent>
                        <P>
                            <br />
                            JavaZone inviterer alle, og spesielt deltakere på JavaZone,
                            til å ta med seg sine barn på Teknologihuset
                            søndag 10. september for å gi dem en smakebit på
                            voksenlivet. Vi kjører 4 parallelle sesjoner,
                            slik at vi har noe for både de aller minste
                            barna og de største ungdommene.
                        </P>
                        <P>
                            Opplegget arrangeres i samarbeid med <a href='http://www.kidsakoder.no/'>Lær Kidsa Koding</a> som
                            har lang erfaring med å arrangere kodeklubber for de
                            minste.
                        </P>
                    </CContent>
                </CBlock>

                <Block>
                    <Header><span className="pink">Praktisk Informasjon</span></Header>
                    <Content>
                        <SubHeader>Tid & Sted</SubHeader>
                        <P>
                            Arrangementet finner sted på Teknologihuset
                            søndag 10. september fra klokken 12.00 til
                            15.00. Vi serverer enkel mat underveis. Det
                            er viktig at du som forelder også setter av
                            tid til å være til stede hele perioden. Vi
                            lager en egen "foreldresone" med kaffe.
                        </P>
                        <SubHeader>Påmelding</SubHeader>
                        <P>
                            Vi har et begrenset antall plasser, derfor er det viktig at
                            du melder dine barn på arrangementet.
                            Påmeldingen åpner mandag 21. august kl. 12.00.
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
                    <Header><span className="orange">3 Parallelle Sesjoner</span></Header>
                    <Content>
                        <P>
                            Vi kjører 3 parallelle sesjoner. Du kan lese mer om
                            de ulike sesjonene under, og melde dere på den dere
                            ønsker å delta på. Har du flere barn i forskjellige
                            aldere som ønsker å være med på ulike sesjoner, så
                            kan du melde deg på flere sesjoner – sørg i så fall
                            for å melde på riktig antall barn til hver sesjon.
                        </P>
                        <P>
                            Påmeldingen åpner mandag 21. august kl. 12.00.
                        </P>
                    </Content>
                </Block>

                <div className="kids__separator"></div>

                <Session session={wsonicpi}>
                    <P>
                       Lær å kode ved å komponere musikk! Sonic Pi er en open-source programmeringverktoy utviklet av Dr Sam Aaron,
                       designet for å utforske og undervise programmeringskonsepter gjennom prosessen med å skape nye lyder.
                    </P>
                    <P>
                       Merk: Dette vil bli presentert på engelsk! Sonic Pi programvære finnes på <a href="http://sonic-pi.net/">sonic-pi.net</a>.
                    </P>
                </Session>

                <Session session={wscratch}>
                    <P>
                        Scratch er et visuelt programmeringsspråk som er laget for at barn
                        og unge skal lære seg grunnleggende programmering. Språket er
                        oversatt til norsk, og en programmerer ved å dra og sette sammen blokker med kode.
                    </P>
                    <P>
                        Dette kurset tar for seg hvordan Scratch kan introduserer til nybegynnere;
                        veiledninger, tips, gode oppgaver, utfordringer osv. Sjekk ut kodeklubbens
                        læringsmateriell på <a href='https://kodeklubben.github.io/scratch'>kodeklubben.github.io/scratch</a>
                        og Scratch på <a href='https://scratch.mit.edu'>scratch.mit.edu</a>
                    </P>
                </Session>

                <Session session={wappinventor}>
                    <P>
                        App Inventor er et programmeringsmiljø som brukes for å lage apps til Android-telefoner og nettbrett.
                    </P>
                    <P>
                        For å lage apps med MIT App Inventor bygger man sammen klosser på samme måte som i Scratch.
                        Det er derfor en fordel med litt erfaring fra Scratch før du begynner med dette.
                        Skjekk ut MIT App Inventor pa <a href='http://appinventor.mit.edu'>appinventor.mit.edu</a>.
                    </P>
                </Session>

                <CBlock>
                    <CHeader>
                        Vi sees på Teknologihuset søndag 10. september!
                    </CHeader>
                    <CContent>
                        <P>
                            Vennlig hilsen,<br />
                            javaBin og Lær Kidsa Koding
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
