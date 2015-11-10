import React from 'react';
import className from 'classname';
import background from '../assets/background.jpg';
import backgroundBlurred from '../assets/background_blurred.jpg';
import logo from '../assets/logo.svg';
import Q from 'q';

function getImage(src) {
    const deferred = Q.defer();
    const img = new Image();
    img.onload = () => (deferred.resolve(src));
    img.src = src;
    return deferred;
}

const Teaser = (props) => {
    const blockClasses = className('teaser', {
        'teaser--visible': props.visible
    });

    const dateClasses = className('teaser__dates', {
        'teaser__dates--visible': props.visible
    });

    const punchlineClasses = className('teaser__punchline', {
        'teaser__punchline--visible': props.visible
    });
    return (
        <div className={ blockClasses }>
            <img className="teaser__logo" src={ logo } />
            <h1 className="teaser__title">JavaZone 2016</h1>
            <h2 className={ dateClasses }>Oslo Spektrum, 7th – 8th September, 2016</h2>
            <h2 className={ punchlineClasses }>Save the date.</h2>
        </div>
    );
};

const Index = React.createClass({

    getInitialState() {
        return {
            loaded: false,
            background: 'none',
            backgroundBlurred: 'none'
        }
    },

    componentDidMount() {
        Q.all([
            getImage(background),
            getImage(backgroundBlurred)
        ]).done((result) => {
            this.setState({
                loaded: true,
                background: `url('${background}')`,
                backgroundBlurred: `url('${backgroundBlurred}')`
            });
        });
    },

    render() {
        const classes = className('index__blurred', {
            'index__blurred--visible': this.state.loaded
        });
        const indexStyle = className('index', {
            'index--visible': this.state.loaded
        });
        const backgroundStyle = {
            backgroundImage: this.state.background
        };
        const blurredStyle = {
            backgroundImage: this.state.backgroundBlurred
        };
        return (
            <div className={indexStyle} style={backgroundStyle}>
                <div className={classes} style={blurredStyle}>
                    <Teaser visible={this.state.loaded} />
                </div>
            </div>
        );
    }
});

export default Index;