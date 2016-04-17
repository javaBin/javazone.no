import React from 'react';
import logo from '../assets/logo.svg';
import wireframelogo from '../assets/logo_wireframe.svg';
import {Link} from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content } from '../components/block';

const docWidth = document.body.clientWidth;
const docHeight = document.body.clientHeight;
const range = 30;

const Index = React.createClass({
    getInitialState() {
        return {
            horizontal: 0,
            vertical: 0
        }
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
                    <Block>
                        <Header>Oslo Spektrum<br />September 7-8th 2016</Header>
                        <Content>
                            <p>
                                Join us in 2016 celebrating the 15th year of JavaZone. The largest community driven conference for developers.
                                The date is now set: JavaZone 2016 will take place at <br />Oslo Spektrum, 7th and 8th of September.
                            </p>
                            <p>
                                The <Link to='speakers'>Call for Speakers</Link> and <Link to='tickets'>Early Bird Ticket sales</Link> are now open.
                                In April, we’ll reveal more information about the conference, and in June/July the final program will be announced.
                                Until then stay tuned by following <a href="https://twitter.com/JavaZone" className="page__link"> @JavaZone</a> on Twitter.
                            </p>
                        </Content>
                    </Block>
                </Container>
            </Page>
        );
    }
});

export default Index;