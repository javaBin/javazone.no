import * as React from 'react';
import classnames from 'classnames';
import Page from '../../components/Page/Page.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import { Section } from '../../components/Section/Section.js';
import { ImageBlock, CenterBlock } from '../../components/Block/Block.js';
import campfire from '../../assets/journeyzone/campfire.jpg';
import canoe from '../../assets/journeyzone/canoe.jpg';
import cookingOnCampfire from '../../assets/journeyzone/cooking_on_campfire.jpg';
import fish1 from '../../assets/journeyzone/fish_1.jpg';
import fish2 from '../../assets/journeyzone/fish_2.jpg';
import fishAndMushroom from '../../assets/journeyzone/fish_and_mushroom.jpg';
import tents from '../../assets/journeyzone/tents.jpg';

const Image = ({ image, altText, classes }) =>
    (<img className={classnames('journeyzone__image', classes)} alt={altText} src={image} />);

type ImageCarouselProps = {
    children: React.Node[];
    interval: number;
}

type ImageCarouselState = {
    index: number;
    timer: IntervalID;
}

class ImageCarousel extends React.Component<ImageCarouselProps, ImageCarouselState> {

    update: Function;

    state = {
        index: 0,
        timer: null
    }

    constructor(props: ImageCarouselProps) {
        super(props);
    }

    componentWillMount() {
        if (this.props.children.length > 0) {
            let timer = setInterval(this.update.bind(this), this.props.interval || 1000)
            this.setState({
                timer
            });
        }
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }
    }

    update() {
        this.setState((prevState, props) => ({
            index: (prevState.index + 1) >= this.props.children.length ? 0 : prevState.index + 1
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

type JourneyzoneProps = {

}

class Journeyzone extends React.Component<JourneyzoneProps, {}> {


    constructor(props: JourneyzoneProps) {
        super(props);
    }

    render() {
        return (
            <Page name="journeyzone">
                <PageHeader subHeader="The most epic journey across the forests and lakes of the Nordmarka - ever!!">Journeyzone 2018</PageHeader>
                <Section fluid>
                    <ImageBlock image={canoe} alt="JourneyZone canoe" />
                    <CenterBlock header="What is this?">
                        <p>
                            Each year we offer our speakers an unforgettable experience in the Norwegian nature, and 2017 is no different! This year we will attempt a journey that all Norwegians dream of doing, but few have undertaken : ‘Nordmarka på langs’.
                        </p>
                    </CenterBlock>
                    <CenterBlock header="‘Nordmarka på langs’? What are you talking about?">
                        <p>
                            The North of Oslo is bordered by forest, of which Nordmarka is one of the largest (430 square kilometers). Many Oslo citizens use the Nordmarka for recreational activities such as biking, skiing, kayaking, hiking and camping - but few ever venture as far into the woods as we will!
                        </p>
                        <p>
                            ‘Nordmarka på langs’ refers to a trip across the entire length of the Nordmarka. This will take around two days, during which you will get up very close and personal with the Norwegian wilderness.
                        </p>
                    </CenterBlock>
                    <CenterBlock header="I’m intrigued - give me more details!">
                        <p>
                            The experience will begin Friday 15th September, the morning after JavaZone. We’ll meet up at 0700 and take a short train ride to Grua, around 40 kilometers north of Oslo.
                        </p>
                        <p>
                            From here we’ll slowly make our way through the forest and across lakes back to the city. We can expect plenty of surprises and lots of great food along the way. Attendees will also be responsible for creating their own shelter (with a little help from some people we know).
                        </p>
                        <p>
                            Finally we will end the journey back where we started on Sunday September 17th at 1800.
                        </p>
                    </CenterBlock>
                </Section>
                <Section>
                    <ImageCarousel interval={4000}>
                        <Image altText="fish" image={fish1} />
                        <Image altText="fish" image={fish2} />
                        <Image altText="cooking on campfire" image={cookingOnCampfire} />
                        <Image altText="fish and mushroom" image={fishAndMushroom} />
                        <Image altText="tents" image={tents} />
                    </ImageCarousel>
                </Section>
                <Section>
                    <CenterBlock header="Who can attend?">
                        <p>
                            All JavaZone speakers are invited to apply for a place on JourneyZone, but please be aware that space is limited. Those holding workshops and presentations will be prioritised, but lighting talk speakers are also encouraged to apply!
                        </p>
                        <p>
                            We’ll do everything to make this trip as comfortable as possible, but participants should be prepared to undertake a moderate amount of physical activity, and not be afraid of camping in the forest for two nights. We'll also arrange for the transport of bags and equipment, so you won't need to carry a huge backpack!
                        </p>
                    </CenterBlock>
                    <ImageBlock image={campfire} alt="JourneyZone canoe" />
                    <CenterBlock header="Personal expenses and equipment list">
                        <p>
                            JavaZone will cover almost all of your expenses which is considered your reward for holding your talk at the conference. To ensure that we stretch the budget to accommodate as many as possible we require that all attendees pay NOK 1500.
                        </p>
                        <p>
                            We are currently putting together an equipment list for participants. This will be published soon.
                        </p>
                    </CenterBlock>
                    <CenterBlock>
                        <p>
	                        <a className='button button--transparent' target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdV1cVPCqJ7q2-v9Q1WNQV9MiNUPeAwtVtbV-ctVUj7X2GS4w/viewform">Sign Up Now!</a>
                        </p>
                    </CenterBlock>
                </Section>
            </Page>
        )
    }

}

export default Journeyzone;