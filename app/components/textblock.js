import className from 'className';

export const Block = (props) => (
    <div className='textblock'>
        {props.children}
    </div>
);

export const Column = (props) => {
    const colClass = className('textblock__column', {
        'textblock__column--centered': props.centered
    });

    const textClass = className('textblock__test', {
        'textblock__text textblock__text--jusfified': props.justified
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