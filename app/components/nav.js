import React from 'react';
import className from 'className';
import {Link, IndexLink} from 'react-router';
import logo from '../assets/logo_menu.svg';

const Nav = React.createClass({

    getInitialState() {
        return {toggled: false};
    },

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    },

    render() {

        const menuClass = className('navigation__items', {
            'navigation__items--toggled': this.state.toggled
        });

        const iconClass = className('navigation__toggle-icon', {
            'navigation__toggle-icon--toggled': this.state.toggled
        });

        return (
            <nav className="javazone__navigation">
                <div className="navigation">
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
                            <IndexLink to='/' className='navigation__link' activeClassName='navigation__link--active'>Home</IndexLink>
                        </li>
                        <li className='navigation__item'>
                            <Link to='partners' className='navigation__link' activeClassName='navigation__link--active'>Partners</Link>
                        </li>
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