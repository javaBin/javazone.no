import classNames from 'classnames';

export const CBlock = (props) => {
    const fullWidth = typeof props.fullWidth !== 'undefined' ? props.fullWidth : false;
    const c = classNames('block block--center', props.className, {
        'block--center' : !fullWidth,
        'block--center-full-width': fullWidth
    });

    return (
        <div className={c}>
            {props.children}
        </div>
    );
};

export const CHeader = (props) => (
    <h2 className='block__header block__header--center'>
        {props.children}
    </h2>
);

export const CContent = (props) => (
    <div className='block__content block__content--center'>
        {props.children}
    </div>
);
