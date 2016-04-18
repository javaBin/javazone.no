import React from 'react';
import logo from '../assets/logo.svg';
import wireframelogo from '../assets/logo_wireframe.svg';
import {Link} from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const docWidth = document.body.clientWidth;
const docHeight = document.body.clientHeight;
const range = 30;

const Index = React.createClass({
    getInitialState() {
        return {
            horizontal: 0,
            vertical: 0
        };
    },

    mousemove(ev) {
        const x = ev.pageX;
        const y = ev.pageY;
        const horizontal = ((range * 2) * (x / docWidth)) - range;
        const vertical = -(((range * 2) * (y / docHeight)) - range);
        this.setState({horizontal, vertical});
    },

    componentDidMount(ev) {
        const body = document.body;
        body.addEventListener('mousemove', this.mousemove);
    },

    componentWillUnmount() {
        document.body.removeEventListener('mousemove', this.mousemove);
    },

    render() {
        const style = {
            transform: `rotateX(${this.state.vertical}deg) rotateY(${this.state.horizontal}deg)`
        };

        return (
            <Page name='index'>
                <div className='index__logo'>
                    <img src={wireframelogo} className='index__logo-wireframe' style={style} />
                    <div className='index__logo-title'>
                        15 Years of JavaZone
                    </div>
                </div>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader><span>Join the anniversary of the biggest community-driven conference for modern Java Developers.<br/><br/>See you September 7-8th 2016 in Oslo, Norway</span></CenteredHeader>
                        <CenteredContent>
                            <div className='index__links'>
                                <a className='button button--green button--big index__tickets' href='/tickets'>Get your Tickets</a>
                                <a className='button button--red button--big index__info' href='/info'>Need more Information?</a>
                                <a className='button button--yellow button--big' href='/partners'>See our Partners</a>
                            </div>
                        </CenteredContent>
                    </CenteredBlock>
                </Container>
            </Page>
        );
    }
});

export default Index;