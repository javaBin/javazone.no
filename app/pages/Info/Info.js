//@flow
import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { LeftBlock, CenterBlock, ImageBlock } from '../../components/Block/Block';
import Youtube from '../../components/youtube';
import info1 from '../../assets/info_1.jpg';
import tickets2 from '../../assets/tickets_2.jpg';
import partners1 from '../../assets/partners_1.jpg';

function AboutSection() {
    return (
        <Section>
            <LeftBlock header="JavaZone 101 the who, what and where"> 
                <p>
                    JavaZone – the biggest European community-driven conference for modern developers will be 17
                    years old in 2018! Don’t miss out on two days of inspiring tech talks,
                    a day of hands-on sessions, mingling, and a great party!
                </p>
                <p>
                    JavaZone is organized by <a href="https://java.no">javaBin</a>, the Norwegian Java User Group. Our goal is to
                    organize a community-driven conference for Java developers where they can learn new things,
                    share knowledge, and socialize.
                </p>
                <p>
                    We have been organizing JavaZone since 2001 and have been excited to watch the event grow bigger
                    and better every year. In 2017 we hosted over 3100 participants and 200 speakers across 7 parallel tracks over
                    the course of two days. In addition, we also offered a selection of 9 workshops held on the day before the
                    conference started.
                </p>
                <p>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years.
                    Don’t procrastinate! Join your fellow Java developers at JavaZone on September 12th-13th, 2018!
                </p>
            </LeftBlock>
        </Section>
    )
}

function TicketSection() {
    return (
        <Section>
            <LeftBlock header="First thing first: your ticket!">
                <p>
                    To attend JavaZone you will need a ticket. The ticket grants you access to the full
                    JavaZone experience, including workshops. The ticket sales ticket sales are now open.  
                    The number of tickets are limited and distributed on a first-come first-served basis, 
                    so it pays to be quick.
                </p>
            </LeftBlock>
            <CenterBlock>
                <p>
                    <br />
                    <a className='button button--transparent' href="/tickets">Buy Your JavaZone 2018 Ticket Now</a>
                </p>
            </CenterBlock>
        </Section>
    )
}

function BetterExplorerSection() {
    return (
        <Section>
            <LeftBlock header="Two conference days">
                <p>
                    Two days full of talks from renowned Norwegian and international speakers, in varying formats
                    and categories. You don‘t want to miss our amazing lineup. The program will be made available online around summer 2018.
                </p>
            </LeftBlock>
            <LeftBlock header="An after party to remember">
                <p>
                    After a long day of unique learning experiences, it feels good to chill out with some good food and drink.
                    JavaZone parties are legendary - and we can promise something amazing for our afterparty this year as well!
                </p>
            </LeftBlock>
            <LeftBlock header="8 restaurants, all day long">
                <p>
                    Have we mentioned our great selection of food? And that it is continuously delivered?
                    Our chefs will take you on a culinary trip around the globe. With food served all day we promise that you will not leave the event hungry!
                </p>
            </LeftBlock>
            <LeftBlock header="Hands-on workshops">
                <p>
                    Do you prefer practical tasks more than theory? Take part in one of our great workshops and
                    boost your knowledge and skills. The workshops are included in your ticket, but we have a limited number of seats.
                    More information, along with registration details will be made available in August.
                </p>
            </LeftBlock>
            <LeftBlock header="... and a whole lotta love">
                <p>
                    You will meet lots of interesting people at JavaZone! Grab your coffee and mingle away!
                </p>
            </LeftBlock>
        </Section>
    )
}

function FaqSection() {
    /*
     “Where is JavaZone happening?”
     JavaZone takes place at Oslo Spectrum in the heart of Norwegian capital city – picturesque Oslo.
     If you are a local person, you know the way.
     If you have never been in Oslo, do not worry and check the map /HERE/
     If you are completely lost, do not be afraid to ask! Norwegians are quite friendly people.

     “I am an engineer; I need a sleep. Let me sleep please”
     Booking the hotel, uh? There are plenty of hotels and hostels around the conference center. Searching for places close to Oslo Central Station is a good idea. You should be given few alternatives to choose from.

     “What if I get hungry?”
     Your brain needs food, we know that! That is why we bring Oslo’s best chefs who prepare great meals all day long for you. There will be 2^3 restaurants in the Expo area with 2^4 different food concepts. Believe us, if there is one thing you will not lack at JavaZone, it is food.

     “Jeg snakker ikke norsk. Will not I get bored at the conference?”
     You do not speak Norwegian? So, do not we!
     But do not worry! About 50% of the talks are held in English and the spoken language is specified in the program. Therefore, if you do not speak Norwegian, you should be able to attend many interesting talks. A tip for those who understand Norwegian, but are afraid to speak it. You can ask our speakers questions in English.
     */
}

function ProgramSection() {
    return (
        <Section>
            <LeftBlock header="The JavaZone program">
                <p>
                    The full program will be made available online around summertime 2018.
                </p>
            </LeftBlock>
            <LeftBlock header="Lightning talks">
                <p>
                    Lightning talks are either 10 or 20 minutes long and often gives a quick introduction to a concept.
                    This is a great way to get a sneak peek at something new.
                </p>
            </LeftBlock>
            <LeftBlock header="Presentations">
                <p>
                    Presentations at JavaZone have a length of 45 or 60 minutes, and will give you a deeper
                    understanding of a concept than lightning talks.
                </p>
            </LeftBlock>
            <LeftBlock header="Workshops">
                <p>
                    Full blown learning session. This is where you get down and dirty with code. We’ll have full
                    day workshops in addition to shorter 2-hour and 4-hour workshops.
                </p>
            </LeftBlock>
        </Section>
    )
}

function AweZoneSection() {
    return (
        <Section>
            <LeftBlock header="AweZone: Celebrating the community">
                <p>
                    AweZone is JavaZone’s traditional party which takes place on the Wednesday
                    evening.
                    <br /><br />

                    The party offers a great chance to catch up with old friends, meet new ones,
                    and also experience a great line-up of entertainment!
                    <br /><br />
                    
                    On Wednesday, at 20:00, we will be leaving Oslo Spektrum together and moving 
                    towards Youngstorget, and the best geeky super-party ever – AweZone! We will 
                    be spending evening at <a href="http://www.himkok.no">Himkok</a> and <a href="http://kulturhusetioslo.no">Kulturhuset</a>.
                    <br /><br />

                    Our first venue, Himkok, has recently been rated as 
                    the <a href="https://www.visitoslo.com/en/product/?TLp=1256691">20th best bar in the world</a>. 
                    Despite that, it is still one of Oslos best keep secrets! 
                    This will be a special experience at a bar with it's own distillery. 
                    Here you can mingle and enjoy the good atmosphere, whilst watching 
                    the white coated bartenders work their magic!
                    <br /><br />

                    The age limit at Himkok will be 20 years and up.
                    <br /><br />

                    At Kulturhuset, we have the pleasure of presenting you 
                    <a href="https://www.facebook.com/showhawkduo/">The Showhawk Duo</a> and <a href="http://www.highasakite.no/">Highasakite</a> at 
                    the stage on the 1st (a.k.a. ground) floor.
                    <br /><br />

                    The age limit at Kulturhuset will be 18 years and up.
                    <br /><br />

                    On the other floors, you will be able to enjoy the drinks, chill out areas, 
                    activities like Shuffleboard, Ping Pong, or Foosball, as well as mingle with 
                    the conference organizers, speakers, other participants, and our partners!
                    <br /><br />

                    p.s. We will be serving good food in the evening as well. Some drinks are on us, 
                    some will be on our partners! 
                    Bring yourself, your good mood, and don't forget your ID (due to age limits).
                </p>
            </LeftBlock>
        </Section>
    )
}

function ImportantPrinciplesSection() {
    return (
        <Section>
            <LeftBlock header="A few very important principles">
                <p>
                    JavaZone is a 100% community-organized conference created by <a href="https://java.no">javaBin</a>. The
                    program is chosen by our independent program committee, and they operate under the principle that no-one
                    is paid to hold a presentation, and likewise, that no-one can pay us to get their presentation accepted.
                    <br/><br/>
                    We as organizers strive to create the best possible learning experience for all our speakers and
                    participants, and we expect you to do the same. Everyone is welcome at JavaZone, but we do require that
                    you treat your fellow conference participants with respect. We reserve the right to take any action
                    necessary to make sure this principle is upheld. For more details, see 
                    our <a href="https://java.no/principles.html">Code of Conduct</a> that applies to all events organised by javaBin.
                    <br /><br />
                    <strong>Should any unwanted event occur, we‘re here to help:</strong>
                    <br/><br/>
                    <strong>Before the conference</strong>
                    <br />
                    You can contact us by email: <a href='mailto:javazone@java.no'>javazone@java.no</a> (this goes to a small
                    group of people, the core organizers of JavaZone), or <a href='mailto:styret@java.no'>styret@java.no</a> (this 
                    goes to the javaBin board).
                    <br/><br/>
                    <strong>During the conference</strong>
                    <br />
                    Ask at the info stand, and we‘ll be in touch. Contact information will also be available at the info stand.
                </p>
            </LeftBlock>
        </Section>
    )
}

function QuestionSection() {
    return (
        <Section>
            <LeftBlock header="Questions?">
                <p>
                    Do not hesitate to contact us if you have any questions.
                    Contact us at <a href='mailto:javazone@java.no'>javazone@java.no</a> and we’ll try our best to give you an answer.
                </p>
                <p>
                    We are looking forwards to seeing you at JavaZone 2018!
                </p>
            </LeftBlock>
        </Section>
    )
}


function Info() {
    return (
        <Page name='info'>
            <PageHeader subHeader="September 12th - 13th, 2018" subSubHeader="Oslo - Norway">Welcome to JavaZone 2018</PageHeader>
            <AboutSection />
            <TicketSection />
            <ImageBlock image={tickets2} alt="Tickets" />
            <BetterExplorerSection />
            <ImageBlock image={info1} alt="Info" />
            <ProgramSection />
            <ImageBlock image={partners1} alt="Partners" />
            <AweZoneSection />
            <ImportantPrinciplesSection />
            <QuestionSection />
        </Page>
    )
}

export default Info;