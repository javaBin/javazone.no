import header from '../assets/journeyzone.jpg';
import { Link } from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content, SubHeader } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const mainEntrance = 'https://www.google.com/maps/place/Oslo+Spektrum/@59.912985,10.754742,17z/data=!3m1!4b1!4m2!3m1!1s0x46416e61cee4e1bf:0xeaab41e737da924c?hl=en|https://www.google.com/maps/place/Oslo+Spektrum/@59.912985,10.754742,17z/data=!3m1!4b1!4m2!3m1!1s0x46416e61cee4e1bf:0xeaab41e737da924c?hl=en';
const spektrum = 'https://www.google.no/maps/place/Oslo+Spektrum/@59.912985,10.754742,17z/data=!3m1!4b1!4m2!3m1!1s0x46416e61cee4e1bf:0xeaab41e737da924c';

export default () => (
    <Page name='speaker-info'>
        <PageHeading background={header}>Hello, Speaker</PageHeading>

        <Container>
            <CenteredBlock>
                <CenteredHeader>It’s time to get ready.</CenteredHeader>
                <CenteredContent>
                    <p>
                        With JavaZone 2016 quickly approaching, it’s time to go over a few details to ensure you are ready. If you are having a workshop, lightning talk or presentation, this is for you.
                    </p>
                </CenteredContent>
            </CenteredBlock>

            <Block>
                <Header>Before The Conference</Header>
                <Content>
                    <SubHeader>The Essentials</SubHeader>
                    <p>
                        By now, you probably have all the essentials in place – traveling tickets if you come from out of town, and hotel. If not, it’s probably a good idea to get this fixed.
                    </p>

                    <SubHeader>Your Talk</SubHeader>

                    <p>
                        Your talk is listed in <Link to='/program'>the program</Link>. It is a good idea to find out when you are up already now. You might also want to read through the info listed to ensure that everything is correct.
                    </p>

                    <SubHeader>Your Slides</SubHeader>

                    <p>
                        You never know what might happen, so it is always a good idea to keep a backup of your talk somewhere else than your computer – memory stick, Dropbox or something similiar.
                    </p>

                    <SubHeader>Guided Tour</SubHeader>

                    <p>
                        Never been to JavaZone, or just curious to see the venue? We will have a guided tour for speakers at Tuesday September 6th, 18:00. Meet us at the <a href={mainEntrance}>main entrance</a>.
                    </p>

                    <SubHeader>Speakers Dinner</SubHeader>

                    <p>
                        This years speakers dinner will be held at INSERT_DINNER_LOCATION Tuesday September 6th, starting at 19:00. We will provide transport from Oslo Spektrum to Smelteverket after the guided tour ends at around 18:45. If you don’t want to attend the guided tour, it is perfectly possible to show up at INSERT_DINNER_LOCATION at 19:00 or later.
                    </p>
                </Content>
            </Block>

            <Block>
                <Header>During The Conference</Header>
                <Content>
                    <p>
                        The conference is, as always, located at <a href={spektrum}>Oslo Spectrum</a>. Regardless if you’re having a workshop, presentation or lightning talk, this is where you will be having it. For those of you who are new to Oslo – this is more or less in the heart of the city (well, not quite, but no more than a five minute walk from the main street!).
                    </p>

                    <p>
                        As a speaker, you have access to the <b>Speakers Lounge</b> in addition to the rest of Oslo Spektrum. This can be a good place to relax or look over your presentation a few times before you’re up.
                    </p>

                    <SubHeader>Your Presentation</SubHeader>

                    <p>
                        To ensure that everything goes as smooth as possible, everyone are asked to arrive at their designated presentation room <b>20 minutes</b> before the start of the session. In practice, this means that you should show up at the end of the session just before you. Each room has a technician that will help you with connecting your laptop to the projector, and with the microphone. Testing your laptop on the projector is especially important if you have a lightning talk – there won’t be time for big projector troubles during the talk.
                    </p>

                    <p>
                        If you are having a workshop the day before the conference (Tuesday, September 6th), we will meet you at the entrance and guide you to the workshop rooms. You should still meet <b>20 minutes</b> before the start of your workshop to get set up.
                    </p>

                    <SubHeader>Speakers Wall</SubHeader>

                    <p>
                        Don’t forget to drop by the javaBin stand and sign our "JavaZone 2016 Speakers Wall" sometime during the conference.
                    </p>

                    <SubHeader>Spread the Word!</SubHeader>

                    <p>
                        Help us spread the word by tweeting about your talk. Use the hashtag #JavaZone, and we’ll make sure to retweet you. We also publish the videos of your talk pretty fast after the conference, so please share this with your network as well.
                    </p>
                </Content>
            </Block>

            <Block>
                <Header>The Technical Stuff</Header>
            </Block>
        </Container>
    </Page>
);
