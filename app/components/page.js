import className from 'classname';
import logo from '../assets/logo-white-wireframe.svg';
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
                        <Link href='/partners' className='menu__link menu__link--blue'>Partners</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/speakers' className='menu__link menu__link--pink'>Speakers</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/tickets' className='menu__link menu__link--orange'>Tickets</Link>
                    </li>
                    <li className='menu__links-item'>
                        <Link href='/kids' className='menu__link menu__link--green'>Kids</Link>
                    </li>
                </ul>
        </div>
    </div>
));

export const Page = (props) => {
    const pageClass = `page ${props.name}`;
    const showLogo = typeof props.showLogo !== 'undefined' ? props.showLogo : true;

    if (showLogo) {
        return (
            <div className={pageClass}>
                <Menu />
                <div className='page__logo-container'>
                    <Link href='/'>
                        <img src={logo} className='page__logo' />
                    </Link>
                </div>
                {props.children}
                <Container>
                    <Footer></Footer>
                </Container>
            </div>
        );
    } else {
        return (
            <div className={pageClass}>
                <Menu />
                {props.children}
            </div>
        );
    }
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

export const Container = (props) => (
    <div className='page__container'>
        {props.children}
    </div>
);
