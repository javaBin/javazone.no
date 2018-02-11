//@flow
import * as React from 'react';
import Container from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import { LeftBlock, CenterBlock, RightBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import Page from '../../components/Page/Page.js';
import Javazone1 from '../../assets/header_expo.jpg';
import JavazoneLogo from '../../assets/2018/logo_2018_concept_pixel_white.svg';
import { Link } from '../../components/link';
import './Index.less';

type IndexProps = {
}

function Index(props: IndexProps) {
    return (
        <Page name='index'>
            <Container fullWidth>
                <Banner />
            </Container>
            <Section pixel alternate>
                <Stats />
            </Section>
            <Section>
                <Header align="center">This year's event...</Header>
                <LeftBlock header="JAVAZONE 101 THE WHO, WHAT AND WHERE">
                    <p>
                    JavaZone – the biggest European community-driven conference for modern developers is 2^4 years old this year! Don’t miss out on two days of birthday celebrations full of inspiring tech talks, hands on sessions, mingling, and a great party!
                    </p>
                    <p>
                    JavaZone is organized by javaBin, the Norwegian Java User Group. Our goal is to organize a community-driven conference for Java developers where they can learn new things, share knowledge, and socialise.
                    </p>
                    <p>
                    We have been arranging JavaZone since 2001 and have been excited to watch the event grow bigger and better every year. This year we are hosting almost 200 speakers across 7 parallel tracks over the course of two days. In addition we offer a selection of workshops held on the day before the conference starts.
                    </p>
                    <p>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years. Don’t procrastinate! Join 3000 fellow developers at JavaZone on 13th-14th September, 2017! 
                    </p>
                </LeftBlock>
            </Section>
            <Section fluid>
                <ImageBlock image={Javazone1} alt="JavaZone Expo" />
            </Section>
        </Page> 
    )
}

export default Index;
