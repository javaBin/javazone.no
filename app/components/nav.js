import React from 'react';
import className from 'className';
import {Link, IndexLink} from 'react-router';
import logo from '../assets/logo_menu.svg';

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
                    <IndexLink to='/'>
                        <img src={logo} className="navigation__logo"/>
                    </IndexLink>
                    <div className='navigation__toggle-container'>
                        <button onClick={this.toggleMenu} type='button' className='navigation__toggle'>
                            <div className={iconClass}></div>
                        </button>
                    </div>
                    <ul className={menuClass}>
                        <li className='navigation__item'>
                            <IndexLink to='/' className='navigation__link' activeClassName='navigation__link--active' onClick={this.toggleMenu}>Home</IndexLink>
                        </li>
                        <MenuItem to={'partners'} title='Partners' click={this.toggleMenu} />
                        <MenuItem to={'tickets'} title='Tickets' click={this.toggleMenu} />
                        <MenuItem to={'speakers'} title='Speakers' click={this.toggleMenu} />
                        <MenuItem to={'academy'} title='Academy' click={this.toggleMenu} />
                    </ul>
                </div>
            </nav>
        );
    }
});

export default Nav;

// <li className='navigation__item'>
//     <Link to='contact' className='navigation__link' activeClassName='navigation__link--active'>Contact</Link>
// </li>
// <li className='navigation__item'>
//     <Link to='about' className='navigation__link' activeClassName='navigation__link--active'>About</Link>
// </li>