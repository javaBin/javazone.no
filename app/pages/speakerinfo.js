import header from '../assets/speakers.jpg';
import { Link } from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content, SubHeader } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const mainEntrance = 'https://www.google.com/maps/place/59°54\'46.3"N+10°45\'21.2"E/@59.9128594,10.7537001,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d59.912872!4d10.755896?hl=en';
const spektrum = 'https://www.google.no/maps/place/Oslo+Spektrum/@59.912985,10.754742,17z/data=!3m1!4b1!4m2!3m1!1s0x46416e61cee4e1bf:0xeaab41e737da924c';
const grilleriet = 'https://www.google.nl/maps/place/Grilleriet/@59.914207,10.7501658,19z/data=!4m5!3m4!1s0x0:0xf81cca154f0c6670!8m2!3d59.9141759!4d10.7507128?hl=en';

export default () => (
    <Page name='speaker-info'>
        <PageHeading background={header}>Hello, Speaker</PageHeading>

        <Container>
            <CenteredBlock>
                <CenteredHeader>It’s time to get ready.</CenteredHeader>
                <CenteredContent>
                    <p>
                        With JavaZone 2016 quickly approaching, it’s time to go over a few details to ensure you are ready. If you are holding a workshop, lightning talk or presentation, this is for you.
                    </p>
                </CenteredContent>
            </CenteredBlock>

            <Block>
                <Header>Before The Conference</Header>
                <Content>
                    <p>
                        By now, you probably have all the essentials in place – travel arrangements if you come from out of town, and hotel. If not, it’s probably a good idea to get this fixed.
                    </p>

                    <SubHeader>Your Talk</SubHeader>

                    <p>
                        Your talk is listed in <Link to='/program'>the program</Link>. It is a good idea to check your timeslot already now. You might also want to read through the info about your talk to ensure that everything is correct.
                    </p>

                    <SubHeader>Your Slides</SubHeader>

                    <p>
                        You never know what might happen, so it is always a good idea to keep a backup of your talk somewhere other than on your computer – for example memory stick, Dropbox or something similiar.
                    </p>

                    <SubHeader>Guided Tour</SubHeader>

                    <p>
                        Never been to JavaZone, want to check out the room you'll be speaking in, or just curious to see the venue? We will have a guided tour for speakers on Tuesday September 6th, 18:00. Meet us at the <a href={mainEntrance}>main entrance</a>.
                    </p>

                    <SubHeader>Speakers Dinner</SubHeader>

                    <p>
                        This years speakers dinner will be held at <a href='http://www.grilleriet.no/english/'>Grilleriet</a> (located at <a href={grilleriet}>Folketeaterpassasjen, Storgata 21</a>), on Tuesday September 6th, starting at 19:00. After the tour we’ll head straight for the Speakers Dinner, which is located less than 10 minutes walk from the JavaZone venue. If you don’t want to attend the guided tour, it is perfectly ok to show up at Grilleriet from 19:00 onwards. And it's no problem if you are a little late.
                    </p>
                    
                    <SubHeader>Cost coverage</SubHeader>

                    <p>
                        If you sucessfully applied for cost coverage, please send us a copy of your receipts <b>after</b> the conference to <a href="mailto:program@java.no">program@java.no</a>. If we agreed upon covering your expenses, we have reserved a room at <a href="http://www.thonhotels.com/de/hotels/lander/norwegen/oslo/thon-hotel-terminus/">Thon Hotel Terminus</a> for you. The room is prepayed and reserved on your name.
                    </p>
                    
                    <SubHeader>Visa invitation</SubHeader>

                    <p>
                        If you require an invitation for your visum, please contact us at <a href="mailto:program@java.no">program@java.no</a> and provide a brief instruction on any formailities of the invitation that you require.
                    </p>
                </Content>
            </Block>
        </Container>

        <div className='speaker-info__during'>
            <Container>
                <Block>
                    <Header>During The Conference</Header>
                    <Content>
                        <p>
                            The conference is, as always, located at <a href={spektrum}>Oslo Spektrum</a>. All sessions will take place here. For those of you who are new to Oslo – this is more or less in the heart of the city (no more than a five minute walk from the main street).
                        </p>

                        <p>
                            As a speaker, you have access to the <b>Speakers Lounge</b> in addition to the rest of Oslo Spektrum. This is a good place to relax or look over your presentation a few times before you’re up.
                        </p>

                        <SubHeader>Your Presentation</SubHeader>

                        <p>
                            To ensure that everything goes as smooth as possible, everyone is asked to arrive at their designated presentation room <b>20 minutes</b> before the start of the session. In practice, this means that you should show up at the end of the session just before yours. Each room has a technician who can help you with connecting your laptop to the projector, and also with your microphone. Testing your laptop on the projector is especially important if you have a lightning talk – there won’t be time for projector issues during the sessions.
                        </p>

                        <p>
                            If you are holding a workshop the day before the conference (Tuesday, September 6th), we will meet you at the entrance and guide you to the workshop rooms. You should still meet <b>20 minutes</b> before the start of your workshop to get set up.
                        </p>

                        <SubHeader>Speakers Wall</SubHeader>

                        <p>
                            Don’t forget to drop by the javaBin stand and sign our "JavaZone 2016 Speakers Wall" sometime during the conference.
                        </p>

                        <SubHeader>Spread the Word!</SubHeader>

                        <p>
                            Help us spread the word by tweeting about your talk. Use the hashtag #JavaZone, and we’ll make sure to retweet you. We will also publish the videos of your talk during or immediately after the conference, so please share these with your network as well.
                        </p>
                    </Content>
                </Block>
            </Container>
        </div>

        <Container>
            <Block>
                <Header>The Technical Stuff</Header>
                <Content>
                    <dl className='technical-stuff'>
                        <dt className='technical-stuff__term'>Computers</dt>
                        <dd className='technical-stuff__data'>You are encouraged to use your own computer for your presentation. Each room is configured to run presentations from both PCs and Macs. If you are planning on using anything else (for example tablets or phones), <b>please notify us</b>.</dd>
                        <dt className='technical-stuff__term'>Projectors</dt>
                        <dd className='technical-stuff__data'>The optimal screen resolution for the projectors are 1920x1080 (16/9 screen format), but other resolutions are of course supported. The video signal will be 60Hz in all auditoriums.</dd>
                        <dt className='technical-stuff__term'>Connectors</dt>
                        <dd className='technical-stuff__data'>The projectors support VGA, HDMI and DVI. If you need displayport or mini displayport, you probably want to bring your own adapter. Don’t hesitate to contact technicians or the staff if you have any problems.</dd>
                        <dt className='technical-stuff__term'>Internet</dt>
                        <dd className='technical-stuff__data'>What’s a conference without internet? The whole of Oslo Spektrum is equiped with wireless network (SSID: JavaZone 2016), and all auditoriums have cable network.</dd>
                        <dt className='technical-stuff__term'>Microphones</dt>
                        <dd className='technical-stuff__data'>Each room will have two headsets and one handheld microphone.</dd>
                        <dt className='technical-stuff__term'>Audio</dt>
                        <dd className='technical-stuff__data'>Each room is equipped with a 3.5″ audio jack. If you plan on using audio during your presentation it might also be a good idea to notify the technician.</dd>
                        <dt className='technical-stuff__term'>Water</dt>
                        <dd className='technical-stuff__data'>Although arguably not a technical point, each presentation room will have water available for the speaker.</dd>
                    </dl>
                </Content>
            </Block>

            <CenteredBlock>
                <CenteredHeader>More Info?</CenteredHeader>
                <CenteredContent>
                    <p>
                        If there’s anything you need answer to that is not covered here, don’t hesitate to <a href='mailto:javazone@java.no'>contact us</a>. You’ll find our details on the contact page. More general information about the conference can be found in the <Link to='/info'>information page</Link>.
                    </p>
                </CenteredContent>
            </CenteredBlock>
        </Container>
    </Page>
);
