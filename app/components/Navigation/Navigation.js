//@flow
import * as React from 'react';
import Container from '../Container/Container';
import Link from '../Link/Link';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';
import { Menu } from 'react-feather'; 
import JavazoneLogo from '../../assets/2018/logo_2018_concept_pixel_grey_small.svg';
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

type MenuButtonProps = {
}

type NavigationState = {
    hasScrolledPassedTop: bool,
    showMenuButton: bool
}

function Logo(props: LogoProps) {

    let logoClass = classnames({
        'logo': true,
        'sticky': props.sticky
    })

    return (
        <div className={logoClass}>
            <Link href="/">
                <h2>JZ2018</h2>
            </Link>
        </div>
    )
}

function MenuButton(props: MenuButtonProps) {
    return <Menu size={40} />
}

function NavItem(props: NavItemProps) {
    return <Link href={props.link} className="nav-item draw meet">{props.children}</Link>
}

class Navigation extends React.Component<NavigationProps, NavigationState> {

    setScrolledPassedTop: Function
    onMenuClick: Function
    setMenuButtonVisible: Function

    constructor(props: NavigationProps) {
        super(props);
        this.setScrolledPassedTop = this.setScrolledPassedTop.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.setMenuButtonVisible = this.setMenuButtonVisible.bind(this);
    }

    state = {
        hasScrolledPassedTop: false,
        showMenuButton: false
    };

    componentWillMount() {
        this.setMenuButtonVisible();
        window.addEventListener('scroll', this.setScrolledPassedTop, false);
        window.addEventListener('resize', this.setMenuButtonVisible, false);
    }

    setMenuButtonVisible(): void {
        this.setState({
            showMenuButton: window.innerWidth < 1500 ? true : false 
        })
    }

    setScrolledPassedTop(): void {
        this.setState({
            hasScrolledPassedTop: window.scrollY > 0 ? true : false
        })
    }

    onMenuClick(): void {
    }

    render() {

        let navClass = classnames({
            'navigation': true,
            'sticky': this.state.hasScrolledPassedTop
        })

        return (
            <Grid className={navClass} fluid>
                <Row>
                    <Col lg={1}>
                        {/*<Logo />*/}
                    </Col>
                    <Col lg>
                        <Row center="lg">
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
                        </Row>
                    </Col>
                    <Col lg={1}>
                        {/*<h1>Hello</h1>*/}
                    </Col>
                </Row>
            </Grid>
        )

        /*
        return (
            <Container fullWidth>
                <div className={navClass}>
                    <Logo sticky={this.state.hasScrolledPassedTop} />
                    {!this.state.showMenuButton ? 
                    <div>
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
                    </div> : <MenuCompact />}
                    {this.state.showMenuButton ? <div className="nav-menu-button">
                        <MenuButton onClick={this.onMenuClick}/>
                    </div> : null}
                </div>
            </Container>
        )
        */
    }
}

export default Navigation;