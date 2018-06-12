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
import { Carousel } from 'react-responsive-carousel';

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
                        'journeyzone-carousel-hidden': (index !== this.state.index)
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
                <PageHeader subHeader="A sailing trip through Lofoten in Northern Norway!">Journeyzone 2018</PageHeader>
                <Section fluid>
                    <ImageBlock image={canoe} alt="JourneyZone canoe" />
                    <CenterBlock header="What is this?">
                        <p>
                            JourneyZone is our annual trip for speakers and conference organizers just after the JavaZone conference. This year, our destination is Lofoten in the Northern part of Norway.
                        </p>
                    </CenterBlock>
                    <CenterBlock header="What is this Lofoten place?">
                        <p>
                            To lazily quote Wikipedia: Lofoten (Norwegian pronunciation: [ˈluːfuːtn̩]) is an archipelago and a traditional district in the county of Nordland, Norway. Lofoten is known for a distinctive scenery with dramatic mountains and peaks, open sea and sheltered bays, beaches and untouched lands. Though lying within the Arctic Circle, the archipelago experiences one of the world's largest elevated temperature anomalies relative to its high latitude.
                        </p>
                        <p>
                            Many Norwegians dream of going to this place and now is your chance to brag to them that you went!
                        </p>
                    </CenterBlock>
                    <CenterBlock header="When? Where?">
                        <p>
                            We are leaving Oslo in the early evening of the last day of JavaZone on Thursday September 13th. We will be back in Oslo (at the airport OSL Gardermoen) on Sunday September 16th at 21:00. The entire trip is planned, so all you need to do is meet up. We will send a packing list closer to the event.
                        </p>
                    </CenterBlock>
                </Section>
                <Section>
                    <Carousel 
                        autoPlay 
                        interval={4000}
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        showIndicators={false}
                        infiniteLoop>
                        <div>
                            <img src={fish1} />
                        </div>
                        <div>
                            <img src={fish2} />
                        </div>
                        <div>
                            <img src={cookingOnCampfire} />
                        </div>
                        <div>
                            <img src={fishAndMushroom} />
                        </div>
                        <div>
                            <img src={tents} />
                        </div>
                    </Carousel>
                </Section>
                <Section>
                    <CenterBlock header="Who can attend?">
                        <p>
                            All speakers of JavaZone are invited, but we have a limited number of spots available for the journey. Those who hold full presentations and workshops are prioritized, but presenters of lightning talks are of course also welcome to apply!
                        </p>
                        <p>
                            In order to attend, you must be in a physical condition that allows you to sail for three full days and sleep on a sail boat. If the weather is rough, we will be exposed to the ocean and you might get sea sick. No sailing experience is required and no extraordinary phyical activity is required by partipants.
                        </p>
                    </CenterBlock>
                    <ImageBlock image={campfire} alt="JourneyZone canoe" />
                    <CenterBlock header="Personal expenses">
                        <p>
                            JavaZone will cover almost all your expenses which is considered your reward for holding your talk at the conference. To ensure that we stretch the budget to accomodate as many as possible we require that all attendees pay NOK 2500. The trip will include one self-paid, volunary activity and you might need to pay for some supplies on the road.
                        </p>
                    </CenterBlock>
                    <CenterBlock header="The program">
                        <p>
                            The program is, as usual, tightly packed and full of interesting events. The main activity is sailing, but along the way, we offer many additional adventures! The details are not yet available and partly depend on the weather conditions. We will adapt to whatever comes our way and setup the program accordingly.
                        </p>
                    </CenterBlock>
                    <CenterBlock>
                        <p>
	                        <a className='button button--transparent' target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhPn-qwPCza6xPtc6dtcTm4O-kF3oAb1S-uMuBBjTo6cTSEw/viewform">Sign Up Now!</a>
                        </p>
                    </CenterBlock>
                </Section>
            </Page>
        )
    }

}

export default Journeyzone;
