//@flow
import * as React from 'react';
import Container from '../../components/Container/Container'; // Should be removed at some point
import { Section } from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import { LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import Page from '../../components/Page/Page.js';
import javazoneExpo from '../../assets/header_expo.jpg';
import './Index.less';

function Index() {
    return (
        <Page name='index'>
            <Container fullWidth>
                <Banner />
            </Container>
            <Section>
                <Header align="center">This year's event...</Header>
                <LeftBlock header="JavaZone 101 the who, what and where"> 
                <p>
                    JavaZone – the biggest European community-driven conference for modern developers will be 17
                    years old in 2018! Don’t miss out on two days of inspiring tech talks,
                    a day of hands-on sessions, mingling, and a great party!
                </p>
                <p>
                    JavaZone is organized by <a href="https://java.no">javaBin</a>, the Norwegian Java User Group. Our goal is to organize a community-driven conference for Java developers where they can learn new things, share knowledge, and socialize.
                </p>
                <p>
                    We have been organizing JavaZone since 2001 and have been excited to watch the event grow bigger and better every year. In 2017 we hosted over 3100 participants and almost 200 speakers across 7 parallel tracks over the course of two days. In addition, we also offered a selection of 9 workshops held on the day before the conference started.
                </p>
                <p>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years. Don’t procrastinate! Join your fellow Java developers at JavaZone on 12th-13th September 2018!
                </p>
            </LeftBlock>
            </Section>
            <Section pixel alternate>
                <Stats />
            </Section>
            <Section fluid>
                <ImageBlock image={javazoneExpo} alt="JavaZone Expo" />
            </Section>
        </Page> 
    )
}

export default Index;
