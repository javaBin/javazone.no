import className from 'className';

export const Block = (props) => {
    const c = className('block', props.className);
    
    return (
        <div className={c}>
            {props.children}
        </div>
    );
};

export const Header = (props) => (
    <h2 className='block__header'>
        {props.children}
    </h2>
);

export const Content = (props) => (
    <div className='block__content'>
        {props.children}
    </div>
);

export const SubHeader = (props) => (
    <h3 className='block__sub-header'>
        {props.children}
    </h3>
);