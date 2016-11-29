import className from 'classname';
import logo from '../assets/logo-white-wireframe.svg';
import { Link } from './link';
import Footer from './footer';

export const Page = (props) => {
    const pageClass = `page ${props.name}`;
    const showLogo = typeof props.showLogo !== 'undefined' ? props.showLogo : true;

    if (showLogo) {
        return (
            <div className={pageClass}>
                <div className='page__logo-container'>
                    <Link href='/'><img src={logo} className='page__logo' /></Link>
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
