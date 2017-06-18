import React from 'react';
import { Container, Heading, LargeHeading, Page, SmallHeading } from '../components/page';
import { Block, Content, Header, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';

const InfoPage = () => (
    <Page name='info'>
        <Heading>
            <LargeHeading>JavaZone 2017</LargeHeading>
            <SmallHeading>September 13-14th</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='OKZcwxcw85o'/>
        </Container>

        <AboutSection />
        <TicketSection />
        <BetterExplorerSection />
        <FaqSection />
        <ProgramSection />
        <ImportantPrinciplesSection />
        <QuestionSection />
    </Page>
);

const AboutSection = () => (
    <Container>
        <Block>
            <Header><span className='blue'>About</span></Header>
            <Content>
                <P>
                    JavaZone – the biggest European community-driven conference for modern developers is 2^4
                    years old this year! Don’t miss two days of birthday celebration full of inspiring tech talks,
                    educational workshops, mingling, and party!
                </P>
                <P>
                    JavaZone is organized by javaBin, the Norwegian Java User Group. Our main idea was to
                    arrange a community-driven conference for Java developers at which can learn new things,
                    share knowledge and socialise.
                </P>
                <P>
                    We have been arranging JavaZone since 2001 and we are excited to watch the event grow bigger
                    and better every year. This year we are hosting 200 speakers across 7 parallel tracks over
                    the course of two days, in addition to multiple workshops held on the day before the
                    conference starts. Workshops are included in your ticket, but have a  limited number of seats.
                    Therefore, hurry up! First comes, first served.
                </P>
                <P>
                    We would not be what we are today without you! Thank you for your support and contributions.
                    Don’t procrastinate! Join 3000 fellow developers at JavaZone on 13th-14th September, 2017!
                </P>

            </Content>
        </Block>
    </Container>
);

const TicketSection = () => (
    <Container>
        <Block>
            <Header><span className='blue'>First things first:<br/> your ticket!</span></Header>
            <Content>
                <P>
                    To attend JavaZone you will need a ticket. The ticket grants you access to the full
                    JavaZone experience, including workshops. But as mentioned earlier, the number of workshop
                    seats is limited, so don’t delay!book your spot today!
                </P>
            </Content>
        </Block>
        <CBlock>
            <CContent>
                <P>
                    <a className='button button--transparent'
                       href='https://www.eventbrite.com/e/javazone-2017-tickets-29971845597'>Buy your JavaZone 2017 ticket now</a>
                </P>
            </CContent>
        </CBlock>


        <CBlock>
            <CHeader><span className='blue'>You’ve got your ticket, haven’t you?</span></CHeader>
            <CContent>
                <P>
                    <br />
                    When you have a ticket in the box, you are ready to attend JavaZone 2017!  If you have attended
                    JavaZone before then welcome back! If this is your first time, then please take a moment to get
                    to know what is awaiting you! A JavaZone ticket gives you the opportunity to attend countless
                    great talks, but there is much more to experience during the event.
                </P>

            </CContent>
        </CBlock>
    </Container>
);

const BetterExplorerSection = () => (
    <Container>
        <Heading>
            <SmallHeading>How to become a better JavaZone explorer in five easy steps?</SmallHeading>
        </Heading>

        <Block>
            <Header><span className='blue'>Hands-on workshops</span></Header>
            <Content>
                <P>
                    Do you prefer practical tasks more than theory? Take part in one of our great workshops and
                    boost your knowledge and skills.
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='blue'>Two conference days</span></Header>
            <Content>
                <P>
                    Two days full of talks from well-known Norwegian and international speakers, in varying formats
                    and categories. Well, one of our guests says he can play the music and coding at the same time!
                    Check him out this year!
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='blue'>After-party to remember</span></Header>
            <Content>
                <P>
                    After a long day, full of unique learning experience, it feels good to chill out with a nice
                    drink and good food. Join us for mingling and evening concerts! Too tired to relocate? We
                    thought about it… Everything happens in the same venue!
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='blue'>8 restaurants, all day long</span></Header>
            <Content>
                <P>
                    Have we mentioned a good food before? JavaZone is caressingly called “Food – JourneyZone”. Our
                    chefs will take on a culinary trip from Japan to Mexico! Olé! We promise you will not leave the
                    event hungry!
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='blue'>…and a whole lotta love</span></Header>
            <Content>
                <P>
                    You will meet lots of interesting people at JavaZone! Grab your drink and mingle away!
                </P>
            </Content>
        </Block>
    </Container>
);

const FaqSection = () => (
    /*
     “Where is JavaZone happening?”
     JavaZone takes place at Oslo Spectrum in the heart of Norwegian capital city – picturesque Oslo.
     If you are local person, you know the way.
     If you have never been in Oslo, do not worry and check the map /HERE/
     If you are completely lost, do not be afraid to ask! Norwegians are quite friendly people.

     “I am an engineer; I need a sleep. Let me sleep please”
     Booking the hotel, uh? There are plenty of hotels and hostels around the conference centre. Searching for places close to Oslo Central Station is a good idea. You should be given few alternatives to choose from.

     “What if I get hungry?”
     Your brain needs food, we know that! That is why we bring Oslo’s best chefs who prepare great meals all day long for you. There will be 2^3 restaurants in the Expo area with 2^4 different food concepts. Believe us, if there is one thing you will not lack at JavaZone, it is food.

     “Jeg snakker ikke norsk. Will not I get bored at the conference?”
     You do not speak Norwegian? So, do not we!
     But do not worry! About 50% of the talks are held in English and the spoken language is specified in the program. Therefore, if you do not speak Norwegian, you should be able to attend many interesting talks. A tip for those who understand Norwegian, but are afraid to speak it. You can ask our speakers questions in English.
     */
  <div></div>
);

const ProgramSection = () => (
    <Container>
        <CBlock>
            <CHeader>The program</CHeader>
            <CContent>
                <P>
                The full program is available on our program page.  We always strive to improve the experience, so this year we have made a few small changes to the program: lightning talks can now be either 10 or 20 minutes, and presentations can now be either 45 or 60 minutes.
                </P>
                <P>
                    <a className='button button--transparent'
                       href='/program'>See the JavaZone program</a>
                </P>
            </CContent>
        </CBlock>

        <Block>
            <Header>Lightning talks</Header>
            <Content>
                <P>
                    Lightning talks are either 10 or 20 minutes long, and often gives a quick introduction to a concept.
                    This is a great way to get a sneak peek at something new.
                </P>
            </Content>
        </Block>
        <Block>
            <Header>Presentations</Header>
            <Content>
                <P>
                    Presentations at JavaZone have a length of 45 or 60 minutes, and should therefore give you a deeper
                    understanding of a concept than lightning talks.
                </P>
            </Content>
        </Block>
        <Block>
            <Header>Workshops</Header>
            <Content>
                <P>
                    Full blown learning session. This is where you get down and dirty with code. We’ll have both full
                    day workshops, and shorter 2-hour and 4-hour workshops.
                </P>
            </Content>
        </Block>
    </Container>
);

const ImportantPrinciplesSection = () => (
    <Container>
        <CBlock>
            <CHeader>A few very important principles </CHeader>
            <CContent>
                <P>
                    JavaZone is a 100% community-organized conference created by javaBin. The program is chosen by our independent program committee, and they operate under the principle that no-one is paid to hold a presentation, and likewise that no-one can pay us to get their presentation accepted.
                    See our monetary policy for details.
                    We as organizers strive to create the best possible learning experience for all our speakers and participants, and we expect you to do the same. Everyone is welcome at JavaZone, but we do require that you treat your fellow conference participants with respect. See confcodeofconduct.com for a minimum of what we expect. We reserve the right to take any action necessary to make sure this principle is upheld.
                    Should any unwanted event occur, we're here to help:
                </P>
            </CContent>
        </CBlock>
        <Block>
            <Header>Before the conference</Header>
            <Content>
                You can contact us by email: javazone@java.no
                (this goes to a small group of people, the core organizers)
            </Content>
        </Block>
        <Block>
            <Header>During the conference</Header>
            <Content>
                Ask at the info stand, and we'll be in touch.
                Contact information will also be available at the info stand.
            </Content>
        </Block>


    </Container>
);

const QuestionSection = () => (
    <Container>
        <CBlock>
            <CHeader>Questions?</CHeader>
            <CContent>
                <P>Do not hesitate to contact us, if you have any questions!
                    Contact us at javazone@java.no and we’ll try our best to give you an answer.
                </P>
                <P>
                    We are so glad to see you at JavaZone 2017!
                </P>
            </CContent>
        </CBlock>
    </Container>
);

export default InfoPage;
