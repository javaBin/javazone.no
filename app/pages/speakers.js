import header from '../assets/speakers.jpg';
import Timeline from '../components/timeline';
import { Page, PageHeading, PageBody } from '../components/page';
import { Block, BlockHeading, Columns, Column, ColumnHeading, P } from '../components/textblock';
import { Link } from 'react-router';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <P justify={true} className='format__description'>{props.description}</P>
    </li>
);

const lightnings = {
    icon: 'icon-energy',
    title: 'Lightning talks',
    length: '10 or 20 minutes',
    description: 'Are you presenting a great new idea, or want to give the audience a teaser for a cool topic? Then you should strongly consider the lightning format.  Note that the 10/20 minute time limit is strictly enforced!'
};

const presentations = {
    icon: 'icon-graduation',
    title: 'Presentations',
    length: '45 or 60 minutes',
    description: 'Presentations at JavaZone have a length of 45 to 60 minutes, including time for questions. This gives you room to both elaborate on an idea and interact with your audience.'
};

const workshops = {
    icon: 'icon-screen-desktop',
    title: 'Workshops',
    length: '2 hours +',
    description: 'We will continue the popular workshop concept, both half-day and whole-day workshops on Tuesday September 6th and shorter 2-hour workshops during the conference. The format for the workshops is in-depth, hands-on and interactive.'
};

export default () => (
    <Page>
        <PageHeading background={header}>
           Call for Speakers
        </PageHeading>

        <PageBody>
            <Block block={true}>
                <BlockHeading center={true}>What is JavaZone?</BlockHeading>
                <Columns>
                    <Column justify={true}>
                        <P>
                            JavaZone takes place in Oslo, Norway, on September 7th-8th
                            2015. The conference offers a combination of technical talks
                            and workshops in an informal atmosphere with an expected
                            attendance of more than 2500 highly skilled developers.
                        </P>
                        <P>
                            JavaZone 2016 will be the 15th consecutive JavaZone conference,
                            and will consist of a day of workshops followed by two days
                            of presentations and (more) workshops. Last year’s event was
                            a great success with more than 2500 attendees enjoying 150
                            talks covering a wide range of topics.  Speakers include both
                            internationally known names and home grown Norwegian talent.
                        </P>
                    </Column>
                    <Column justify={true}>
                        <P>
                            Over the last decade JavaZone has grown to become one of
                            the most important Java events in Europe. You can see for
                            yourself – videos from previous years are available for
                            free at <a href='https://vimeo.com/javazone'>Vimeo</a>, and
                            the full program from JavaZone 2015 can be found
                            at <a href='http://2015.javazone.no/program.html'>last year’s web page</a>.
                        </P>
                        <P>
                            We can brag as much as we want, but JavaZone would be
                            nothing without all the great speakers. And that is why
                            we need your help to make sure that JavaZone 2016 will be
                            at least as awesome as the earlier events. If you think you
                            have something interesting to share, please submit your
                            talk or workshop by April 18th 2016.
                        </P>
                    </Column>
                </Columns>
            </Block>

            <Block>
                <Column center={true}>
                    <P>
                        <a href='http://javazone.no/submitit' className='button button--green'>
                            <span className='button__icon icon-check'></span> Submit your talk today!
                        </a>
                    </P>
                </Column>
            </Block>

            <Block>
                <Column center={true}>
                    <div className='speakers__formats'>
                        <span className='icon-clock'></span>
                    </div>
                    <ColumnHeading>Formats and Duration</ColumnHeading>
                    <P>
                        You should think about which format your talk will work
                        best in. Are you presenting a new idea, or do you require
                        more time to elaborate on your subject? How hands-on do
                        you want to be? We have three formats you can present
                        your material in.
                    </P>
                </Column>
            </Block>

            <Block>
                <Column>
                    <ul className='presentation-formats'>
                        <Format {...lightnings} />
                        <Format {...presentations} />
                        <Format {...workshops} />
                    </ul>
                </Column>
            </Block>

            <Block>
                <Column justify={true}>
                    <ColumnHeading>Technical Level</ColumnHeading>
                    <P justify={true}>
                        The audience at JavaZone mostly consists of software
                        developers and in general talks and workshops should
                        be technical enough that they include code (although
                        that is not a requirement). Talks purely related to
                        practices (agile etc.) are less likely to be accepted.
                    </P>
                    <P justify={true}>
                        When you submit your talk, you should indicate whether
                        there will be code in your slides or not. If you are going
                        to perform live coding, please state that as well!
                    </P>
                </Column>
                <Column justify={true}>
                    <ColumnHeading>Get some inspiration</ColumnHeading>
                    <dl className='speakers__inspiration'>
                        <dt className='speakers__inspiration-title'>Speakers workshop</dt>
                        <dd className='speakers__inspiration-description'>We will arrange a workshop for all speakers who consider submitting a talk to JavaZone. This workshop will be held at Teknologihuset March 1st at 17.00. More info at <a href='http://www.meetup.com/javaBin/events/228728923/'>meetup.com/javaBin</a>.</dd>
                        <dt className='speakers__inspiration-title'>Presentation skills workshop</dt>
                        <dd className='speakers__inspiration-description'>We plan to have a professional coach which will give you a lot of tips and tricks on how to hold an amazing presentation. This session will be held in August, and all accepted speakers will be invited. More information coming soon.</dd>
                    </dl>
                </Column>
            </Block>

            <Block>
                <Column center={true}>
                    <ColumnHeading>Dates & Deadlines</ColumnHeading>
                    <Timeline />
                </Column>
            </Block>

            <Block>
                <Column>
                    <ColumnHeading>What’s in it for me?</ColumnHeading>
                    <dl className='speakers__accepted'>
                        <dt className='speakers__accepted-title'>Accepted presentations and workshops</dt>
                        <dd className='speakers__accepted-description'>You get free admission to the conference. Additionally you are also invited to the speakers' dinner, held on September 6th. Finally, you have first priority on the limited number of slots for JourneyZone, our annual speaker adventure.</dd>
                        <dt className='speakers__accepted-title'>Accepted lightning talks</dt>
                        <dd className='speakers__accepted-description'>You are invited to the speakers' dinner, held on September 6th, and will also be invited to apply for a place on our JourneyZone. You have to provide your own ticket to JavaZone.</dd>
                        <dt className='speakers__accepted-title'>Monetary policy</dt>
                        <dd className='speakers__accepted-description'>Please see our <Link to='monetary-policy' className='page__link'>monetary policy</Link> if you have any questions regarding coverage of other expenses.</dd>
                    </dl>
                </Column>
                <Column justify={true}>
                    <ColumnHeading>Important principles</ColumnHeading>
                    <P>
                        JavaZone is proud to be an independent and community-driven
                        conference. It is organized by javaBin, the idealistic and
                        non-profit Norwegian Java User Group. This means that we
                        have three important principles for selecting talks.
                    </P>
                    <ul className='speakers__principles'>
                        <li className='speakers__principle'>We do not sell speaker slots</li>
                        <li className='speakers__principle'>We do not accept sales pitches masked as presentations</li>
                        <li className='speakers__principle'>We do not differentiate between speakers from partners and independent speakers</li>
                    </ul>
                    <P>
                        If your talk adheres to these very important principles,
                        you are more than welcome to submit it!
                    </P>
                </Column>
            </Block>

            <Block>
                <Column center={true}>
                    <P>
                        <a href='http://javazone.no/submitit' className='button button--green'>
                            <span className='button__icon icon-check'></span>Submit your talk today!
                        </a>
                    </P>
                </Column>
            </Block>

            <Block block={true}>
                <Column center={true}>
                    <ColumnHeading>We hope to see you at JavaZone 2016 – please feel free to spread the word to your local community!</ColumnHeading>
                    <P className='speakers__regards'>
                        Best regards,<br />the JavaZone Program Committee
                    </P>
                </Column>
            </Block>
        </PageBody>
    </Page>
);
