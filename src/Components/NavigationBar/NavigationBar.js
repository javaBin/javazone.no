//@flow
import * as React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import Container from '../Container/Container';
import NavElement from './NavElement';
import Logo from './Logo';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import styles from './NavigationBar.scss';

let cx = classnames.bind(styles);

type Props = {
    links?: Array<string>
}

type State = {
    sticky: boolean,
    showMenuButton: boolean
}

class NavigationBar extends React.Component<Props, State> {

    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.renderMenuButton = this.renderMenuButton.bind(this);
    }

    state = {
        sticky: false,
        showMenuButton: window.innerWidth < 1000 ? true : false
    }

    static defaultProps = {
        links: []
    }

    componentDidMount() {
        fontawesome.dom.i2svg();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    };

    handleScroll() {
        this.setState({
            sticky: window.scrollY > 0 ? true : false
        });
    }

    handleResize() {
        this.setState({
            showMenuButton: window.innerWidth < 1000 ? true : false
        });
    };

    renderMenuButton() {
        return <h2>menu</h2>
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
                    {this.state.showMenuButton ? this.renderMenuButton() :
                    this.props.links.map((link, index) => {
                        return <NavElement key={index} text={link} />
                    })}
                </Container>
            </div>
        );
    }
}

export default NavigationBar;