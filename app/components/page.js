import className from 'classname';

export const Page = (props) => {
    const pageClass = `page ${props.name}`;

    return (
        <div className={pageClass}>
            {props.children}
        </div>
    );
};

export const PageHeading = (props) => {
    const headerStyle = {
        backgroundImage: `url(${props.background})`
    };

    return (
        <div className='page__header page__header--centered' style={headerStyle}>
            <h1 className='page__title'>{props.children}</h1>
        </div>
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