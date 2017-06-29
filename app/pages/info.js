import React from 'react';
import { Container, Heading, LargeHeading, Page, SmallHeading } from '../components/page';
import { Block, Content, Header, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';
import info1 from '../assets/info_1.jpg';
import tickets2 from '../assets/tickets_2.jpg';
import partners1 from '../assets/partners_1.jpg';

const InfoPage = () => (
    <Page name='info'>
        <Heading>
            <LargeHeading>Welcome to JavaZone 2017</LargeHeading>
            <SmallHeading>September 13-14th – Oslo, Norway</SmallHeading>
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
            <Header><span className='green'>JavaZone 101<br />the who, what and where</span></Header>
            <Content>
                <P>
                    JavaZone – the biggest European community-driven conference for modern developers is 2^4
                    years old this year! Don’t miss out on two days of birthday celebrations full of inspiring tech talks,
                    hands on sessions, mingling, and a great party!
                </P>
                <P>
                    JavaZone is organized by javaBin, the Norwegian Java User Group. Our goal is to
                    arrange a community-driven conference for Java developers where they can learn new things,
                    share knowledge and socialise.
                </P>
                <P>
                    We have been arranging JavaZone since 2001 and have been excited to watch the event grow bigger
                    and better every year. This year we are hosting almost 200 speakers across 7 parallel tracks over
                    the course of two days. In addition we offer a selection of workshops held on the day before the
                    conference starts.
                </P>
                <P>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years.
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
                    JavaZone experience, including workshops. The number of workshop
                    seats are limited and first-come first-served, so it pays to be quick when the registration opens.
                </P>
            </Content>
        </Block>
        <CBlock>
            <CContent>
                <P>
                    <a className='button button--transparent'
                       href='/tickets'>Buy your JavaZone 2017 ticket now</a>
                </P>
            </CContent>
        </CBlock>


        <CBlock>
            <CHeader><span className='orange'>You’ve got your ticket? Great!</span></CHeader>
            <CContent>
                <P>
                    <br />
                    When you have a ticket in the box, you are ready to attend JavaZone 2017! <br /><br />
                    If you have attended JavaZone before then welcome back! <br />
                    If this is your first time, then please take a moment to
                    familiarize yourself with what to expect! A JavaZone ticket gives you the opportunity to attend
                    countless great talks, but there is much more to experience during the event.
                </P>

            </CContent>
        </CBlock>
        <img className='partners__image' src={tickets2} />
    </Container>
);

const BetterExplorerSection = () => (
    <Container>

        <Block>
            <Header><span className='blue'>Two conference days</span></Header>
            <Content>
                <P>
                    Two days full of talks from renowned Norwegian and international speakers, in varying formats
                    and categories. One of our speakers even tell us that he can write code and play music at the same time!
                    You don't want to miss our amazing lineup. The program is just about finished, and will be released shortly.
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='green'>An after party to remember</span></Header>
            <Content>
                <P>
                    After a long day, full of unique learning experience, it feels good to chill out with something
                    nice to drink and some good food. We have something
                    amazing in store for our afterparty this year, and will release details after the summer break.
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='orange'>8 restaurants, all day long</span></Header>
            <Content>
                <P>
                    Have we mentioned good food before? Our chefs will take you on a culinary trip from Japan to
                    Mexico! Olé! We promise that you will not leave the event hungry!
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='pink'>Hands-on workshops</span></Header>
            <Content>
                <P>
                    Do you prefer practical tasks more than theory? Take part in one of our great workshops and
                    boost your knowledge and skills. The workshops are included in your ticket, but we have a limited number of seats.
                    More information about workshops will come after the summer holidays, along with more information
                    about how to register.
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span className='green'>…and a whole lotta love</span></Header>
            <Content>
                <P>
                    You will meet lots of interesting people at JavaZone! Grab your coffee and mingle away!
                </P>
            </Content>
        </Block>
        <img className='partners__image' src={info1} />
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
            <CHeader><span className='green'>The JavaZone program</span></CHeader>
            <CContent>
                <P><br />
                The full program will be available on our program page and in dedicated apps.<br />
                The program will be published in July.
                </P>
                <P>
                    <a className='button button--transparent'
                       href='#'>Full program coming soon</a>
                </P>
            </CContent>
        </CBlock>

        <Block>
            <Header><span className='pink'>Lightning talks</span></Header>
            <Content>
                <P>
                    Lightning talks are either 10 or 20 minutes long, and often gives a quick introduction to a concept.
                    This is a great way to get a sneak peek at something new.
                </P>
            </Content>
        </Block>
        <Block>
            <Header><span className='orange'>Presentations</span></Header>
            <Content>
                <P>
                    Presentations at JavaZone have a length of 45 or 60 minutes, and will give you a deeper
                    understanding of a concept than lightning talks.
                </P>
            </Content>
        </Block>
        <Block>
            <Header><span className='blue'>Workshops</span></Header>
            <Content>
                <P>
                    Full blown learning session. This is where you get down and dirty with code. We’ll have full
                    day workshops in addition to shorter 2-hour and 4-hour workshops.
                </P>
            </Content>
        </Block>
        <img className='partners__image' src={partners1} />
    </Container>
);

const ImportantPrinciplesSection = () => (
    <Container>
        <CBlock>
            <CHeader><span className='green'>A few very important principles</span></CHeader>
            <CContent>
                <P><br />
                    JavaZone is a 100% community-organized conference created by javaBin. The program is chosen by our independent program committee, and they operate under the principle that no-one is paid to hold a presentation, and likewise that no-one can pay us to get their presentation accepted.
                    See our monetary policy for details.<br/><br/>
                    We as organizers strive to create the best possible learning experience for all our speakers and participants, and we expect you to do the same. Everyone is welcome at JavaZone, but we do require that you treat your fellow conference participants with respect. See confcodeofconduct.com for a minimum of what we expect. We reserve the right to take any action necessary to make sure this principle is upheld.
                    
                    <br /><br />Should any unwanted event occur, we're here to help:
                    <br/><br/>
                    <strong>Before the conference</strong>
                    <br />
                    You can contact us by email: javazone@java.no (this goes to a small group of people, the core organizers)
                    <br/><br/>
                    <strong>During the conference</strong>
                    <br />
                    Ask at the info stand, and we'll be in touch. Contact information will also be available at the info stand.
                </P>
            </CContent>
        </CBlock>

    </Container>
);

const QuestionSection = () => (
    <Container>
        <CBlock>
            <CHeader><span className='blue'>Questions?</span></CHeader>
            <CContent>
                <P><br />Do not hesitate to contact us, if you have any questions!
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
