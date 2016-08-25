import className from 'classname';

export const CenteredBlock = (props) => {
    const c = className('block block--center', props.className);

    return (
        <div className={c}>
            {props.children}
        </div>
    );
};

export const CenteredHeader = (props) => (
    <h2 className='block__header block__header--center'>
        {props.children}
    </h2>
);

export const CenteredContent = (props) => (
    <div className='block__content block__content--center'>
        {props.children}
    </div>
);