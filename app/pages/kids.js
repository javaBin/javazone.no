import React from 'react';
import { connect } from 'react-redux';
import { getWorkshops } from '../actions/workshops';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import mbot from '../assets/kids/mbot.jpg';
import codestudio from '../assets/kids/codestudio.jpg';
import minecraft from '../assets/kids/minecraft.jpg';
import raspberrypi from '../assets/kids/raspberrypi.jpg';

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

const Kids = ({workshops}) => {
    const wcodestudio = find({id: 'kids_codestudio'}, workshops);
    const wminecraft = find({id: 'kids_computercraft'}, workshops);
    const wrobot = find({id: 'kids_robot'}, workshops);
    const wraspberry = find({id: 'kids_rasberry'}, workshops);
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
                            JavaZone inviterer alle deltakere på JavaZone
                            til å ta med seg sine barn på Teknologihuset
                            søndag 4. september for å gi dem en smakebit på
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
                            søndag 4. september fra klokken 12.00 til
                            15.00. Vi serverer enkel mat underveis. Det
                            er viktig at du som forelder også setter av
                            tid til å være til stede hele perioden. Vi
                            lager en egen "foreldresone" med kaffe og
                            kjører også en liten presentasjon fra de
                            som står bak Lær Kidsa Koding, slik at du
                            får litt mer informasjon om fremtidige
                            muligheter.
                        </P>
                        <SubHeader>Påmelding</SubHeader>
                        <P>
                            Vi har et begrenset antall plasser derfor er det viktig at
                            du melder dere på arrangementet.
                            Påmeldingen åpner fredag 5. august kl. 12.00.
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
                            Påmeldingen åpner fredag 5. august kl. 12.00.
                        </P>
                    </Content>
                </Block>
            </Container>
        </Page>
    );
};

export default {
    component: connect(mapStateToProps)(Kids),
    action: getWorkshops
};
