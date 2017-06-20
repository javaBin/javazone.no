import React from 'react';
import classnames from 'classnames';
import { Page, Heading, LargeHeading, Container } from '../components/page';
import { P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';

import campfire from '../assets/journeyzone/campfire.jpg';
import canoe from '../assets/journeyzone/canoe.jpg';
import cookingOnCampfire from '../assets/journeyzone/cooking_on_campfire.jpg';
import fish1 from '../assets/journeyzone/fish_1.jpg';
import fish2 from '../assets/journeyzone/fish_2.jpg';
import fishAndMushroom from '../assets/journeyzone/fish_and_mushroom.jpg';
import tents from '../assets/journeyzone/tents.jpg';

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

const Image = ({image, altText, classes}) =>
    (<img className={classnames('journeyzone__image', classes)} alt={altText} src={image} />);

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    componentWillMount() {
        if (this.props.children.length > 0) {
            this.timer = setInterval(this.update.bind(this), this.props.interval || 1000);
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    update() {
        this.setState((prevState, props) => ({
            index: (prevState.index + 1) >= props.children.length ? 0 : prevState.index + 1
        }));
    }


    render() {
        return (<div className='journeyzone__image-carousel-container'>
            {React.Children.map(this.props.children, (child, index) => (
                React.cloneElement(child, {
                    classes: classnames({
                        'journeyzone__image-carousel-img': true,
                        'journeyzone__image-carousel-hidden': (index !== this.state.index)
                    })
                })
            ))}
        </div> );
    }
}

const JourneyZone = () => (
    <Page name='journeyzone'>
        <Heading>
            <LargeHeading>JourneyZone 2017</LargeHeading>
            <CHeader>The most epic journey across the forests and lakes of the Nordmarka - ever!!</CHeader>
        </Heading>

        <Container>
            <Image altText="canoe" image={canoe} />

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
                        The experience will begin Friday 16th September, the morning after JavaZone.  We’ll meet up at 0700 and take a short train ride to Grua, around 40 kilometers north of Oslo.
                    </P>
                    <P>
                        From here we’ll slowly make our way through the forest and across lakes back to the city.  We can expect plenty of surprises and lots of great food along the way. Attendees will also be responsible for creating their own shelter (with a little help from some people we know).
                    </P>
                    <P>
                        Finally we will end the journey back where we started on Sunday September 18th at 1800.
                    </P>
                </CContent>
            </CBlock>

            <ImageCarousel interval={4000}>
                <Image altText="fish" image={fish1} />
                <Image altText="fish" image={fish2} />
                <Image altText="cooking on campfire" image={cookingOnCampfire} />
                <Image altText="fish and mushroom" image={fishAndMushroom} />
                <Image altText="tents" image={tents} />
            </ImageCarousel>

            <CBlock>
                <CHeader><span className='pink'>Who can attend?</span></CHeader>
                <CContent>
                    <P>
                        All JavaZone speakers are invited to apply for a place on JourneyZone, but please be aware that space is limited. Those holding workshops and presentations will be prioritised, but lighting talk speakers are also encouraged to apply!
                    </P>
                    <P>
                        We’ll do everything to make this trip as comfortable as possible, but participants should be prepared to undertake a moderate amount of physical activity, and not be afraid of camping in the forest for two nights. We'll also arrange for the transport of bags and equipment, so you won't need to carry a huge backpack!
                    </P>

                </CContent>
            </CBlock>

            <Image altText="campfire" image={campfire} />

            <CBlock>
                <CHeader><span className='green'>Personal expenses and equipment list</span></CHeader>
                <CContent>
                    <P>
                        JavaZone will cover almost all of your expenses which is considered your reward for holding your talk at the conference. To ensure that we stretch the budget to accommodate as many as possible we require that all attendees pay NOK 1500.
                    </P>
                    <P>
                        We are currently putting together an equipment list for participants.  This will be published soon.
                    </P>
                </CContent>
            </CBlock>


            <SignUpButton/>
        </Container>

    </Page>);

export default JourneyZone;
