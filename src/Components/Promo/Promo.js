//@flow
import * as React from 'react';
import styles from './Promo.scss';
import logo from './../NavigationBar/logo.svg';

type Props = {
    children: React.Node
}

type State = {

}

class Promo extends React.Component<Props, State> {
    render() {
        return (
            <div className="promo">
                <div className="promo-logo">
                    <img className="shadow" src={logo} alt="JavaZone" />
                </div>
                <div className="parallax">
                    <div className="layer four"></div>
                    <div className="layer three"></div>
                    <div className="layer two"></div>
                    <div className="layer one"></div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Promo