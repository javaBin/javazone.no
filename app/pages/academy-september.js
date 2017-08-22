import header from '../assets/frivillig.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

const CenteredButton = ({children}) => (
    <CBlock>
        <CContent>
            <p>
                <a href='https://goo.gl/forms/wNxTijVRaP98xSJs1' className='button button--transparent' target='_blank'>{children}</a>
            </p>
        </CContent>
    </CBlock>
);

export default () => (
    <Page name='journeyzone'>

        <Heading>
            <LargeHeading>JavaZone Academy</LargeHeading>
            <SmallHeading>A free taste of JavaZone for IT-students</SmallHeading>
        </Heading>

        <Container>

            <Block>
                <Header><span className='pink'>What is JavaZone?</span></Header>
                <Content>
                    <p>
                        Are you a student? Interested in IT? Come join us for JavaZone Academy.
                        JavaZone Academy is a free event for students in Norway which takes place during the second day of the conference.
                        We invite you to take part in the JavaZone experience in Oslo Spektrum for a full day.
                    </p>
                    <p>
                        You will get a free ticket which gives you access to <a href="/info">the full conference experience</a> on Thursday, September 8th.
                        You will be able to attend <a href="/program">all the talks</a>, mingle in the expo area, talk to <a href="/partners">our partners</a>, taste our great food,
                        and all in all have a great time learning new stuff.
                    </p>
                </Content>
            </Block>

            <CenteredButton>Register for JavaZone Academy!</CenteredButton>

            <ul className='frivillig__questions'>
                <li className='frivillig__question'>
                    <div className='frivillig__header orange'>Program and speakers</div>
                    <div className='frivillig__answer'>As you will get a full JavaZone ticket for Thursday, you can just check out our <a href="/program">regular program</a> for info about the talks.
                        The detailed program that specify which talks will be on Thursday</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header green'>What does it cost</div>
                    <div className='frivillig__answer'>Well, we're happy to say that there <i>is</i> such a thing as a free lunch! JavaZone Academy is 100% free.
                        You get the ticket, the talks, the food and everything from us for free. Should you need to travel to be able to attend,
                        that's on you. :)</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header pink'>How to register?</div>
                    <div className='frivillig__answer'><a href='https://goo.gl/forms/wNxTijVRaP98xSJs1'>The registration</a> for JavaZone Academy are now open.
                        Due to popular demand, we need to limit the number of tickets we give out.
                        You can <a href='https://goo.gl/forms/wNxTijVRaP98xSJs1'>apply for a ticket</a>, and we'll let you
                        know if you get a spot at least a week before the conference.</div>
                </li>
                <li className='frivillig__question'>
                    <div className='frivillig__header blue'>Do you do other things for students?</div>
                    <div className='frivillig__answer'>Yes, we do! We usually do the JavaZone Academy event twice a year. In September, it's at the main conference, and in the spring time
                        we come to your town to do it. More info will come. You could also <a href="/frivillig">become a volunteer</a> at the conference.</div>
                </li>
            </ul>

            <CenteredButton>Register for JavaZone Academy</CenteredButton>
        </Container>
    </Page>
);
