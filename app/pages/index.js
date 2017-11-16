import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import Page from '../components/page';
import { Container } from '../components/page';
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

    @keydown('enter')
    initGame() {
        this.props.toggleGame();
    }

    renderGameContainer() {
        return (
            <div className='index__game-container'>
            </div>
        )
    }

    renderLogo() {
        return (
            <div>
                <div className='index__text'>
                    JavaZone 2018
                </div>
                <div className='index__game-text'>
                    Press 'ENTER' to start
                </div>
                <div className='index__info'>
                    September 13th –14th 2018<br />
                    Oslo Spektrum
                </div>
            </div>
        );
    }


    render() {
        const { gameVisible } = this.props;
        return (
            <Page name='index'>
                <Container>
                    <div className='index__content'>
                        {gameVisible ? this.renderGameContainer() : this.renderLogo()}
                        <ul className='index__links'>
                            <li className='index__links-item'>
                                <Link href='/info' className='index__link index__link--green'>Info</Link>
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
                                <Link href='/partners' className='index__link index__link--orange'>Partners</Link>
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
