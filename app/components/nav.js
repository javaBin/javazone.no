import React from 'react';
import logo from '../assets/logo.svg';
import {Link, IndexLink} from 'react-router';

export default () => (
    <nav className="javazone__navigation" >
        <div className="navigation">
            <img src={logo} className="navigation__logo"/>
            <ul className="navigation__list">
                <li><IndexLink to='/' className="navigation__item" activeClassName="navigation__item--active">Home</IndexLink></li>
                <li><Link to='contact' className="navigation__item" activeClassName="navigation__item--active">Contact</Link></li>
            </ul>
        </div>
    </nav>
);