//@flow
import * as React from 'react';
import styles from './Container.scss';

type Props = {
    children?: React.Node,
    id?: string
}

class Container extends React.Component<Props, State> {
    render() {
        return (
            <div id={this.props.id} className="container">
                {this.props.children}
            </div>  
        );
    }
}

export default Container;