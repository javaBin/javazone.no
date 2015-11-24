import logo from '../assets/logo_menu.svg';
import {Link, IndexLink} from 'react-router';

export default () => (
    <nav className="javazone__navigation">
        <div className="navigation">
            <IndexLink to='/'>
                <img src={logo} className="navigation__logo"/>
            </IndexLink>
            <ul className="navigation__list">
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

// <li className='navigation__item'>
//     <Link to='contact' className='navigation__link' activeClassName='navigation__link--active'>Contact</Link>
// </li>
// <li className='navigation__item'>
//     <Link to='about' className='navigation__link' activeClassName='navigation__link--active'>About</Link>
// </li>