import logo from '../assets/logo_menu.svg';
import {Link, IndexLink} from 'react-router';
import header from '../assets/header_2.jpg';

const image = `url('${header}')`;

const style = {
    background: `${image}`
};

export default () => (
    <nav className="javazone__navigation" style={style}>
        <div className="navigation">
            <img src={logo} className="navigation__logo"/>
            <ul className="navigation__list">
                <li className='navigation__item'>
                    <IndexLink to='/' className='navigation__link' activeClassName='navigation__link--active'>Home</IndexLink>
                </li>
                <li className='navigation__item'>
                    <Link to='partners' className='navigation__link' activeClassName='navigation__link--active'>Partners</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='contact' className='navigation__link' activeClassName='navigation__link--active'>Contact</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='about' className='navigation__link' activeClassName='navigation__link--active'>About</Link>
                </li>
            </ul>
        </div>
    </nav>
);