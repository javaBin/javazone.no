//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Button.less';

type ButtonProps = {
    children: React.Node,
    link: string,
    target?: bool,
    alternate?: bool
}

type ButtonState = {

}


class Button extends React.Component<ButtonProps, ButtonState> {

    static defaultProps = {
        target: false
    };

    render() {

        let buttonClass = classnames({
            'button': true,
            'button-alternate': this.props.alternate
        })

        return (
            <div className={buttonClass}>
                <a href={this.props.link} target={this.props.target ? '_blank' : '_self' }>
                    {this.props.children}
                </a>
            </div>
        )
    }
}

export default Button;