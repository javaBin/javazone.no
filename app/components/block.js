export const Block = (props) => (
    <div className='block'>
        {props.children}
    </div>
);

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