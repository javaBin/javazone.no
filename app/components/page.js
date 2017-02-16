import className from 'classname';
import logo from '../assets/neon-logo2.svg';
import { Link } from './link';
import Footer from './footer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        visible: state.menu.visible
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu() {
            dispatch({
                type: 'MENU_TOGGLE'
            });
        }
    };
}

const Menu = connect(mapStateToProps, mapDispatchToProps)(({visible, toggleMenu}) => (
    <div className='page__menu menu'>
        <button className='menu__toggle' onClick={toggleMenu}>
            <i className='menu__icon'></i>
        </button>
        <div className={`menu__top menu__top--${visible ? 'visible' : 'hidden'}`}></div>
        <div className={`menu__bottom menu__bottom--${visible ? 'visible' : 'hidden'}`}></div>
        <div className={`menu__container menu__container--${visible ? 'visible' : 'hidden'}`}>
                <ul className='menu__links'>
                    <li className='menu__links-item'>
                        <Link href='/tickets' className='menu__link menu__link--blue' onClick={toggleMenu}>Tickets</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/speakers' className='menu__link menu__link--pink' onClick={toggleMenu}>Speakers</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/partners' className='menu__link menu__link--orange' onClick={toggleMenu}>Partners</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/kids' className='menu__link menu__link--green' onClick={toggleMenu}>Kids</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/academy' className='menu__link menu__link--blue' onClick={toggleMenu}>Academy</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/konkurranse' className='menu__link menu__link--pink' onClick={toggleMenu}>Competition</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/videos' className='menu__link menu__link--orange' onClick={toggleMenu}>Videos</Link>
                    </li>
                </ul>
        </div>
    </div>
));

export const Page = (props) => {
    const pageClass = `page ${props.name}`;

    return (
        <div className={pageClass}>
            <Menu />
            <div className='page__logo-container'>
                <Link href='/'>
                    <img src={logo} className='page__logo' />
                </Link>
            </div>
            {props.children}
            <Container className='footer'>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export const Heading = (props) => {
    return (
        <div className='page__header page__header--centered'>
            {props.children}
        </div>
    );
};

export const LargeHeading = (props) => {
    return (
        <h1 className='page__title'>{props.children}</h1>
    );
};

export const SmallHeading = (props) => {
    return (
        <h2 className='page__sub-title'>{props.children}</h2>
    );
};

export const Pitch = (props) => {
    return (
        <div className='page__pitch'>{props.children}</div>
    );
};

export const PageBody = (props) => (
    <div className='page__body'>
        {props.children}
    </div>
);

export const Container = (props) => {
    const c = className('page__container', props.className);
    return (
        <div className={c}>
            {props.children}
        </div>
    );
};
