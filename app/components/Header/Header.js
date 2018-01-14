//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Header.less';

type HeaderProps = {
    children: string,
    align?: string
}

type SubHeaderProps = {

}

function Header(props: HeaderProps) {

    let headerClass = classnames({
        'header': true,
        'left': props.align === 'left',
        'center': props.align === 'center',
        'right': props.align === 'right'
    })

    return (
        <div className={headerClass}>
            <h1>{props.children}</h1>
        </div>
    )
}

function SubHeader(props: SubHeaderProps) {
    return (
        <div></div>
    )
}

export { Header, SubHeader };