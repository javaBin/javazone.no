//@flow
import * as React from 'react';
import classnames from 'classnames';
import Link from '../Link/Link';
import './Button.less';

type ButtonProps = {
    children: React.Node,
    link: string,
    target?: bool,
    margin?: bool,
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
            'button-alternate': this.props.alternate,
            'button-margin': this.props.margin
        })

        return (
            <div className={buttonClass}>
                <Link href={this.props.link}>{this.props.children}</Link>
            </div>
        )
    }
}

export default Button;