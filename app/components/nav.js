import React from 'react';
import className from 'classname';
import {Link, IndexLink} from 'react-router';
import logo from '../assets/logo-horisontal-hvit.svg';

const MenuItem = (props) => (
    <li className='navigation__item'>
        <Link to={props.to} className='navigation__link' activeClassName='navigation__link--active' onClick={props.click}>{props.title}</Link>
    </li>
);

const Nav = React.createClass({

    getInitialState() {
        return {
            toggled: false,
            invisible: true
        };
    },

    toggleMenu() {
        if (!this.state.toggled) {
            this.setState({
                toggled: false,
                invisible: false
            });
            setTimeout(() => {
                this.setState({
                    toggled: true,
                    invisible: false
                });
            }, 10);
        } else {
            this.setState({
                toggled: false,
                invisible: false
            });
            setTimeout(() => {
                this.setState({
                    toggled: false,
                    invisible: true
                });
            }, 400);
        }
    },

    render() {
        const navigationClass = className('javazone__navigation', {
            'javazone__navigation--toggled': this.state.toggled
        });

        const navClass = className('navigation', {
            'navigation--toggled': this.state.toggled
        });

        const menuClass = className('navigation__items', {
            'navigation__items--toggled': this.state.toggled,
            'navigation__items--invisible': this.state.invisible
        });

        const iconClass = className('navigation__toggle-icon', {
            'navigation__toggle-icon--toggled': this.state.toggled
        });

        return (
            <nav className={navigationClass}>
                <div className={navClass}>
                    <IndexLink to='/' className='navigation__logo-link'>
                        <img src={logo} className="navigation__logo"/>
                    </IndexLink>
                    <div className='navigation__toggle-container'>
                        <button onClick={this.toggleMenu} type='button' className='navigation__toggle'>
                            <div className={iconClass}></div>
                        </button>
                    </div>
                    <ul className={menuClass}>
                        <MenuItem to={'/program'} title='Program' click={this.toggleMenu} />
                        <MenuItem to={'/workshops'} title='Workshops' click={this.toggleMenu} />
                        <MenuItem to={'/info'} title='Info' click={this.toggleMenu} />
                        <MenuItem to={'/tickets'} title='Tickets' click={this.toggleMenu} />
                        <MenuItem to={'/kids'} title='Kids' click={this.toggleMenu} />
                        <MenuItem to={'/academy'} title='Academy' click={this.toggleMenu} />
                        <MenuItem to={'/journeyzone'} title='JourneyZone' click={this.toggleMenu} />
                        <MenuItem to={'/partners'} title='Partners' click={this.toggleMenu} />
                        <MenuItem to={'/about'} title='About' click={this.toggleMenu} />
                    </ul>
                </div>
            </nav>
        );
    }
});

export default Nav;