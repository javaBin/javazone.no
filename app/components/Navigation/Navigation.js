//@flow
import * as React from 'react';
import './Navigation.less';
import Container from '../Container/Container';

type NagivationProps = {

}

type NavigationState = {

}

class Navigation extends React.Component<NavigationProps, NavigationState> {
    render() {
        return (
            <Container>
                <div className="row center-lg">
                    <div className="col-xs col-sm col-md col-lg">
                        <div className="box">
                            <h2>JAVAZONE</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg">
                        <div className="box">
                            <h2>INFO</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg">
                        <div className="box">
                            <h2>PROGRAM</h2>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Navigation;