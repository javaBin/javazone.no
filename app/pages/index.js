import React from 'react';
import logo from '../assets/logo-white-wireframe.svg';
import { Page, Container } from '../components/page';
import { Link } from '../components/link';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.initGame = this.initGame.bind(this);
    }

    initGame() {
        console.log("Starting game... (NOT IMPLEMENTED)");
    }

    render() {
        return (
            <Page name='index'>
                <Container>
                    <div className='index__content'>
                        <div className='index__text'>
                            JavaZone 2018
                        </div>
                        <div className='index__info'>
                            September 13th –14th 2018<br />
                            Oslo Spektrum
                        </div>
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

export default Index;
