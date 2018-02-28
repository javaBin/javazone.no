//@flow
import * as React from 'react';
import { getWorkshops } from '../../actions/workshops';
import { Block, Content, SubHeader, P} from '../../components/block';
import { Section } from '../../components/Section/Section';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import george from '../../assets/kids/george.png';
import scratch from '../../assets/kids/scratch2.png';
import minecraft from '../../assets/kids/minecraft.png';
import kidsimage from '../../assets/kids/kids_header.jpg';
import './Kids.less';


const kidsInfo = {
    'kids_george': {
        background: george,
        age: '8+ år',
        description: 'Hils på Tom! Tom er en skilpadde. ' +
        'Tom lærer raskt, og er god på å følge instrukser. ' +
        'Han er dyktig med farger og bevegelse, og gjør stort sett alt du ber ham om. ' +
        'I løpet av 2 timer lære vi først å kommandere Tom. Vi får ham til å bevege seg og tegne det vi vil. ' +
        'Så lærer vi ham nye ord og kommandoer.  Og ja; han lærer gjerne ord på hvilket som helst språk. ' +
        'Vi kommer også til å lære hvordan man styrer flere skilpadder samtidig. Og har vi tid, så bygger vi ' +
        'til og med et spill. ' +
        'Deretter tar du med deg det du har lært hjem - for å fortsette å utvikle dine kunnskaper og ferdigheter. ' +
        'Og du må gjerne dele med venner og familie, på skolen, og online.',
        url: 'https://www.george.andante.no/',
    },
    'kids_scratch': {
        background: scratch,
        age: '8+ år',
        description: 'Scratch er et visuelt programmeringsspråk som er laget for at barn ' +
        'og unge skal lære seg grunnleggende programmering. Språket er oversatt til norsk, ' +
        'og en programmerer ved å dra og sette sammen blokker med kode. Dette kurset tar for ' +
        'seg hvordan Scratch kan introduseres til nybegynnere.',
        url: 'https://scratch.mit.edu',
    },
    'kids_minecraft': {
        background: minecraft,
        age: '11+ år',
        description: 'ComputerCraft er en mod til Minecraft, som lar deg bygge datamaskiner og ' +
        'roboter inne i spillet. Disse datamaskinene og robotene kan programmeres til å kontrollere ' +
        'dører, grave huler, bygge hus og så videre. ComputerCraft bruker programmeringsspråket Lua, ' +
        'som er et enkelt og fleksibelt tekstbasert programmeringsspråk. For å delta på dette kurset ' +
        'må deltagerne ha en Minecraft-konto.',
        url: 'http://oppgaver.kidsakoder.no/computercraft/installasjon/installasjon.html',
    }
};

type KidsProps = {
    workshops: object 
}

type SessionProps = {
    session: object,
}

type SessionListProps = {
    sessions: Array<object>
}

function SessionList(props: SessionListProps) {
    return (
        <div>
            <Header align="center">Sesjoner</Header>
            {props.sessions.map((session) => {
                return session.id.includes('kids') ? <Session key={session.id} session={session} /> : null
            })}
        </div>
    )
}

function Session(props: SessionProps) {
    if(!props.session) {
        return null;
    }

    const extraInfo = kidsInfo[props.session.id];

    return (
        <div className="kids-session-container">
            <LeftBlock centerHeader image={extraInfo.background} alternate header={props.session.title}>
                <div className="kids-session-content">
                    <p>
                        {extraInfo.description}
                    </p>
                </div>
                <div className="kids-session-buttons">
                    <Button alternate link={extraInfo.url}>Mer info</Button>
                    <Button alternate link={workshopUrl(props.session)}>Påmelding her</Button>
                </div>
            </LeftBlock>
        </div>
    )
};

class Kids extends React.Component<KidsProps> {

    constructor(props: KidsProps) {
        super(props);
    }

    render() {
        return (
            <Page name='javazone-kids'>
                <PageHeader subHeader="Spring Edition – 18. mars">JavaZone Kids 2018</PageHeader>  
                <Section>
                    <CenterBlock header="En smakebit på JavaZone for framtidens utviklere">
                        <P>
                            <br />
                            JavaZone inviterer alle, og spesielt deltakere på JavaZone,
                            til å ta med seg sine barn på Teknologihuset
                            søndag 18. mars for å gi dem en smakebit på
                            voksenlivet. Vi kjører 3 parallelle sesjoner,
                            slik at vi har noe for både de aller minste
                            og de litt eldre barna.
                        </P>
                        <P>
                            Opplegget arrangeres i samarbeid med <a href='http://www.kidsakoder.no/'>Lær Kidsa Koding</a> som
                            har lang erfaring med å arrangere kodeklubber for de
                            minste.
                        </P>
                    </CenterBlock>
                </Section>

                <ImageBlock image={kidsimage} alt="Kids page separator image" />

                <Section>
                    <LeftBlock header="Praktisk informasjon">
                        <Content>
                            <SubHeader>Tid & Sted</SubHeader>
                            <P>
                                Arrangementet finner sted på Teknologihuset
                                søndag 18. mars fra klokken 12.00 til
                                15.00. Vi serverer enkel mat underveis. Det
                                er viktig at du som forelder også setter av
                                tid til å være til stede hele perioden. Vi
                                lager en egen "foreldresone" med kaffe.
                            </P>
                            <SubHeader>Påmelding</SubHeader>
                            <P>
                                Vi har et begrenset antall plasser, derfor er det viktig at
                                du melder dine barn på arrangementet.
                                Påmeldingen åpner onsdag 28. februar kl. 12.00.
                            </P>
                            <SubHeader>Forberedelser</SubHeader>
                            <P>
                                Noen av kursene vil kreve litt forberedelse,
                                det vil bli sendt ut egen informasjon om
                                dette pr. mail.
                            </P>
                        </Content>
                    </LeftBlock>

                    <LeftBlock header="3 Parallelle Sesjoner">
                        <P>
                            Vi kjører 3 parallelle sesjoner. Du kan lese mer om
                            de ulike sesjonene under, og melde dere på den dere
                            ønsker å delta på. Har du flere barn i forskjellige
                            aldere som ønsker å være med på ulike sesjoner, så
                            kan du melde deg på flere sesjoner – sørg i så fall
                            for å melde på riktig antall barn til hver sesjon.
                        </P>
                        <P>
                            Påmeldingen åpner onsdag 28. februar kl. 12.00.
                        </P>
                    </LeftBlock>
                </Section>
                <Section pixel alternate>
                    <SessionList sessions={this.props.workshops} />
                </Section>
                <Section>
                    <CenterBlock header="Vi sees på Teknologihuset søndag 18. mars!">
                        <P>
                            Vennlig hilsen,<br />
                            javaBin og Lær Kidsa Koding
                        </P>
                    </CenterBlock>
                </Section>
            </Page>
        )
    }
}

function workshopUrl(workshop) {
    if (!workshop) {
        return '#';
    }
    return `https://moosehead.javazone.no/#/register/${workshop.id}`;
}

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops
    };
}

export default {
    component: connect(mapStateToProps)(Kids),
    action: getWorkshops
};


