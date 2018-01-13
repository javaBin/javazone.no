//@flow
import * as React from 'react';
//import { Container } from '../../components/page';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Stats from '../../components/Stats/Stats';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page.js';
import JavazoneLogo from '../../assets/2018/logo_2018_concept.svg';
import { Link } from '../../components/link';
import './Index.less';

type IndexProps = {
}

function Index(props: IndexProps) {
    return (
        <Page name='index'>
            <Container>
                <div className='index__content'>
                    <div>
                        <img className="logo" src={JavazoneLogo} alt="JavaZone" />
                    </div>
                    <div className='index__text'>
                        JavaZone 2018
                    </div>
                </div>
            </Container>
            <Section pixel fullWidth>
                <Stats>
                </Stats>
            </Section>
            <Section>
                <h1>Noe piss her</h1>
            </Section>
            <Footer />
        </Page> 
    )
}

export default Index;
