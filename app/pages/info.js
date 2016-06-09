import Map from '../components/map';
import header from '../assets/header_sal1.jpg';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content, SubHeader } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import Youtube from '../components/youtube';

const Included = (props) => (
    <li className='included__item'>
        <div className={`included__item-icon ${props.icon}`}></div>
        <div className='included__item-title'>{props.title}</div>
        <div className='included__item-content'>{props.content}</div>
    </li>
);

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <p justify={true} className='format__description'>{props.description}</p>
    </li>
);

const formats = [
    {
        icon: 'icon-energy',
        title: 'Lightning talks',
        length: '10 or 20 minutes',
        description: 'Lightning talks are either 10 or 20 minutes long, and often gives a quick introduction to a concept. This is a great way to get a sneak peek at something new.'
    },
    {
        icon: 'icon-graduation',
        title: 'Presentations',
        length: '45 or 60 minutes',
        description: 'Presentations at JavaZone have a length of 45 or 60 minutes, and should therefore give you a deeper understanding of a concept than lightning talks.'
    },
    {
        icon: 'icon-settings',
        title: 'Workshops',
        length: '2 hours +',
        description: 'Full blown learning session. This is where you get down and dirty with code. We’ll have both full day workshops, and shorter 2-hour and 4-hour workshops.'
    }
];

const included = [
    {
        icon: 'icon-settings',
        title: 'Hands-on Workshops',
        content: 'Are you a hands-on type of person? Take part in one of our many, great workshops to get unique learning experience.'
    },
    {
        icon: 'icon-check',
        title: '2 Conference Days',
        content: '2 days packed full of talks from both Norwegian and well known international speakers, in varying formats and categories.'
    },
    {
        icon: 'icon-music-tone-alt',
        title: 'An Afterparty to Remember',
        content: 'After a day full of learning, it feels good to relax a bit and have a few beers. Join us for great music and mingling as we transform the venue to a nice afterparty!'
    },
    {
        icon: 'icon-cup',
        title: '8 Restaurants, all day long',
        content: 'JavaZone is widely known for its great variety of foods. We take pride in serving food of great quality, and we promise you you won’t go home hungry!'
    },
    {
        icon: 'icon-heart',
        title: '…and a Whole Lotta Love',
        content: 'You will meet and talk to loads of interesting people at JavaZone – both old friends and new and interesting people. Mingle away!'
    }
];

export default () => (
    <Page name='info'>
        <PageHeading background={header}>Oslo Spektrum, September 7-8th 2016</PageHeading>

        <Container>
            <CenteredBlock className='info__intro'>
                <CenteredHeader>
                    JavaZone – the community-driven conference for modern Java Developers – is 15 years old!
                    Join us for 2 days of celebration and a unique learning experience.
                </CenteredHeader>
                <CenteredContent>
                    <p>
                        JavaZone is a conference for Java developers created by
                        the Norwegian Java User Group: javaBin. The conference
                        have existed since 2001, and nowadays
                        consists of around 200 speakers and 7 parallel tracks
                        over 2 days, plus an additional day of workshops
                        beforehand (included in the cost of your ticket, but
                        with limited seating). Join us, together with almost
                        3.000 fellow developers in September.
                    </p>
                </CenteredContent>
            </CenteredBlock>


            <CenteredBlock className='partners__video'>
                <CenteredContent>
                    <Youtube id="RH82hhejG3Q" />
                </CenteredContent>
            </CenteredBlock>

            <Block>
                <Header>First things first:<br/>your ticket</Header>
                <Content>
                    <p>
                        The first thing you’ll need is a ticket. Since we believe
                        in simplicity, our tickets are also quite simple: the
                        JavaZone ticket gives you full access to the whole
                        conference – including the workshops (registrations on a
                        first come, first served basis). If you are a member of
                        javaBin, you even get a discount!<br /><br />
                    </p>
                    <p>
                        <a href='/tickets' className='button button--red button--big'>Get your ticket today</a>
                    </p>
                </Content>
            </Block>

            <CenteredBlock className='info__got-ticket'>
                <CenteredHeader>
                    So, you got your ticket?
                </CenteredHeader>
                <CenteredContent>
                    <p>
                        Great! Your are now ready to attend JavaZone 2016. If you
                        have been to JavaZone before – welcome back! If you have
                        never attended JavaZone – read on to see what you will be
                        experiencing. A ticket to JavaZone gives you the chance to
                        see a lot of great talks, but there is of course a whole
                        lot more to experience.
                    </p>
                </CenteredContent>
            </CenteredBlock>
        </Container>

        <div className='info__included included'>
            <Container>
                <ul className='included__items'>
                    {included.map((item, key) => (
                        <Included {...item} key={key} />
                    ))}
                </ul>
            </Container>
        </div>

        <div className='info__map'>
            <Map />
        </div>

        <Container>
            <Block>
                <Header>Tell me more,<br/>tell me more!</Header>
                <Content>
                    <dl className='info__info-list info-list'>
                        <dt className='info-list__header'>“Well, for a starter: where is this thing?”</dt>
                        <dd className='info-list__content'>
                            As always, JavaZone takes place at Oslo Spektrum in the
                            heart of Oslo. If this doesn’t tell you anything – don’t
                            worry, finding Oslo Spektrum won’t be too hard. You can
                            use <a href='https://www.google.com/maps/dir/Current+Location/Oslo+Spektrum,+Sonja+Henies+plass+2,+0185+Oslo,+Norway/' className='page__link'>this Google Maps link</a> to get directions from
                            your current location to Oslo Spektrum, or use the <a href='https://ruter.no/en/journey-planner' className='page__link'>travel planner</a> with Oslo Spektrum as your destination for public
                            transport. Oh, and if you’re completely lost, don’t be
                            afraid to ask! Most Norwegians are quite friendly.
                        </dd>
                        <dt className='info-list__header'>“Okay then! But where do I stay in case I need some sleep?”</dt>
                        <dd className='info-list__content'>
                            There are plenty of hotels in the area surrounding the
                            conference center. Searching for hotels close to
                            "Oslo Central Station" is a good tip, and should give
                            you a few alternatives to choose from.
                        </dd>
                        <dt className='info-list__header'>“And to be sure: what if I get hungry?”</dt>
                        <dd className='info-list__content'>
                            Learning makes you hungry, and we are of course well
                            aware of this. This is why we have a constant stream
                            of food throughout the whole day, prepared by
                            professional chefs from some of Oslo’s best restaurants.
                            There will be 8 restaurants in the Expo area with 16 different food concepts.
                            Believe us, if there is one thing you will not be
                            missing at JavaZone, it is food.
                        </dd>
                        <dt className='info-list__header'>“…and about that weird «norsk» you guys are speaking?”</dt>
                        <dd className='info-list__content'>
                            Don’t worry! About 50% of the talks are held in
                            English, and the spoken language is specified in the
                            program. So even if you don’t «snakker norsk», you
                            should still get plenty of learning out of the conference.
                        </dd>
                    </dl>
                </Content>
            </Block>
        </Container>

        <div className='info__timeline'></div>

        <div className='info__program'>
            <Container>
                <Block>
                    <Header>The Program</Header>
                    <Content>
                        <p>
                            Well, the program is not available just yet. The full and final program will be available
                            sometime during July. We always strive to improve the experience,
                            so this year we have made a few small changes to the
                            program: lightning talks can now be either 10 or 20 minutes,
                            and presentations can now be either 45 or 60 minutes.
                            Trust us: it will all make sense when the full program is published.
                        </p>
                    </Content>
                </Block>

                <CenteredBlock>
                    <ul className='presentation-formats'>
                        {formats.map((format, id) => (
                            <Format key={id} {...format} />
                        ))}
                    </ul>
                </CenteredBlock>
            </Container>
        </div>

        <div className='info__coc'>
            <Container>
                <CenteredBlock>
                    <CenteredHeader><i className='icon-like info__coc-icon'></i> A few very important principles</CenteredHeader>
                    <CenteredContent>
                        <p>
                            JavaZone is a 100% community-organized conference created by javaBin. The program is curated by our independent program committee,
                            and they operate under the principle that no-one is paid to hold a presentation, and likewise that no-one can pay us to get their presentation accepted.
                            <br />See our <a href='/monetary-policy'>monetary policy</a> for details.
                        </p>

                        <p>
                            We as organizers strive to create the best possible learning experience for all our speakers and participants, and we expect you to do the same.
                            Everyone is welcome at JavaZone, but we do require that you treat your fellow conference participants with respect.
                            See <a href="http://confcodeofconduct.com">confcodeofconduct.com</a> for a minimum of what we expect.
                            We reserve the right to take any action necessary to make sure this principle is upheld.
                        </p>

                        <h3>Should any unwanted event occur, we're here to help:</h3>
                        <p>
                            <b>Before the conference:</b>
                            <br />
                            You can contact us by email: <a href='mailto:javazone@java.no'>javazone@java.no</a>
                            <br />
                            (this goes to a small group of people, the core organizers)

                            <br/><br />

                            <b>During the conference:</b>
                            <br />
                            Ask at the info stand, and we'll be in touch.
                            <br />
                            Contact information will also be available at the info stand.
                        </p>
                    </CenteredContent>
                </CenteredBlock>
            </Container>
        </div>

        <Container>
            <CenteredBlock>
                <CenteredHeader>Questions?</CenteredHeader>
                <CenteredContent>
                    <p>
                        Not all details are ready just yet, but if there is
                        any specific info you are missing after reading this page,
                        just contact us at <a href="mailto:javazone@java.no">javazone@java.no</a> and
                        we’ll try our best to give you an answer.
                    </p>
                </CenteredContent>
            </CenteredBlock>
            <CenteredBlock className='info__regards'>
                <CenteredHeader>
                    We really look forward to<br/>seeing you at JavaZone 2016!
                </CenteredHeader>
            </CenteredBlock>
        </Container>
    </Page>
);

// <div className='info__speaker-info'>
//     <div className='info__speaker-info-title'>Pssst!</div>
//     <div className='info__speaker-info-body'>
//         Are you a speaker? You can find speaker-related information
//         at the <a href='/speakers' className='page__link'>speaker info page</a>
//     </div>
// </div>
