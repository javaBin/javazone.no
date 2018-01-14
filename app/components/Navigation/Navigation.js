//@flow
import * as React from 'react';
import Container from '../Container/Container';
import classnames from 'classnames';
//import JavazoneLogo from '../../assets/2018/logo_2018_concept.svg';
import JavazoneLogo from '../../assets/2018/logo_2018_concept_pixel_grey.svg';
import './Navigation.less';

type NavigationProps = {

}

type LogoProps = {
    text?: string,
    sticky?: bool
}

type NavItemProps = {
    children: React.Node,
    link: string
}

type NavigationState = {
    hasScrolledPassedTop: bool
}

function Logo(props: LogoProps) {

    let logoClass = classnames({
        'logo-nav': true,
        'logo-nav-sticky': props.sticky
    })

    return (
        <div className={logoClass}>
            <img src={JavazoneLogo} alt="JavaZone" />
            <h2>JZ2018</h2>
        </div>
    )
}

function NavItem(props: NavItemProps) {
    return (
        <a className="nav-item draw meet" href={props.link}>{props.children}</a>
    )
}

class Navigation extends React.Component<NavigationProps, NavigationState> {

    setScrolledPassedTop: Function

    constructor(props: NavigationProps) {
        super(props);
        this.setScrolledPassedTop = this.setScrolledPassedTop.bind(this);
    }

    state = {
        hasScrolledPassedTop: false,
    };

    componentWillMount() {
        document.addEventListener('scroll', this.setScrolledPassedTop);
    }

    setScrolledPassedTop(): void {
        this.setState({
            hasScrolledPassedTop: window.scrollY > 0 ? true : false
        })
    }

    render() {

        let navClass = classnames({
            'navigation': true,
            'sticky': this.state.hasScrolledPassedTop
        })

        return (
            <Container fullWidth>
                <div className={navClass}>
                    <Logo sticky={this.state.hasScrolledPassedTop} />
                    <NavItem link="/info">INFO</NavItem>
                    <NavItem link="/tickets">TICKETS</NavItem>
                    <NavItem link="/program">PROGRAM</NavItem>
                    <NavItem link="/workshops">WORKSHOPS</NavItem>
                    <NavItem link="/speakers">SPEAKERS</NavItem>
                    <NavItem link="/partners">PARTNERS</NavItem>
                    <NavItem link="/videos">VIDEOS</NavItem>
                    <NavItem link="/frivillig">FRIVILLIG</NavItem>
                    <NavItem link="/kids">KIDS</NavItem>
                    <NavItem link="/journeyzone">JOURNEYZONE</NavItem>
                    <NavItem link="/academy">ACADEMY</NavItem>
                </div>
            </Container>
        )
    }
}

export default Navigation;