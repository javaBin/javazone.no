export const List = (props) => (
    <ul className='list'>
        {props.children}
    </ul>
);

export const ListItem = (props) => (
    <li className='list__item'>{props.children}</li>
);
