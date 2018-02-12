//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Header.less';

type HeaderProps = {
    children: string,
    align?: string
}

function Header(props: HeaderProps) {

    let headerClass = classnames({
        'header': true,
        'header-left': props.align === 'left',
        'header-center': props.align === 'center',
        'header-right': props.align === 'right'
    })

    return (
        <div className={headerClass}>
            <h1>{props.children}</h1>
        </div>
    )
}

function SubHeader(props: HeaderProps) {

    let subHeaderClass = classnames({
        'sub-header': true,
        'header-left': props.align === 'left',
        'header-center': props.align === 'center',
        'header-right': props.align === 'right'
    })

    return (
        <div className={subHeaderClass}>
            <h1>{props.children}</h1>
        </div>
    )
}

export { Header, SubHeader };