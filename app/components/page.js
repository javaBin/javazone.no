import className from 'classnames';
import logo from '../assets/logo.svg';
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

        <div className={`menu__toggle menu__toggle--${visible ? 'visible': ''}`} onClick={toggleMenu}>
            <h3><span className='menu__arrow'>></span>{!visible ? 'MENU' : 'CLOSE'}</h3>
        </div>
        <div className={`menu__top menu__top--${visible ? 'visible' : 'hidden'}`}></div>
        <div className={`menu__bottom menu__bottom--${visible ? 'visible' : 'hidden'}`}></div>
        <div className={`menu__container menu__container--${visible ? 'visible' : 'hidden'}`}>
            <ul className='menu__links'>
                <li className='menu__links-item'>
                    <Link href='/info' className='menu__link menu__link--green' onClick={toggleMenu}>Info</Link>
                </li>
                <li className='menu__links-item'>
                    <Link href='/partners' className='menu__link menu__link--green' onClick={toggleMenu}>Partners</Link>
                </li>
                {/*
                    <li className='menu__links-item'>
                        <Link href='/tickets' className='menu__link menu__link--blue' onClick={toggleMenu}>Tickets</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/program' className='menu__link menu__link--orange' onClick={toggleMenu}>Program</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/workshops' className='menu__link menu__link--pink' onClick={toggleMenu}>Workshops</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/speakers' className='menu__link menu__link--blue' onClick={toggleMenu}>Speakers</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/videos' className='menu__link menu__link--orange' onClick={toggleMenu}>Videos</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/frivillig' className='menu__link menu__link--pink' onClick={toggleMenu}>Frivillig</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/journeyzone' className='menu__link menu__link--green' onClick={toggleMenu}>JourneyZone</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/kids' className='menu__link menu__link--blue' onClick={toggleMenu}>Kids</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/academy-september' className='menu__link menu__link--orange' onClick={toggleMenu}>Academy</Link>
                    </li>
                */}
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
