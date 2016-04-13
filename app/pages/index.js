import logo from '../assets/logo.svg';
import header from '../assets/header_sal1.jpg';
import {Link} from 'react-router';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content } from '../components/block';

export default () => (
    <Page>
        <PageHeading background={header}>
           15 Years of JavaZone
        </PageHeading>
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