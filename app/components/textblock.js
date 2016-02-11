import className from 'className';

export const Block = (props) => {

    const blockClass = className(
        'textblock',
        props.className, {
            'textblock--block': props.block
        }
    );

    return (
        <div className={blockClass}>
            {props.children}
        </div>
    );
};

export const BlockHeading = (props) => {
    const headingClass = className(
        'textblock__header',
        props.className, {
            'textblock__header--centered': props.center
        }
    );

    return (
        <h2 className={headingClass}>{props.children}</h2>
    );
};

export const Columns = (props) => (
    <div className='textblock__columns'>
        {props.children}
    </div>
);

export const Column = (props) => {
    const colClass = className('textblock__column', {
        'textblock__column--centered': props.center,
        'textblock__column--dark': props.dark
    });

    const textClass = className('textblock__text', {
        'textblock__text--justified': props.justify
    });

    return (
        <div className={colClass}>
            <div className={textClass}>
                {props.children}
            </div>
        </div>
    );
};

export const BackgroundImage = (props) => (
    <div className='background-image' style={{backgroundImage: `url(${props.src})`}}></div>
);

export const ColumnHeading = (props) => {
    const columnHeadingClass = className(
        'textblock__title',
        props.className
    );

    return <h2 className={columnHeadingClass}>{props.children}</h2>;
};

export const P = (props) => {
    const paragraphClass = className(
        'page__paragraph',
        props.className, {
            'page__paragraph--justified': props.justify
        }
    );

    return <p className={paragraphClass}>{props.children}</p>;
};
