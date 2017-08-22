import header from '../assets/frivillig.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

import speakers1 from '../assets/speakers_1.jpg';
import speakers2 from '../assets/speakers_2.jpg';
import speakers3 from '../assets/speakers_3.jpg';

const mainEntrance = 'https://www.google.com/maps/place/59°54\'46.3"N+10°45\'21.2"E/@59.9128594,10.7537001,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d59.912872!4d10.755896?hl=en';
const spektrum = 'https://www.google.no/maps/place/Oslo+Spektrum/@59.912985,10.754742,17z/data=!3m1!4b1!4m2!3m1!1s0x46416e61cee4e1bf:0xeaab41e737da924c';
const paleet = 'https://www.google.com/maps/place/Paleet/@59.914552,10.7354293,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e7d75b0c803:0x1714c0c8a04da331!8m2!3d59.914552!4d10.737618?hl=en';


export default () => (
    <Page name='journeyzone'>

        <Heading>
            <LargeHeading>Hello, Speaker</LargeHeading>
            <SmallHeading>It’s time to get ready.</SmallHeading>
        </Heading>

        <Container>

            <Block>
                <Header><span className='pink'>We have collected some practical info for you here</span></Header>
                <Content>
                    <p>
                        With JavaZone 2017 quickly approaching, it’s time to go over a few details to ensure you are ready. If you are holding a workshop, lightning talk or presentation, then this information is for you.
                    </p>
                </Content>
            </Block>

            <img className='partners__image' src={speakers1} />

            <CBlock>
                <CHeader>Before the Conference</CHeader>
                <p>
                    By now, you probably have all the essentials in place – travel arrangements if you are coming from out of town, and a place to stay. If not, it’s probably a good idea to get this fixed.
                </p>
            </CBlock>

            <ul className='frivillig__questions'>
                <li className='frivillig__question'>
                    <div className='frivillig__header orange'>Your Talk</div>
                    <div className='frivillig__answer'>
                        Your talk is listed in <a href='/program'>the program</a>. It is a good idea to check your timeslot already now. You might also want to read through the info about your talk to ensure that everything is correct.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header green'>Your Slides</div>
                    <div className='frivillig__answer'>
                        You never know what might happen, so it is always a good idea to keep a backup of your talk somewhere other than on your computer – for example on a memory stick, in Dropbox or somewhere similiar.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header pink'>Guided Tour</div>
                    <div className='frivillig__answer'>
                        Never been to JavaZone, want to check out the room you’ll be speaking in, or just curious to see the venue? We will have a guided tour for speakers on Tuesday September 12th, 18:00. Meet us at the <a href={mainEntrance}>main entrance</a>.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header blue'>Speakers Dinner</div>
                    <div className='frivillig__answer'>
                        This years speakers dinner will be held at <a href='http://www.restaurantpaleet.no'>Paleet</a> (located at <a href={paleet}>Karl Johans gate 37</a>), on Tuesday September 12th, starting at 19:00. After the tour we’ll head straight for the Speakers Dinner, which is located less than 15 minutes walk from the JavaZone venue. If you don’t want to attend the guided tour, it is perfectly ok to show up at Paleet from 19:00 onwards. And it’s no problem if you are a little late.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header orange'>Cost Coverage</div>
                    <div className='frivillig__answer'>
                        If you sucessfully applied for cost coverage, please <a href="mailto:program@java.no">send us</a> a copy of your receipts <b>after</b> the conference. If we agreed upon covering your expenses we have reserved a room at <a href="http://www.thonhotels.com/de/hotels/lander/norwegen/oslo/thon-hotel-terminus/">Thon Hotel Terminus</a> on your name. The room is prepaid, simply arrive at the hotel and check-in before the conference.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header green'>Visa invitation</div>
                    <div className='frivillig__answer'>
                        If you require an invitation for a Schengen visa, please <a href="mailto:program@java.no">contact us</a> and provide a brief instruction on any formailities of the invitation that you require.
                    </div>
                </li>
            </ul>

            <img className='partners__image' src={speakers2} />

            <CBlock>
                <CHeader>During The Conference</CHeader>
                <p>
                    The conference is, as always, located at <a href={spektrum}>Oslo Spektrum</a>. All sessions will take place here. For those of you who are new to Oslo – this is more or less in the heart of the city (no more than a five minute walk from the main street).
                </p>
                <p>
                    As a speaker, you have access to the <b>Speakers Lounge</b> in addition to the rest of Oslo Spektrum. This is a good place to relax or look over your presentation a few times before you’re up.
                </p>
            </CBlock>

            <ul className='frivillig__questions'>
                <li className='frivillig__question'>
                    <div className='frivillig__header orange'>Your Presentation</div>
                    <div className='frivillig__answer'>
                        To ensure that everything goes as smooth as possible, everyone is asked to arrive at their designated presentation room <b>20 minutes</b> before the start of the session. In practice, this means that you should show up at the end of the session just before yours. Each room has a technician who can help you with connecting your laptop to the projector, and also fit you with a microphone. Testing your laptop on the projector is especially important if you have a lightning talk – there won’t be time for projector issues during these sessions.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header green'>Holding a Workshop?</div>
                    <div className='frivillig__answer'>
                        If you are holding a workshop the day before the conference (Tuesday, September 12th), we will meet you at the entrance and guide you to the workshop rooms. You should still meet <b>20 minutes</b> before the start of your workshop to get set up.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header pink'>Speakers Wall</div>
                    <div className='frivillig__answer'>
                        Don’t forget to drop by the javaBin stand and sign our "JavaZone 2017 Speakers Wall" sometime during the conference.
                    </div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header blue'>Spread the Word!</div>
                    <div className='frivillig__answer'>
                        Help us spread the word by tweeting about your talk. Use the hashtag #JavaZone, and we’ll make sure to retweet you. We will also publish the videos of your talk during or immediately after the conference, so please share these with your network as well.
                    </div>
                </li>
            </ul>

            <img className='partners__image' src={speakers3} />

            <CBlock>
                <CHeader>The Technical Stuff</CHeader>
            </CBlock>

            <ul className='frivillig__questions'>
                <li className='frivillig__question'>
                    <div className='frivillig__header orange'>Computers</div>
                    <div className='frivillig__answer'>You are encouraged to use your own computer for your presentation. Each room is configured to run presentations from both PCs and Macs. If you are planning on using anything else (for example tablets or phones), <b>please notify us</b>.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header green'>Projectors</div>
                    <div className='frivillig__answer'>The optimal screen resolution for the projectors are 1920x1080 (16/9 screen format), but other resolutions are of course supported. The video signal will be 60Hz in all auditoriums.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header pink'>Connectors</div>
                    <div className='frivillig__answer'>The projectors support VGA, HDMI and DVI. If you need displayport or mini displayport, you probably want to bring your own adapter. Don’t hesitate to contact technicians or the staff if you have any problems.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header blue'>Internet</div>
                    <div className='frivillig__answer'>What’s a conference without internet? The whole of Oslo Spektrum is equiped with wireless network (SSID: JavaZone), and all auditoriums have cable network.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header orange'>Microphones</div>
                    <div className='frivillig__answer'>Each room will have two headsets and one handheld microphone.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header green'>Audio</div>
                    <div className='frivillig__answer'>Each room is equipped with a 3.5″ audio jack. If you plan on using audio during your presentation it might also be a good idea to notify the technician.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header pink'>Water</div>
                    <div className='frivillig__answer'>Although arguably not a technical point, each presentation room will have water available for the speaker.</div>
                </li>
            </ul>

            <CBlock>
                <CHeader>More Info?</CHeader>
                <p>
                    If there’s anything you need answer to that is not covered here, don’t hesitate to <a href='mailto:javazone@java.no'>contact us</a>. You’ll find our details on the contact page. More general information about the conference can be found in the <a href='/info'>information page</a>.
                </p>
            </CBlock>

        </Container>
    </Page>
);
