import className from 'className';

export const Block = (props) => {

    const blockClass = className('textblock', {
        'textblock--block': props.block
    });

    return (
        <div className={blockClass}>
            {props.children}
        </div>
    );
};

export const BlockHeading = (props) => {
    const headingClass = className('textblock__header',{
        'textblock__header--centered': props.center
    });

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
        'textblock__column--centered': props.center
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

export const ColumnHeading = (props) => (
    <h2 className='textblock__title'>{props.children}</h2>
);

export const P = (props) => (
    <p className='page__paragraph'>{props.children}</p>
);
