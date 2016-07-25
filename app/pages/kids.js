import { connect } from 'react-redux';
import { getWorkshops } from '../actions/workshops';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { Dl, Dt, Dd } from '../components/definition-list';
import header from '../assets/kids/kids_header2.jpg';
import mbot from '../assets/kids/mbot.jpg';
import codestudio from '../assets/kids/codestudio.jpg';
import minecraft from '../assets/kids/minecraft.jpg';
import raspberrypi from '../assets/kids/raspberrypi.jpg';
import { find } from 'lodash/fp';

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
        return 'Påmeldingen åpner fredag 5. august kl. 12.00';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'Meld deg på nå';
    case 'FEW_SPOTS': return 'Få plasser igjen, meld deg på nå';
    case 'FULL': return 'Påmelding m/ venteliste';
    case 'VERY_FULL': return 'Ingen ledige plasser';
    case 'CLOSED': return 'Påmelding stengt';
    default: return 'Påmeldingen åpner fredag 5. august kl. 12.00';
    }
}

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
        const wcodestudio = find({id: 'kids_codestudio'}, this.props.workshops);
        const wminecraft = find({id: 'kids_computercraft'}, this.props.workshops);
        const wrobot = find({id: 'kids_robot'}, this.props.workshops);
        const wraspberry = find({id: 'kids_rasberry'}, this.props.workshops);

        return (
            <Page name='kids'>
                <PageHeading background={header}>JavaZone Kids</PageHeading>
                <Container>
                    <Block block={true}>
                        <BlockHeading center={true}>En smakebit på JavaZone for fremtidens utviklere</BlockHeading>
                        <Columns>
                            <Column justify={true}>
                                <P>
                                    JavaZone inviterer alle deltakere på JavaZone
                                    til å ta med seg sine barn på Teknologihuset
                                    søndag 4. september for å gi dem en smakebit på
                                    voksenlivet. Vi kjører 4 parallelle sesjoner,
                                    slik at vi har noe for både de aller minste
                                    barna og de største ungdommene.
                                </P>
                            </Column>
                            <Column justify={true}>
                                <P>
                                    Opplegget arrangeres i samarbeid med <a href='http://www.kidsakoder.no/'>Lær Kidsa Koding</a> som
                                    har lang erfaring med å arrangere kodeklubber for de
                                    minste, <a href='https://bitraf.no/'>Bitraf</a> som
                                    er Oslos fremste eksperter på bygging av kule ting,
                                    og <a href="https://kodegenet.no">Kodegenet</a> som til
                                    daglig arrangerer spennende og
                                    engasjerende kursopplegg for barn og unge.
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
                                        søndag 4. september fra klokken 12.00 til
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
                                        Vi har et begrenset antall plasser derfor er det viktig at
                                        du melder dere på arrangementet.
                                        Påmeldingen åpner fredag 5. august kl. 12.00.
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
                                <P>
                                    Påmeldingen åpner fredag 5. august kl. 12.00.
                                </P>
                            </Column>
                        </Columns>
                    </Block>

                    <Block>
                        <Column justify={true} dark={true}>
                            <ColumnHeading className='kids__event-title'>CodeStudio</ColumnHeading>
                            <span className='kids__age'>4-10 år</span>
                            <P>
                                Programmering med CodeStudio sine oppgaver for de aller yngste. Her vil vi ta i bruk <a href="https://code.org">Code.org</a> sine opplegg for Kodetimen. Dette vil bli en lett introduksjon som verken krever forkunnskaper i lesing eller matematikk.
                            </P>
                            <P>
                                Oppgavene finnes på <a href="https://studio.code.org">studio.code.org</a>.
                            </P>
                            <a className={`button ${workshopClass(wcodestudio)} kids__registrate`} href={workshopUrl(wcodestudio)}>
                                Påmeldingen åpner fredag 5. august kl. 12.00
                            </a>
                        </Column>
                        <Column>
                            <BackgroundImage src={codestudio} />
                        </Column>
                    </Block>

                    <Block>
                        <Column>
                            <BackgroundImage src={minecraft} />
                        </Column>
                        <Column justify={true} dark={true}>
                            <ColumnHeading className='kids__event-title'>ComputerCraft i Minecraft</ColumnHeading>
                            <span className='kids__age'>11+ år</span>
                            <P>
                                ComputerCraft er en mod til Minecraft, som lar deg bygge datamaskiner og roboter inne i spillet. Disse datamaskinene og robotene kan programmeres til å kontrollere dører, grave huler, bygge hus og så videre. ComputerCraft bruker programmeringsspråket Lua, som er et enkelt og fleksibelt tekstbasert programmeringsspråk. For å delta på dette kurset må deltagerne ha en Minecraft-konto.
                            </P>
                            <P>
                                <a href="http://kodeklubben.github.io/computercraft/installasjon/installasjon.html">Oppskrift for hvordan du installerer ComputerCraft</a>.
                            </P>
                            <a className={`button ${workshopClass(wminecraft)} kids__registrate`} href={workshopUrl(wminecraft)}>
                                Påmeldingen åpner fredag 5. august kl. 12.00
                            </a>
                        </Column>
                    </Block>

                    <Block>
                        <Column justify={true} dark={true}>
                            <ColumnHeading className='kids__event-title'>Lær å programmere roboter</ColumnHeading>
                            <span className='kids__age'>10-14 år</span>
                            <P>
                                Bygg og styr en <a href="http://makeblock.com/mbot-stem-educational-robot-kit-for-kids/">mBot</a> både med en app eller la den styre seg selv. Vi får roboten til å bruke motor, sensorer, lys og lyd mens vi lærer hvordan man kan styre den.
                            </P>
                            <P>
                                Se også <a href="https://www.youtube.com/watch?v=pmsSipper3Y">videoen som forklarer mBot</a>.
                            </P>
                            <P>
                                Vi bruker programmet <a href="http://www.mblock.cc">mBlock</a> som er basert på Scratch. Scratch ble laget på MIT for å lære barn å programmere.
                            </P>
                            <a className={`button ${workshopClass(wrobot)} kids__registrate`} href={workshopUrl(wrobot)}>
                                Påmeldingen åpner fredag 5. august kl. 12.00
                            </a>
                        </Column>
                        <Column>
                            <BackgroundImage src={mbot} />
                        </Column>
                    </Block>

                    <Block>
                        <Column>
                            <BackgroundImage src={raspberrypi} />
                        </Column>
                        <Column justify={true} dark={true}>
                            <ColumnHeading className='kids__event-title'>Raspberry Pi og Java</ColumnHeading>
                            <span className='kids__age'>12+ år</span>
                            <P>
                                Raspberry Pi er kanskje verdens aller kuleste mini-datamaskin. Datamaskinen kjører Linux, og kan dermed programmeres med alle verdens programmeringsspråk. I løpet av dette kurset skal vi programmere Raspberry Pi maskinen ved hjelp av Java og utviklerverktøyet Eclipse.
                            </P>
                            <P>
                                Vi starter med å lære det aller mest grunnleggende, hvordan vi bruker operativsystemet Raspian, og hvordan vi navigerer i filsystemet. Deretter skal vi ta frem litt elektroniske komponenter som koblingsbrett, LED lamper, knapper, motstandere og kanskje en motor og styre disse ved hjelp av Raspberry Pi maskinen.
                            </P>
                            <P>
                                Opplegget vil være basert på Raspberry Pi sidene til <a href="https://kodegenet.no">Kodegenet.no</a>.
                            </P>
                            <a className={`button ${workshopClass(wraspberry)} kids__registrate`} href={workshopUrl(wraspberry)}>
                                Påmeldingen åpner fredag 5. august kl. 12.00
                            </a>
                        </Column>
                    </Block>

                    <Block className='kids__greeting'>
                        <Column center={true}>
                            <ColumnHeading>Vi sees på Teknologihuset søndag 4. september!</ColumnHeading>
                            <P>
                                Vennlig hilsen,<br />javaBin, Lær Kidsa Koding, Bitraf & Kodegenet.
                            </P>
                        </Column>
                    </Block>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getWorkshops })(Kids);
