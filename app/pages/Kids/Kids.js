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
import george from '../../assets/kids/codestudio.jpg';
import scratch from '../../assets/kids/scratch.jpg';
import minecraft from '../../assets/kids/minecraft.jpg';
import kidsimage from '../../assets/kids/kids_header.jpg';
import './Kids.less';


const kidsInfo = {
    'kids_george': {
        background: george,
        age: '8+ år',
    },
    'kids_scratch': {
        background: scratch,
        age: '8+ år',
    },
    'kids_minecraft': {
        background: minecraft,
        age: '11+ år',
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
        <div className="academy-item-container">
            <Grid>
                <Row center="xs">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row around="xs">
                            {props.sessions.map((session) => {
                                return session.id.includes('kids') ? <Session key={session.id} session={session} /> : null
                            })}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

function Session(props: SessionProps) {
    if(!props.session) {
        return null;
    }

    const extraInfo = kidsInfo[props.session.id];

    return (
        <Col xs={12} sm={12} md={12} lg={4}>
            <Row center="xs">
                <div className="kids-session-title">
                    <h1>{props.session.title}</h1>
                </div>
            </Row>
            <Row center="xs">
                <div className='kids-session-image' style={{backgroundImage: `url('${extraInfo.background}')`}}>
                </div>
            </Row>
            <Row className="academy-item-location" center="xs">
                <p className="kids-session-desc">
                    {props.session.description}
                </p>
            </Row>
            <Row middle="xs" center="xs">
                <div className="kids-session-button">
                    <Button margin target alternate link={workshopUrl(props.session)}>Påmelding her</Button>
                </div>
            </Row>
        </Col>
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

                    <CenterBlock header="Vi sees på Teknologihuset søndag 18. mars!">
                        <P>
                            Vennlig hilsen,<br />
                            javaBin og Lær Kidsa Koding
                        </P>
                    </CenterBlock>
                </Section>
                <Section pixel alternate>
                    <SessionList sessions={this.props.workshops} />
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


