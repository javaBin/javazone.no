import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';

const Konkurranse = () => (
    <Page name='konkurranse'>
        <Heading>
            <LargeHeading>Videokonkurranse</LargeHeading>
        </Heading>
        <Container>
            <CBlock>
                <P>
                    JavaZone er en internasjonal ledende IT-konferanse som
                    samler 3000 deltakere i Oslo Spektrum hver september.
                    Konferansen har gjennom over 15 år jobbet med en rekke
                    spennende markedsføringskanaler, og hadde en av de første
                    store virale kampanjene fra Norge med Java Forever i 2009
                    , totalt vist 4 millioner ganger. Gjennom årene har det
                    vært mange internasjonalt vellykkede kampanjer, se gjerne
                    noen av disse her
                    på <a href='http://ads.javazone.no'>ads.javazone.no</a>
                </P>
                <P>
                    Etter flere år med mange spennende kampanjer, vil vi ha
                    bidrag fra andre! Nå er tiden inne for en skikkelig
                    konkurranse blant studenter og andre nye aktører innen
                    film og reklame. Hvem går av med seieren?
                </P>
            </CBlock>

            <Youtube id='1JZnj4eNHXE'></Youtube>

            <Block>
                <Header>Konkurrer om premier opp til 200.000 NOK!</Header>
                <Content>
                    <P>
                        JavaZone inviterer kreative krefter fra studiemiljø i
                        hele landet til å konkurrere om årets kampanje. Det
                        vil være flere premier underveis på 10.000 NOK og
                        muligheten til å vinne hele 100.000 NOK i hovedpremie
                        til beste forslag dersom den blir offisiell kampanje.
                        En jury vil vurdere om kampanjen kan godkjennes som
                        offisiell markedsføringskampanje for JavaZone.
                        Godkjennes kampanjen for fullbredde markedsføring vil
                        den bli distribuert til 9000 mottakere ikke bare i
                        Norge, men også internasjonalt!
                    </P>
                </Content>
            </Block>

            <Youtube id='kLO1djacsfg'></Youtube>

            <Block>
                <Header>Målgruppe</Header>
                <Content>
                    <P>
                        Reklame- og filmstudenter fra institusjoner som: Westerdals,
                        Høgskolen i Hedmark, Noroff, Høgskolen i Volda, Treider 3D
                        og animasjon, Nordland kunst og filmfagskole, Høyskolen i
                        Kristiania, Høyskolen i Oslo og Akershus. Denne listen
                        ekskluderer ikke bidrag fra andre institusjoner og
                        aktører, men er kun til veiledning.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>Vinn – vinn!</Header>
                <Content>
                    <P>
                        For JavaZone er tanken at dette vil gi en ny vri på
                        reklamestuntene vi pleier å kjøre. Vi har laget disse
                        videoene i flere år nå, og begynner å kjenne på at vi
                        trenger hjelp til å fortsatt holde dem relevante.
                    </P>
                    <P>
                        Som student får du sjansen til å jobbe med en reell
                        kunde som når ut til mange folk. Det er mye heder og ære
                        i å lage disse videoene, og man får også betalt for
                        selve jobben.
                    </P>
                </Content>
            </Block>

            <Youtube id='3vI_7os2V_o'></Youtube>


            <Block>
                <Header>Hvordan delta?</Header>
                <Content>
                    <P>
                        Kampanjen går over to runder, med innlevering fra
                        bidragsyterne.
                    </P>

                    <SubHeader>Runde 1 – 15. desember til 15. februar</SubHeader>
                    <P>
                        JavaZone ønsker innsendte forslag (manus) fra alle som
                        ønsker å delta, med et par storyboards eller lignende,
                        samt beskrivelse på hvordan selve videoen er tenkt
                        gjennomført i praksis med tilgang til teknisk utstyr,
                        lokasjon osv.
                    </P>

                    <P>
                        Maktimalt 10 av de innsendte forslagene vil kunne gå
                        videre til runde 2. Alle som går videre får 10.000 NOK i
                        delpremie. Vi ser gjerne at noen av pengene går til å
                        dekke konstnader i runde 2, men her står vinnerne fritt
                        til å disponere.
                    </P>

                    <SubHeader>Runde 2 – 15. februar til 15. mai</SubHeader>
                    <P>
                        Alle som er videre etter runde 1 bearbeider videre sitt
                        forslag basert på tilbakemeldinger, og leverer video
                        basert på sitt innsendte forslag.
                    </P>

                    <P>
                        Kun seriøse prosjekter vil bli vurdert i denne runden,
                        det vil si at de innsendte bidragene må ha et realistisk
                        nivå av kvalitet for å kunne bli vurdert til
                        hovedpremien på 100.000 NOK. Dette nivået vil være
                        basert på utgangspunkt fra innsendere, og kommuniseres
                        til de som er valgt ut fra runde 1.
                    </P>

                    <P>
                        JavaZone velger til sist en vinner som får 50.000 NOK i
                        premie, for ikke å snakke om store mengder heder og ære.
                        En egen jury vil avgjøre om videoen også vil bli
                        benyttet som offisiell reklamevideo for JavaZone 2017.
                        Dersom en video velges ut til å være offisiell
                        reklamevideo vinner denne videoen i tillegg
                        50.000 NOK.
                    </P>

                    <SubHeader>Hvor sender jeg forslagene?</SubHeader>
                    <P>
                        Send forslag og eventuelle spørsmål til <a href="mailto:javazone+video@java.no" target="_top">javazone+video@java.no</a>.
                    </P>
                </Content>
            </Block>

            <CBlock>
                <CHeader>Se resten av videoene på <a href='http://ads.javazone.no'>ads.javazone.no</a></CHeader>
                <CContent>
                    <P>
                        Og ikke nøl med å sende inn forslag! Plutselig er
                        det <em>du</em> som står for reklamefilmen til JavaZone
                        2017!
                    </P>
                </CContent>
            </CBlock>
        </Container>
    </Page>
);

export default Konkurranse;
