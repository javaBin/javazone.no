import header from '../assets/journeyzone.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content, SubHeader } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

/*
    Brønnøysund - Ylvingen - Vega - Brønnøysund (possibly Torghatten)
    65.581592, 12.130220
    65.530704, 12.159315
*/

const mapOptions = {
    center: {lat: 65.530704, lng: 12.159315},
    zoom: 10,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [{"featureType":"all","elementType":"geometry","stylers":[{"lightness":"-5"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"lightness":"-10"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"hue":"#d700ff"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"},{"saturation":"0"},{"lightness":"0"},{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"lightness":"50"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"lightness":"25"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"weight":"1"},{"lightness":"0"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"lightness":"25"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"lightness":"30"},{"gamma":"1.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"lightness":"53"},{"gamma":"1.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"-20"},{"gamma":"1.00"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"lightness":"30"},{"gamma":"1"},{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"lightness":"-10"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"lightness":"-40"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":"18"},{"saturation":"-100"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"lightness":"-30"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"lightness":"50"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"weight":"1"},{"saturation":"0"},{"lightness":"83"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"0"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"80"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"0"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"80"},{"gamma":"1"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"saturation":"0"},{"lightness":"-15"},{"weight":".25"},{"gamma":"1"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"lightness":"0"},{"gamma":"1.00"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffc1d9"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"saturation":"-100"},{"lightness":"-5"},{"gamma":"0.5"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"weight":".75"},{"visibility":"off"}]}]
};

const icon = {
    path: 'M17,9 C12.8575,9 9.5,12.3575 9.5,16.5 C9.5,20.6425 12.8575,24 17,24 C21.1425,24 24.5,20.6425 24.5,16.5 C24.5,12.3575 21.1425,9 17,9 L17,9 Z M1,17 C1,8.178 8.178,1 17,1 C25.822,1 33,8.178 33,17 C33,24.034668 27.545166,31.9897461 17.004,42.685 C6.32055664,31.9897461 1,24.0964355 1,17 Z',
    fillColor: '#a10035',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: .8,
    anchor: new google.maps.Point(16, 32)
};

const bronnoy = {
    position: new google.maps.LatLng(65.468803, 12.208318),
    title: 'Brønnøysund',
    icon: icon
};

const ylvingen = {
    position: new google.maps.LatLng(65.619934, 12.148102),
    title: 'Ylvingen',
    icon: icon
};

const vega = {
    position: new google.maps.LatLng(65.659976, 11.915800),
    title: 'Vega',
    icon: icon
};

const torghatten = {
    position: new google.maps.LatLng(65.396438, 12.088677),
    title: 'Torghatten',
    icon: icon
};

const Map = React.createClass({
    componentDidMount() {
        const map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
        const bronnoyM = new google.maps.Marker(bronnoy);
        const ylvingenM = new google.maps.Marker(ylvingen);
        const vegaM = new google.maps.Marker(vega);
        const torghattenM = new google.maps.Marker(torghatten);
        bronnoyM.setMap(map);
        ylvingenM.setMap(map);
        vegaM.setMap(map);
        torghattenM.setMap(map);
        this.setState({map});
    },

    render() {
        return (
            <div id='google-map' style={{height: '100%'}}></div>
        );
    }
});

const CenteredButton = ({children}) => (
    <CenteredBlock>
        <CenteredContent>
            <p>
                <a href='#' className='button button--green button--big'>{children}</a>
            </p>
        </CenteredContent>
    </CenteredBlock>
);

export default () => (
    <Page name='journeyzone'>
        <PageHeading background={header}>JourneyZone 2016</PageHeading>

        <Container>
            <CenteredBlock>
                <CenteredHeader>JourneyZone 2016 – Destination Helgeland</CenteredHeader>
                <CenteredContent>
                    <p>
                        Sailing the coast of Northern Norway!
                    </p>
                </CenteredContent>
            </CenteredBlock>

            <Block>
                <Header>What is this?</Header>
                <Content>
                    <p>
                        It’s the yearly JourneyZone, of course! JourneyZone is our annual
                        trip for speakers, taking place just after the conference. This year, the destination is <a href='https://en.wikipedia.org/wiki/Helgeland'>Helgeland</a>.
                    </p>

                    <SubHeader>When?! Where?!</SubHeader>

                    <p>
                        We start the trip in Oslo the day after JavaZone, and will be back again in Oslo by Monday September 12th.
                        Everything is planned, so all you need to do is meet at <a href='https://www.google.no/maps/place/Oslo+Airport/@60.1141771,10.7268802,10z/data=!4m5!3m4!1s0x4641838b248a1cbf:0xcca0add4a7eb5b82!8m2!3d60.1975501!4d11.1004153?hl=en'>Oslo Airport, Gardermoen</a>.
                    </p>

                    <SubHeader>Who can attend?</SubHeader>

                    <p>
                        All speakers of JavaZone are invited, but we have a limited number of spots available for the journey.
                        Those who hold full presentations and workshops are prioritized, but presenters of lightning talks are
                        of course also welcome to apply!
                    </p>
                </Content>
            </Block>

            <Block>
                <Header>So, what is this Helgeland place?</Header>
                <Content>
                    <p>
                        Glad you asked! Helgeland is the southern part of Northern Norway. It might not sound that interesting,
                        but its coastline is actually world famous because of the dramatic landscape with pointy mountains coming straight
                        out of the ocean. Each year, a large number of tourists come here to drive along the coast and see this magnificent
                        landscape.
                    </p>

                    <p>
                        Helgeland is big, and it won’t be time to see everything, but we have picked quite a few nice places for you to visit.
                    </p>
                </Content>
            </Block>

            <CenteredButton>I want to attend!</CenteredButton>
        </Container>

            <div className='journeyzone__map'>
                <Map />
            </div>

        <Container>
            <Block>
                <Header>The Program</Header>
                <Content>
                    <p>
                        The program is, as usual, tightly packed and packed full of interesting events. The main event is sailing,
                        but along the way there are lots of other events as well!
                    </p>

                    <dl>
                        <dt className='journeyzone__day-title'>Friday, September 9th</dt>
                        <dd className='journeyzone__day-content'>
                            We meet up at Oslo Airport, Gardermoen, and take the plane up to Brønnøysund together. Here, we’ll go directly to the boats and stay there for the night.
                        </dd>
                        <dt className='journeyzone__day-title'>Saturday, September 10th</dt>
                        <dd className='journeyzone__day-content'>
                            Today you will be sailing! The day starts with a quick sailing and safety intro, before we head out to the sea and set sail for Ylvingen. Along the way there will be practicing, and we’ll fish our own dinner as well.
                        </dd>
                        <dt className='journeyzone__day-title'>Sunday, September 11th</dt>
                        <dd className='journeyzone__day-content'>Sunday starts slowly with hiking or kayaking, depending on what you would like. Later on, we set sail for Vega where we have a lecture on traditions specific for the Vega islands. We spend the night at Vega Havhotell where we also have a pleasant evening meal.</dd>
                        <dt className='journeyzone__day-title'>Monday, September 12th</dt>
                        <dd className='journeyzone__day-content'>The last day of our trip. You get to choose between sailing back, and traveling by ferry. If you travel by ferry you also get to visit Torghatten, a mountain famous for having a hole straight through it. We meet at Brønnøysund, where we take the plain back to Oslo.</dd>
                    </dl>
                </Content>
            </Block>

            <CenteredButton>I want to attend!</CenteredButton>
        </Container>
    </Page>
);
