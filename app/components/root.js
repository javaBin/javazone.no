import Nav from './nav';
import Footer from './footer';
import className from 'className';
import {defer, when} from 'Q';
import backgroundBlurred from '../assets/background_blurred.jpg';
// import RouteTransition from './RouteTransition';

function getImage(src) {
    const deferred = defer();
    const img = new Image();
    img.onload = _ => deferred.resolve(src);
    img.src = src;
    return deferred;
}

// RouteTransition.contextTypes = {
//     location: React.PropTypes.object
// };

const Root = React.createClass({

    getInitialState() {
        return {
            loaded: false,
            style: {
                background: 'none'
            }
        };
    },

    componentDidMount() {
        when(getImage(backgroundBlurred))
        .then(result => {
            this.setState({
                loaded: true,
                style: {
                    backgroundImage: `url('${backgroundBlurred}')`
                }
            });
        });
    },

    render() {
        const classes = className('javazone', {
            'javazone--visible': this.state.loaded
        });

        return (
            <div className={classes} style={this.state.style}>
                <div className="javazone__container">
                    <Nav {...this.props} />
                    <div className="javazone__page">
                            {this.props.children}
                        <div className="javazone__footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

// <RouteTransition
//     component='div' transitionName='page-transition'
//     transitionEnterTimeout={500}
//     transitionLeaveTimeout={500}>
// </RouteTransition>

export default Root;