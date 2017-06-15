import header from '../assets/frivillig.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

const SignUpButton = ({children}) => (
    <CBlock>
        <CContent>
            <p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdV1cVPCqJ7q2-v9Q1WNQV9MiNUPeAwtVtbV-ctVUj7X2GS4w/viewform'
                   className='button button--transparent'
                   target='_blank'>Sign up now!</a>
            </p>
        </CContent>
    </CBlock>
);

const JourneyZone = () => (
    <Page name='journeyzone'>
        <Heading>
            <LargeHeading>JourneyZone 2017</LargeHeading>
            <SmallHeading>An epic journey across the forests and lakes of the Nordmarka!</SmallHeading>
        </Heading>

        <Container>
            <CBlock>
                <CHeader><span className='green'>What is this?</span></CHeader>
                <CContent>
                    <P>
                        Each year we offer our speakers an unforgettable experience in the Norwegian nature, and 2017 is no different! This year we will attempt a journey that all Norwegians dream of doing, but few have undertaken : ‘Nordmarka på langs’.
                    </P>
                </CContent>
            </CBlock>

            <CBlock>
                <CHeader><span className='blue'>‘Nordmarka på langs’?  What are you talking about?</span></CHeader>
                <CContent>
                    <P>
                        The North of Oslo is bordered by forest, of which Nordmarka is one of the largest (430 square kilometers). Many Oslo citizens use the Nordmarka for recreational activities such as biking, skiing, kayaking, hiking and camping - but few ever venture as far into the woods as we will!
                    </P>
                    <P>
                        ‘Nordmarka på langs’ refers to a trip across the entire length of the Nordmarka. This will take around two days, during which you will get up very close and personal with the Norwegian wilderness.
                    </P>

                </CContent>
            </CBlock>

            <CBlock>
                <CHeader><span className='orange'>I’m intrigued - give me more details!</span></CHeader>
                <CContent>
                    <P>
                        The experience will being Friday 16th September, the morning after JavaZone.  We’ll meet up at 0700 and take a short train ride to Grua, around 40 kilometers north of Oslo.
                    </P>
                    <P>
                        From here we’ll slowly make our way through the forest and across lakes back to the city.  We can expect plenty of surprises and lots of great food along the way. Attendees will also be responsible for creating their own shelter (with a little help from some people we know).
                    </P>
                    <P>
                        Finally we will end the journey back where we started on Sunday September 18th at 1800.
                    </P>
                </CContent>
            </CBlock>

            <CBlock>
                <CHeader><span className='pink'>Who can attend?</span></CHeader>
                <CContent>
                    <P>
                        All JavaZone speakers are invited to apply for a place on JourneyZone, but please be aware that spaces are limited. Those holding workshops and presentations will be prioritised, but lighting talk speakers are also encouraged to apply!
                    </P>
                    <P>
                        We’ll do everything to make this trip as comfortable as possible, but attendees must be prepared to undertake a moderate amount of physical activity, and not be afraid of camping in the forest for two nights.
                    </P>

                </CContent>
            </CBlock>


            <CBlock>
                <CHeader><span className='green'>Personal expenses and equipment list</span></CHeader>
                <CContent>
                    <P>
                        JavaZone will cover almost all your expenses which is considered your reward for holding your talk at the conference. To ensure that we stretch the budget to accommodate as many as possible we require that all attendees pay NOK 1500
                    </P>
                    <P>
                        We are currently putting together an equipment list for attendees and will publish this soon.
                    </P>
                </CContent>
            </CBlock>


            <SignUpButton/>
        </Container>

    </Page>);

export default JourneyZone;
