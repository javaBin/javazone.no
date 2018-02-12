//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Container.less';

type ContainerProps = {
    children: React.Node,
    fullWidth: bool,
    id?: string
}

Container.defaultProps = {
    fullWidth: false
}

function Container(props: ContainerProps) {

    let colClass = classnames({
        'col-xs': true,
        'col-sm': true,
        'col-md': props.fullWidth,
        'col-lg': props.fullWidth,
        'col-md-10': !props.fullWidth,
        'col-lg-8': !props.fullWidth
    })

    return(
        <div id={props.id} className="row center-xs center-sm center-md center-lg">
            <div className={colClass}>
                <div className="box">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Container;