import { Page, PageHeading, Container } from '../components/page';
// import { Block, Column, ColumnHeading, P } from '../components/textblock';
import { Block, Header, Content, SubHeader } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

const header = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs';

export default () => (
    <Page name='info'>
        <PageHeading background={header}>Oslo Spektrum, September 7-8th 2016</PageHeading>

        <Container>
            <CenteredBlock className='info__intro'>
                <CenteredHeader>
                    The community-driven conference for modern Java Developers. 
                    Join us for 2 days of awesome learning in Oslo this September.
                </CenteredHeader>
                <CenteredContent>
                    <p>
                        JavaZone is a conference for Java developers created by
                        the Norwegian Java User Group: javaBin. The conference
                        consists of almost 200 speakers and 7 parallel sessions
                        over 2 days, plus an additional day of workshops
                        beforehand (included in the cost of your ticket, but
                        with limited seating). Join us, together with more than
                        2.500 fellow developers in September.
                    </p>
                </CenteredContent>
            </CenteredBlock>

            <div className='info__speaker-info'>
                <div className='info__speaker-info-title'>Pssst!</div>
                <div className='info__speaker-info-body'>
                    Are you a speaker? You can find speaker-related information
                    at the <a href='/speakers' className='page__link'>speaker info page</a>
                </div>
            </div>

            <Block>
                <Header>First things first</Header>
                <Content>
                    <p>
                        The first thing you’ll need is a ticket. Since we believe
                        in simplicity, our tickets are also quite simple: the
                        JavaZone ticket gives you full access to the whole
                        conference – including the workshops (registrations on a
                        first come, first served basis). If you are a member of
                        javaBin, you even get a discount!
                    </p>
                    <p>
                        <a href='/tickets' className='page__link'>Get your ticket today</a>
                    </p>
                </Content>
            </Block>

            <CenteredBlock className='info__got-ticket'>
                <CenteredHeader>
                    So, you got your ticket?
                </CenteredHeader>
                <CenteredContent>
                    <p>
                        Great! Your are now ready to attend JavaZone 2015. If you
                        have been to JavaZone before – welcome back! If you have
                        never attended JavaZone – read on to see what you will be
                        experiencing. A ticket to JavaZone gives you the chance to
                        see a lot of great talks, but there is of course a whole
                        lot more to experience.
                    </p>
                </CenteredContent>
            </CenteredBlock>
        </Container>

        <div className='info__included'>

        </div>

        <div className='info__map'>

        </div>
    </Page>
);