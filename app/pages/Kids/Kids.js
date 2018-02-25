//@flow
import * as React from 'react';
import { getWorkshops } from '../../actions/workshops';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import { Block, Content, SubHeader, P} from '../../components/block';
import { Link } from '../../components/link';
import { Section } from '../../components/Section/Section';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import george from '../../assets/kids/george.png';
import scratch from '../../assets/kids/scratch.jpg';
import { find } from 'lodash/fp';
import minecraft from '../../assets/kids/minecraft.jpg';
import kidsimage from '../../assets/kids/kids_header.jpg';
import './Kids.less';


const kidsInfo = {
    'kids_george': {
        background: george,
        age: '13+ år',
        title: 'Compose with code',
        odd: true
    },
    'kids_scratch': {
        background: scratch,
        age: '8+ år',
        title: 'Scratch',
        odd: false
    },
    'kids_minecraft': {
        background: minecraft,
        age: '11+ år',
        title: 'ComputerCraft i Minecraft',
        odd: true
    }
};

function workshopUrl(workshop) {
    if (!workshop) {
        return '#';
    }
    return `https://moosehead.javazone.no/#/register/${workshop.id}`;
}

type KidsProps = {
    workshops: object 
}

type KidsState = {
}

type SessionProps = {
    session: object,
    children: React.Node
}

function Session(props: SessionProps) {
    if(!props.session) {
        return null;
    }

    const extra = kidsInfo[props.session.id];
    const image = (
        <div className='kids__image'>
            <div className='background-image' style={{backgroundImage: `url(${extra.background})`}}></div>
        </div>
    );
    const info = (
        <div className={`kids__info kids__info--${extra.odd ? 'right' : 'left'}`}>
            <div className='kids__event-title blue'>{extra.title}</div>
            <div className='kids__age'>{extra.age}</div>
            {props.children}
            <a className={`button button--transparent kids_registrate`}
               href={workshopUrl(props.session)}>
            </a>
        </div>
    );


    return (
        <div className={ `kids__event ${!extra.odd ? 'kids__event--reverse' : ''}` }>
            {extra.odd ? image : info }
            {!extra.odd ? image : info}
        </div>
    );
};

class Kids extends React.Component<KidsProps, KidsState> {

    constructor(props: KidsProps) {
        super(props);
    }

    render() {
        
        const wgeorge = find({id: 'kids_george'}, this.props.workshops);
        const wscratch = find({id: 'kids_scratch'}, this.props.workshops);
        const wminecraft = find({id: 'kids_minecraft'}, this.props.workshops);

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
                            barna og de største ungdommene.
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

                    <div className="kids__separator"></div>

                    <Session session={wgeorge}>
                        <P>
                        Med Turtle Tom og Clojure programmeringsspråk, vil du være kreativ ved hjelp av George programmeringsplattform.
                        Ingen forkunnskaper kreves.                        
                        </P>
                        <P>
                        Turtle Geometry presents an innovative program of mathematical discovery that demonstrates
                        how the effective use of personal computers can profoundly change the nature of a student's contact with mathematics
                        </P>
                    </Session>

                    <Session session={wscratch}>
                        <P>
                            Scratch er et visuelt programmeringsspråk som er laget for at barn
                            og unge skal lære seg grunnleggende programmering. Språket er
                            oversatt til norsk, og en programmerer ved å dra og sette sammen blokker med kode.
                        </P>
                        <P>
                            Dette kurset tar for seg hvordan Scratch kan introduseres til nybegynnere;
                            veiledninger, tips, gode oppgaver, utfordringer osv. Sjekk ut kodeklubbens
                            læringsmateriell på <a href='https://kodeklubben.github.io/scratch'>kodeklubben.github.io/scratch</a>
                            og Scratch på <a href='https://scratch.mit.edu'>scratch.mit.edu</a>
                        </P>
                    </Session>

                    <Session session={wminecraft}>
                        <P>
                            ComputerCraft er en mod til Minecraft, som lar deg bygge datamaskiner og roboter inne i spillet.
                            Disse datamaskinene og robotene kan programmeres til å kontrollere dører, grave huler, bygge hus og så videre.
                            ComputerCraft bruker programmeringsspråket Lua, som er et enkelt og fleksibelt tekstbasert programmeringsspråk.
                            For å delta på dette kurset må deltagerne ha en Minecraft-konto. Oppskrift for hvordan du installerer ComputerCraft.
                        </P>
                    </Session>

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

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops
    };
}

export default {
    component: connect(mapStateToProps)(Kids),
    action: getWorkshops
};


