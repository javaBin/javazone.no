import { connect } from 'react-redux';
import { store } from '../store';
import { getWorkshops } from '../actions/workshops';
import { Page, PageHeading, PageBody } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { Dl, Dt, Dd } from '../components/definition-list';
import header from '../assets/kids/kids_header.jpg';
import cannybots from '../assets/kids/cannybots.jpg';
import codestudio from '../assets/kids/codestudio.jpg';
import minecraft from '../assets/kids/minecraft.jpg';
import processing from '../assets/kids/processing.jpg';

const workshopData = {
    kidsakodervaar2016cannybots: {
        description: [
            <span><a href='http://cannybots.com'>Cannybots</a> er leketøyroboter som du kan printe ut ved hjelp av en vanlig hjemme-3D-printer. Du kan styre den fra en telefon, nettbrett, PC eller til Raspberry Pi og programmere den ved hjelp av enkle programmeringsgrensesnitt. Barna skal begynne med litt grunnleggende programmering i Scratch. Kjør roboten frem, sving, kjør i ring osv.</span>,
            'Når de har gjort dette kan de få tilgang til eksisterende (og litt avanserte) programmer for autonom eller fjernstyrt kjøring. Vi går først i gjennom og forklarer hva programmet gjør. Deretter prøver vi litt og så ser vi på koden igjen for å se om barna ser sammenhengen mellom koden og hva roboten gjør.'
        ],
        age: '8 år +',
        image: cannybots,
        left: true
    },
    kidsakodervaar2016codestudio: {
        description: [
            'Programmering med CodeStudio sine oppgaver for de aller yngste. Her vil vi ta i bruk Code.org sine opplegg for Kodetimen. Dette vil bli en lett introduksjon som verken krever forkunnskaper i lesing eller matematikk.',
            <span>Oppgavene finnes på <a href='http://studio.code.org'>studio.code.org</a>.</span>
        ],
        age: '4-10 år',
        image: codestudio
    },
    kidsakodervaar2016minecraft: {
        description: [
            <span>ComputerCraft er en mod til Minecraft, som lar deg bygge datamaskiner og roboter inne i spillet. Disse datamaskinene og robotene kan programmeres til å kontrollere dører, grave huler, bygge hus og så videre. ComputerCraft bruker programmeringsspråket Lua, som er et enkelt og fleksibelt tekstbasert programmeringsspråk. For å delta på dette kurset må deltagerne ha en Minecraft-konto. <a href='https://github.com/kodeklubben/oppgaver/tree/master/src/computercraft'>Oppskrift for hvordan du installerer ComputerCraft</a>.</span>
        ],
        age: '10 år +',
        image: minecraft,
        left: true
    },
    kidsakodervaar2016processing: {
        description: [
            'Her ønskes ungdommene velkommen til et minikurs hvor de kan lære seg å programmere. Dette kurset er rettet mot nybegynnere og krever ingen forhåndskunnskaper. Målet for kurset er å gå gjennom noen viktige begreper innenfor programmering og at alle skal lære seg nok til å lage et visuelt program.',
            'Processing er et språk og utviklingsmiljø som gjør det enkelt å komme i gang med programmering. Det kan lastes ned via processing.org/download. Processing er basert på Java, så hvis du lærer deg Processing, så vil du indirekte lære deg litt Java.'
        ],
        age: '14 år +',
        image: processing
    }
};

function workshopUrl(id) {
    return `https://javazone.no/moosehead/#/register/${id}`;
}

function workshopClass(status) {
    switch (status) {
    case 'FREE_SPOTS': return 'button--green';
    case 'FEW_SPOTS': return 'button--yellow';
    case 'FULL': return 'button--red';
    case 'VERY_FULL': return 'button--red';
    case 'CLOSED': return 'button--disabled';
    default: return 'button--disabled';
    }
}

function workshopStatus(status) {
    switch (status) {
    case 'FREE_SPOTS': return 'Meld deg på nå';
    case 'FEW_SPOTS': return 'Få plasser igjen, meld deg på nå';
    case 'FULL': return 'Påmelding m/ venteliste';
    case 'VERY_FULL': return 'Ingen ledige plasser';
    case 'CLOSED': return 'Påmelding stengt';
    default: return 'Påmelding ikke åpnet';
    }
}

const LeftEvent = ({workshop}) => (
    <Block>
        <Column justify={true} dark={true}>
            <ColumnHeading className='kids__event-title'>{workshop.title}</ColumnHeading>
            <span className='kids__age'>{workshopData[workshop.id].age}</span>
            {workshopData[workshop.id].description.map((desc, dk) => (
                <P key={dk}>
                    {desc}
                </P>
            ))}
            <a href={workshopUrl(workshop.id)} className={`button ${workshopClass(workshop.status)} kids__registrate`}>
                {workshopStatus(workshop.status)}
            </a>
        </Column>
        <Column>
            <BackgroundImage src={workshopData[workshop.id].image} />
        </Column>
    </Block>
);

const RightEvent = ({workshop}) => (
    <Block>
        <Column>
            <BackgroundImage src={workshopData[workshop.id].image} />
        </Column>
        <Column justify={true} dark={true}>
            <ColumnHeading className='kids__event-title'>{workshop.title}</ColumnHeading>
            <span className='kids__age'>{workshopData[workshop.id].age}</span>
            {workshopData[workshop.id].description.map((desc, dk) => (
                <P key={dk}>
                    {desc}
                </P>
            ))}
            <a href={workshopUrl(workshop.id)} className={`button ${workshopClass(workshop.status)} kids__registrate`}>
                {workshopStatus(workshop.status)}
            </a>
        </Column>
    </Block>
);

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops
    };
}

const Kids = React.createClass({
    componentWillMount() {
        this.props.getWorkshops();
    },

    render() {
        const workshops = this.props.workshops;

        return (
            <Page name='kids'>
                <PageHeading background={header}>JavaZone Kids</PageHeading>
                <PageBody>
                    <Block block={true}>
                        <BlockHeading center={true}>A taste of JavaZone for young, aspiring developers</BlockHeading>
                        <Columns>
                            <Column justify={true}>
                                <P>
                                    JavaZone inviterer alle deltakere på JavaZone
                                    til å ta med seg sine barn på Teknologihuset
                                    søndag 13. mars for å gi dem en smakebit på
                                    voksenlivet. Vi kjører 4 parallelle sesjoner,
                                    slik at vi har noe for både de aller minste
                                    barna og de største ungdommene.
                                </P>
                            </Column>
                            <Column justify={true}>
                                <P>
                                    Opplegget arrangeres i samarbeid med <a href='http://www.kidsakoder.no/'>Lær Kidsa Koding</a> som
                                    har lang erfaring med å arrangere kodeklubber for de
                                    minste, og <a href='https://bitraf.no/'>Bitraf</a> som
                                    er Oslos fremste eksperter på bygging av kule ting.
                                </P>
                            </Column>
                        </Columns>
                    </Block>

                    <Block block={true}>
                        <BlockHeading center={true}>Praktisk</BlockHeading>
                        <Columns>
                            <Column justify={true}>
                                <Dl>
                                    <Dt>Tid og sted</Dt>
                                    <Dd>
                                        Arrangementet finner sted på Teknologihuset
                                        søndag 13. mars fra klokken 12.00 til
                                        15.00. Vi serverer enkel mat underveis. Det
                                        er viktig at du som forelder også setter av
                                        tid til å være til stede hele perioden. Vi
                                        lager en egen "foreldresone" med kaffe og
                                        kjører også en liten presentasjon fra de
                                        som står bak Lær Kidsa Koding, slik at du
                                        får litt mer informasjon om fremtidige
                                        muligheter.
                                    </Dd>
                                </Dl>
                            </Column>
                            <Column justify={true}>
                                <Dl>
                                    <Dt>Påmelding</Dt>
                                    <Dd>
                                        Vi har et begrenset antall plasser (totalt
                                        plass til 82 barn), derfor er det viktig at
                                        du melder dere på arrangementet.
                                        Påmeldingen åpner fredag 12.februar kl. 12.00.
                                    </Dd>
                                    <Dt>Forberedelser</Dt>
                                    <Dd>
                                        Noen av kursene vil kreve litt forberedelse,
                                        det vil bli sendt ut egen informasjon om
                                        dette pr. mail.
                                    </Dd>
                                </Dl>
                            </Column>
                        </Columns>
                    </Block>

                    <Block block={true}>
                        <BlockHeading center={true}>4 parallelle sesjoner</BlockHeading>
                        <Columns>
                            <Column center={true}>
                                <P>
                                    Vi kjører 4 parallelle sesjoner. Du kan lese mer om
                                    de ulike sesjonene under, og melde dere på den dere
                                    ønsker å delta på. Har du flere barn i forskjellige
                                    aldere som ønsker å være med på ulike sesjoner, så
                                    kan du melde deg på flere sesjoner – sørg i så fall
                                    for å melde på riktig antall barn til hver sesjon.
                                </P>
                            </Column>
                        </Columns>
                    </Block>

                    {workshops.map((workshop, key) => (
                        workshopData[workshop.id].left ? <LeftEvent workshop={workshop} key={key} /> : <RightEvent key={key} workshop={workshop} />
                    ))}

                    <Block className='kids__greeting'>
                        <Column center={true}>
                            <ColumnHeading>Vi sees på Teknologihuset søndag 13. mars!</ColumnHeading>
                            <P>
                                Vennlig hilsen,<br />javaBin, Lær Kidsa Koding og Bitraf.
                            </P>
                        </Column>
                    </Block>
                </PageBody>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getWorkshops })(Kids);
