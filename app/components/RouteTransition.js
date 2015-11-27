import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container';

class RouteTransition extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            previousPathname: null
        };
    }

    componentWillReceiveProps(nextProps, nextContent) {
          if (nextContent.location.patnname !== this.context.location.pathname)
            this.setState({previousPathname: this.context.location.pathname});
    }

    render() {
        const { children } = this.props;
        const { previousPathname } = this.state;

        return (
            <ReactCSSTransitionGroup {...this.props}>
                <StaticContainer
                    key={previousPathname || this.context.location.pathname}
                    shouldUpdate={!previousPathname}>
                    {children}
                </StaticContainer>
            </ReactCSSTransitionGroup>
        )
    }

    componentDidUpdate(prevProps, prevState) {
          if (this.state.previousPathname) {
            this.setState({previousPathname: null});
          }
    }
}

export default RouteTransition;
