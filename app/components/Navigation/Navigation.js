//@flow
import * as React from 'react';
import Container from '../Container/Container';
import Link from '../Link/Link';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import classnames from 'classnames';
import { Menu } from 'react-feather'; 
import JavazoneLogo from '../../assets/2018/pixelOslo_logo_no_text_white_border_l4.svg';
import './Navigation.less';

type NavigationProps = {
}

type LogoProps = {
    text?: string
}

type NavItemProps = {
    children: React.Node,
    link: string
}

type MenuButtonProps = {
    children?: React.Node,
    onClick: Function,
    showOnlyIcon: bool
}

type NavigationState = {
    hasScrolledPassedTop: bool,
    showMenuButton: bool,
    showMenu: bool
}

function Logo(props: LogoProps) {

    let logoClass = classnames({
        'logo-nav': true
    })

    return (
        <Link href="/" className={logoClass}>
            <img src={JavazoneLogo} alt="Logo" />
            <h2>JZ2018</h2>
        </Link>
    )
}

function MenuButton(props: MenuButtonProps) {

    let menuButtonClass = classnames({
        'nav-item': true,
        'menu-button': true,
        'draw': true,
        'meet': true,
        'menu-button-text': !props.showOnlyIcon
    })

    return (
        <button onClick={props.onClick} className={menuButtonClass}>
            <Menu size={32} />
            {props.showOnlyIcon ? null : props.children}
        </button>
    )
}

function NavItem(props: NavItemProps) {
    return <Link href={props.link} className="nav-item draw meet">{props.children}</Link>
}

class Navigation extends React.Component<NavigationProps, NavigationState> {

    setScrolledPassedTop: Function
    onMenuClick: Function
    setMenuButtonVisible: Function
    renderNavItems: Function
    renderMenuButton: Function

    constructor(props: NavigationProps) {
        super(props);
        this.setScrolledPassedTop = this.setScrolledPassedTop.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.setMenuButtonVisible = this.setMenuButtonVisible.bind(this);
        this.renderNavItems = this.renderNavItems.bind(this);
        this.renderMenuButton = this.renderMenuButton.bind(this);
    }

    state = {
        hasScrolledPassedTop: false,
        showMenuButton: false,
        showMenu: false,
        showOnlyIcon: true
    };

    componentWillMount() {
        this.setMenuButtonVisible();
        window.addEventListener('scroll', this.setScrolledPassedTop);
        window.addEventListener('resize', this.setMenuButtonVisible);
    }

    setMenuButtonVisible(): void {
        let width = window.innerWidth;
        this.setState({
            showMenuButton: width < 1520 ? true : false,
            showMenu: width >= 1520 ? false : this.state.showMenu,
            showOnlyIcon: width < 545 ? true : false
        })
    }

    setScrolledPassedTop(): void {
        this.setState({
            hasScrolledPassedTop: window.scrollY > 0 ? true : false
        })
    }

    onMenuClick(): void {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    renderNavItems() {
        return (
            <Col>
                <Row middle="xs" center="lg">
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
        )
    }

    renderMenuButton() {
        return (
            <Col>
                <Row middle="xs">
                    <MenuButton showOnlyIcon={this.state.showOnlyIcon} onClick={this.onMenuClick}>MENU</MenuButton>
                </Row>
            </Col>
        )
    }

    render() {

        let navClass = classnames({
            'navigation': true,
            'sticky': this.state.hasScrolledPassedTop,
            'mobile-nav': this.state.showMenu
        })

        return (
            <Grid className={navClass} fluid>
                <Row between={this.state.showMenuButton ? "xs" : null} center={this.state.showMenuButton ? null : "lg"}>
                    <Col>
                        <Row middle="xs">
                            <Logo sticky={this.state.hasScrolledPassedTop} />
                        </Row>
                    </Col>
                    {this.state.showMenuButton ? this.renderMenuButton() : this.renderNavItems()}
                </Row>
                {this.state.showMenu ?
                    <Row center="xs">
                        <div className="mobile-menu">
                            {this.renderNavItems()}
                        </div>
                    </Row>
                : null}
            </Grid>
        )
    }
}

export default Navigation;