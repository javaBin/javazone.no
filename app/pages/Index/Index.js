//@flow
import * as React from 'react';
import { Page, Container } from '../../components/page';
import { Link } from '../../components/link';
import './Index.less';

type Props = {

}

function Index(props: Props) {
    return (
        <Page name='index'>
            <Container>
                <div className='index__content'>
                    <div className='index__text'>
                        JavaZone 2018
                    </div>
                    <div className='index__info'>
                        September 12th – 13th 2018<br />
                        Oslo Spektrum
                    </div>
                    <ul className='index__links'>
                        <li className='index__links-item'>
                            <a className='button button--transparent' href='/info'>Info</a>
                        </li>
                        <li className='index__links-item'>
                            <a className='button button--transparent' href='/partners'>Partners</a>
                        </li>
                        <li className='index__links-item'>
                            <a className='button button--transparent' href='/academy'>Academy</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </Page> 
    )
}

export default Index;
