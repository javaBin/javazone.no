import * as React from 'react';
import styles from './Logo.scss';
import logo from './logo.svg';
import classnames from 'classnames';

let cx = classnames.bind(styles);

type Props = {
    sticky?: boolean
}

function Logo(props: Props) {
    let logoClass = cx({
        logo: true,
        'slide-in': props.sticky,
        'slide-out': !props.sticky
    })
    return <img className={logoClass} src={logo} alt="JavaZone" />
}

export default Logo;