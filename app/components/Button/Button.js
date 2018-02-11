//@flow
import * as React from 'react';
import './Button.less';

type ButtonProps = {
    children: React.Node,
    color?: string
}

type ButtonState = {

}


class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        return (
            <button className="button">
                {this.props.children}
            </button>
        )
    }
}

export default Button;