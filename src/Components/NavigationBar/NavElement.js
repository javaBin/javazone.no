//@flow
import * as React from 'react';
import styles from './NavElement.scss';

type Props = {
    text: string,
    link: string
}

function NavElement(props: Props) {
    return (
        <div className="nav-element">
            {props.text}
        </div>
    );
}

export default NavElement;