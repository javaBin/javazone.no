//@flow
import * as React from 'react';
import Container from '../Container/Container';
import NavElement from './NavElement';
import Logo from './Logo';
import classnames from 'classnames';
import styles from './NavigationBar.scss';

let cx = classnames.bind(styles);

type Props = {
    links?: Array<string>
}

type State = {
    sticky: boolean
}

class NavigationBar extends React.Component<Props, State> {

    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    state = {
        sticky: false
    }

    static defaultProps = {
        links: []
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll() {
        this.setState({
            sticky: window.scrollY > 0 ? true : false
        });
    };

    render() {

        let navClass = cx({
            'nav-container': true,
            sticky: this.state.sticky
        })

        return (
            <div className={navClass}>
                <Container>
                    <Logo sticky={this.state.sticky} />
                    {this.props.links.map((link, index) => {
                        return <NavElement key={index} text={link} />
                    })}
                </Container>
            </div>
        );
    }
}

export default NavigationBar;