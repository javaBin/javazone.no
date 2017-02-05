import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import Timeline from '../components/timeline';
import Youtube from '../components/youtube';
import partners1 from '../assets/partners_1.jpg';
import partners2 from '../assets/partners_2.jpg';
import partners3 from '../assets/partners_3.jpg';

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <P justify={true} className='format__description'>{props.description}</P>
    </li>
);

const lightnings = {
    icon: 'icon-energy',
    title: 'Lightning talks',
    length: '10 or 20 minutes',
    description: 'Are you presenting a great new idea, or want to give the audience a teaser for a cool topic? Then you should strongly consider the lightning talk format.  Note that the 10-20 minute time limit is strictly enforced!'
};

const presentations = {
    icon: 'icon-graduation',
    title: 'Presentations',
    length: '45 or 60 minutes',
    description: 'Presentations at JavaZone can be either 45 or 60 minutes long. This gives you room to elaborate on an idea. When submitting your talk, please indicate clearly in the outline how much time is reserved for questions.'
};

const workshops = {
    icon: 'icon-screen-desktop',
    title: 'Workshops',
    length: '2 hours, half a day, whole day',
    description: 'We will continue the popular workshop concept with a range of sessions on Tuesday September 12th. The format for the workshops is in-depth, hands-on and interactive.'
};

const Speakers = () => (
    <Page name='speakers'>
        <Heading>
            <LargeHeading>Call for Speakers</LargeHeading>
            <SmallHeading>Speak at JavaZone 2017</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='YsAQs9Yf4Mg'></Youtube>
        </Container>

        <Container>
            <CBlock>
                <CHeader>About JavaZone</CHeader>
                <CContent>
                    <P>
                        <br />
                        JavaZone takes place in Oslo, Norway, on September 13th-14th 2017. The conference offers a combination of technical talks and workshops in an informal atmosphere with an expected attendance of up to 3000 developers.
                    </P>
                    <P>
                        JavaZone 2017 will be the 2^4th consecutive JavaZone conference, and will consist of a day of workshops followed by two days of presentations. Last year's event was completely sold out, with more than 3000 attendees enjoying 173 talks covering a wide range of topics. JavaZone speakers include both internationally renowned speakers and home-grown Norwegian talent.
                    </P>
                </CContent>
            </CBlock>
            <CBlock>
                <CContent>
                    <P>
                        <a href='http://submit.javazone.no' className='button button--transparent'>
                            <span className='button__icon icon-check'></span> Submit your talk today!
                        </a>
                    </P>
                    <P>
                        <span className='speakers__lastdate'>The Call for Speakers are open until April 24th 2017</span>
                    </P>
                </CContent>
            </CBlock>

            <img className='partners__image' src={partners2} />

            <CBlock>
                <CHeader>What is it like speaking at JavaZone?</CHeader>
                <CContent>
                    <P>
                        <br />
                        Over the last decade JavaZone has grown to become one of the most important Java events in Europe! You can see for yourself – more than 1000 videos from previous years talks are available for free at <a href='https://vimeo.com/javazone'>Vimeo</a>, and the full program from JavaZone 2016 can be found on <a href='https://2016.javazone.no/program'>last year’s web page</a>.
                    </P>
                    <P>
                        We can brag as much as we want, but JavaZone would be nothing without all the great speakers! That's why we need your help to make sure that JavaZone 2017 will be at least as awesome as the earlier events. If you think you have something interesting to share, please submit your talk or workshop by April 24th 2017.
                    </P>
                    <P>
                        JavaZone is committed to diversity, and we are especially interested in quality submissions from groups traditionally under-represented in tech.
                    </P>
                </CContent>
            </CBlock>

            <img className='partners__image' src={partners1} />

            <CBlock>
                <div className='speakers__formats'>
                    <span className='icon-clock'></span>
                </div>
                <CHeader>Formats and Durations</CHeader>
                <CContent>
                    <P>
                        You should think about which format your talk will work
                        best in. Are you presenting a new idea, or do you require
                        more time to elaborate on your subject? How hands-on do
                        you want to be? We have three formats you can present
                        your material in.
                    </P>
                </CContent>
            </CBlock>

            <Block>
                <ul className='presentation-formats'>
                    <Format {...lightnings} />
                    <Format {...presentations} />
                    <Format {...workshops} />
                </ul>
            </Block>

            <Block>
                <Header>Audience and Topics</Header>
                <Content>
                    <P>
                        JavaZone is a conference for developers and technical architects, with an emphasis on technical talks. However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
                    </P>
                    <P>
                        Talks do not have to be about JVM technology. We will consider all talks based on their relevance to developers and technical architects.
                    </P>
                    <P>
                        We are always interested in Java technology and its applications, current trends in programming, and experience reports. Topics we would like to hear more about this year include:
                        <br /><br />
                        <ul className='speakers__list'>
                            <li>Front-end patterns and architectures.</li>
                            <li>Practical functional programming.</li>
                            <li>Machine learning, AI, deep learning.</li>
                            <li>Hacking, security, cryptography, blockchains.</li>
                            <li>...and, of course, your killer topic.</li>
                        </ul>
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>Get Some Inspiration</Header>
                <Content>
                    <dl className='speakers__inspiration'>
                        <dt className='speakers__inspiration-title'>Speakers workshop</dt>
                        <dd className='speakers__inspiration-description'>On the 7th of March we are hosting <a href="https://www.meetup.com/javaBin/events/237342945/">a workshop</a> for all those who are considering submitting a talk to JavaZone.</dd>
                        <dt className='speakers__inspiration-title'>Presentation skills workshop</dt>
                        <dd className='speakers__inspiration-description'>JavaZone has a strong tradition of nurturing local speaker talent. To help with this we arrange <a href="https://www.meetup.com/javaBin/events/237343752/">a presentation skills workshop</a> August 22nd. This workshop is held in Oslo and is free for all accepted speakers. This workshop will be held in Norwegian.</dd>
                    </dl>
                </Content>
            </Block>

            <Block>
                <Header>Get Feedback</Header>
                <Content>
                    <P>
                        This year, we are itching to try out a new feature in our submission system: Interactive feedback in the Call for Speakers phase. In short, early submissions may be considered as they arrive, and potentially receive feedback from the program committee. This includes feedback on points we find interesting, suggestions for changes and additions etc.
                    </P>
                    <P>
                        We also have a selfish motive. At JavaZone, we receive a huge number of submissions every year, and the workload faced by the program committee at the end of the Call for Speakers phase can be overwhelming. By encouraging early submissions, we hope to get ahead of the game this year.
                    </P>
                    <P>
                        Bottom line: The earlier you submit, the more likely you are to be noticed, and to receive considered and helpful feedback. Avoid drowning in the end-of-Call for Speakers tsunami! In addition, submissions received by March 27 will be in the draw for a special treat!
                    </P>
                </Content>
            </Block>

            <img className='partners__image' src={partners3} />

            <CBlock>
                <CHeader>Dates & Deadlines until JavaZone 2017</CHeader>
                <P>
                </P>
                <CContent>
                    <Timeline />
                </CContent>
            </CBlock>

            <Block>
                <Header>What’s in it for me?</Header>
                <Content>
                    <dl className='speakers__accepted'>
                        <dt className='speakers__accepted-title'>Accepted presentations and workshops</dt>
                        <dd className='speakers__accepted-description'>You get free admission to the conference. Additionally you are also invited to the speakers' dinner, held on September 12th. Finally, you have first priority on the limited number of slots for JourneyZone, our annual speaker adventure.</dd>
                        <dt className='speakers__accepted-title'>Accepted lightning talks</dt>
                        <dd className='speakers__accepted-description'>You are invited to the speakers' dinner, held on September 12th, and will also be invited to JourneyZone. You have to provide your own ticket to JavaZone.</dd>
                        <dt className='speakers__accepted-title'>Coverage of Expenses</dt>
                        <dd className='speakers__accepted-description'>Please see our <Link href='/speakers/monetary-policy' className='page__link'>monetary policy</Link> if you have any questions regarding coverage of other expenses.</dd>
                    </dl>
                </Content>
            </Block>

            <Block>
                <Header>Important principles</Header>
                <Content>
                    <P>
                        JavaZone is proud to be an independent and community-driven conference. It is organized by volunteers from javaBin (the Norwegian Java User Group) and is run as a non-profit organisation. This means that we have three important principles for selecting talks:
                    </P>
                    <ul className='speakers__list'>
                        <li className='speakers__principle'>We do not sell speaker slots.</li>
                        <li className='speakers__principle'>We do not accept sales pitches masked as presentations</li>
                        <li className='speakers__principle'>We do not differentiate between speakers from partners and independent speakers</li>
                    </ul>
                    <P>
                        If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                    </P>
                </Content>
            </Block>

            <CBlock>
                <CContent>
                    <P>
                        <a href='http://submit.javazone.no' className='button button--transparent'>
                            <span className='button__icon icon-check'></span>Submit your talk today!
                        </a>
                    </P>
                </CContent>
            </CBlock>

            <CBlock>
                    <CHeader>We hope to see you at JavaZone 2017 – please feel free to spread the word to your local community!</CHeader>
                <CContent>
                    <P className='speakers__regards'>
                        <br />
                        Best regards,<br />the JavaZone Program Committee
                    </P>
                </CContent>
            </CBlock>
        </Container>
    </Page>
);

export default Speakers;
