//@flow
import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import { Block, Content, SubHeader, P} from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import { Section } from '../../components/Section/Section';
import { CenterBlock, LeftBlock } from '../../components/Block/Block.js';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';

import './AcademyAutumn.less';

function InformationBox({header, children}) {
    return (
        <div className="information-box">
            <h2>{header}</h2>
            {children}
        </div>
    );
}

function InformationGrid() {
    return (
        <Grid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <InformationBox header="Program and speakers">
                        <p>
                        As you will get a full JavaZone ticket for Thursday, you can just check out our regular program for info about the talks. The detailed program that specify which talks will be on Thursday
                        </p>
                    </InformationBox>
                    <InformationBox header="How to register?">
                        <p>
                        The registration for JavaZone Academy are now open. Due to popular demand, we need to limit the number of tickets we give out. You can apply for a ticket, and we'll let you know if you get a spot at least a week before the conference.
                        </p>
                    </InformationBox>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <InformationBox header="How much does it cost?">
                        <p>
                        Well, we're happy to say that there is such a thing as a free lunch! JavaZone Academy is 100% free. You get the ticket, the talks, the food and everything from us for free. Should you need to travel to be able to attend, that's on you. :)
                        </p>
                    </InformationBox>
                    <InformationBox header="Do you do other things for students?">
                        <p>
                        Yes, we do! We usually do the JavaZone Academy event twice a year. In September, it's at the main conference, and in the spring time we come to your town to do it. More info will come. You could also <a href="/frivillig">become a volunteer</a> at the conference.
                        </p>
                    </InformationBox>
                </Col>
            </Row>
        </Grid>
    )
}

function AcademyAutumn() {
    return (
        <Page name='academy-september'>
            <PageHeader subHeader="Autumn Edition! A free taste of JavaZone for IT-students">JavaZone Academy</PageHeader>
            <Section>
                <LeftBlock header="What is JavaZone?">
                    <p>
                    Are you a student? Interested in IT? Come join us for JavaZone Academy. JavaZone Academy is a free event for students in Norway which takes place during the second day of the conference. We invite you to take part in the JavaZone experience in Oslo Spektrum for a full day.
                    </p>
                    <p>
                    You will get a free ticket which gives you access to <a href="/info">the full conference experience</a> on Thursday, September 13th. You will be able to attend <a href="/program">all the talks</a>, mingle in the expo area, talk to our <a href="/partners">partners</a>, taste our great food, and all in all have a great time learning new stuff.
                    </p>
                </LeftBlock>
            </Section>
            <Section>
                <div className="registration-container">
                    <a className='button button--transparent academy-register-button' target="_blank" href="https://goo.gl/forms/CcAmiIRj0HlN9a7v1">Register for JavaZone Academy!</a>
                </div>
            </Section>
            <Section dark>
                <InformationGrid></InformationGrid>
            </Section>
        </Page>
    );
}

export default AcademyAutumn;
