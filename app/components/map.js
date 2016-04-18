import React from 'react';
import ReactDOM from 'react-dom';

const mapOptions = {
    center: {lat: 59.913007, lng: 10.754743},
    zoom: 14,
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
    scale: .8
};

const spektrum = {
    position: new google.maps.LatLng(59.913007, 10.754743),
    title: 'Oslo Spektrum',
    icon: icon
};

const Map = React.createClass({
    componentDidMount() {
        const map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
        const marker = new google.maps.Marker(spektrum);
        marker.setMap(map);
        this.setState({map});
    },

    render() {
        return (
            <div id='google-map' style={{height: '100%'}}></div>
        );
    }
});

export default Map;