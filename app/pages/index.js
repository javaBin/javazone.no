import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
//import Page from '../components/page';
import { Page, Container } from '../components/page';
import { Link } from '../components/link';
import keydown from 'react-keydown';
import { connect } from 'react-redux';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.initGame = this.initGame.bind(this);
        this.renderLogo = this.renderLogo.bind(this);
        this.renderGameContainer = this.renderGameContainer.bind(this);
    }

    /*
    @keydown('enter')
    initGame() {
        console.log("LAUNCHING GAME (NOT YET IMPLEMENTED)");
    }
    */

    renderGameContainer() {
        return (
            <div className='index__game-container'>
            </div>
        );
    }

    renderLogo() {
        return (
            <div>
                <div className='index__text'>
                    JavaZone 2018
                </div>
                {/*
                <div className='index__game-text'>
                    Press 'ENTER' to start
                </div>
                */}
                <div className='index__info'>
                    September 13th –14th 2018<br />
                    Oslo Spektrum
                </div>
            </div>
        );
    }


    render() {
        return (
            <Page name='index'>
                <Container>
                    <div className='index__content'>
                        {this.renderLogo()}
                        <ul className='index__links'>
                            <li className='index__links-item'>
                                <a className='button button--transparent' href='/info'>Info</a>
                            </li>
                            {/*
                            <li className='index__links-item'>
                                <Link href='/tickets' className='index__link index__link--blue'>Tickets</Link>
                            </li>
                            <li className='index__links-item'>
                                <Link href='/program' className='index__link index__link--pink'>Program</Link>
                            </li>
                            */}
                            <li className='index__links-item'>
                                <a className='button button--transparent' href='/partners'>Partners</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        gameVisible: state.game.gameVisible
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleGame() {
            dispatch({
                type: 'GAME_VISIBLE'
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);