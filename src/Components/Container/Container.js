//@flow
import * as React from 'react';
import styles from './Container.scss';

type Props = {
    children?: React.Node
}

class Container extends React.Component<Props, State> {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>  
        );
    }
}

export default Container;