import header from '../assets/speakers.jpg';
import { Block, Column, ColumnHeading, P } from '../components/textblock';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <P className='format__description'>{props.description}</P>
    </li>
);

const lightnings = {
    title: 'Lightning talks',
    length: '10 or 20 minutes',
    description: 'Are you presenting a great new idea, or want to give the audience a teaser for a cool topic? Then you should strongly consider the lightning format.  Note that the 10-20 minute time limit is strictly enforced!'
};

const presentations = {
    title: 'Presentations',
    length: '45 or 60 minutes',
    description: 'Presentations at JavaZone have a length of 60 minutes. This gives you room to elaborate on an idea, and preferably spend a little time at the end taking questions.'
};

const workshops = {
    title: 'Workshops',
    length: '2 hours +',
    description: 'We will continue the popular workshop concept, both half-day and whole-day workshops on Tuesday September 8th and shorter 2-hour workshops during the conference. The format for the workshops is in-depth, hands-on and interactive.'
};

export default () => (
    <div className='page speakers'>
        <div className='page__header page__header--centered' style={headerStyle}>
           <h1 className='page__title partners__title'>Call for Proposals</h1>
        </div>

        <Block>
            <Column justified={true}>
                <ColumnHeading>JavaZone</ColumnHeading>
                <P>
                    JavaZone takes place in Oslo, Norway, on September 7th-8th
                    2015. The conference offers a combination of technical talks
                    and workshops in an informal atmosphere with an expected
                    attendance of more than 2500 highly skilled developers.
                </P>
                <P>
                    JavaZone 2016 will be the 15th consecutive JavaZone conference,
                    and will consist of a day of workshops followed by two days
                    of presentations and (more) workshops. Last year's event was
                    a great success with more than 2500 attendees enjoying 150
                    talks covering a wide range of topics.  Speakers include both
                    internationally known names and home grown Norwegian talent.
                </P>
            </Column>
            <Column justified={true}>
                <ColumnHeading>&nbsp;</ColumnHeading>
                <P>
                    Over the last decade JavaZone has grown to become one of
                    the most important Java events in Europe! You can see for
                    yourself – videos from previous years are available for
                    free at Vimeo, and the full program from JavaZone 2015
                    can be found at last year's web page.
                </P>
                <P>
                    We can brag as much as we want, but JavaZone would be
                    nothing without all the great speakers! And that is why
                    we need your help to make sure that JavaZone 2016 will be
                    at least as awesome as the earlier events. If you think you
                    have something interesting to share, please submit your
                    talk or workshop by the 18th of April, 2016.
                </P>
            </Column>
        </Block>

        <Block>
            <Column centered={true}>
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
            <Column justified={true}>
                <ColumnHeading>Technical Level</ColumnHeading>
                <P>
                    The audience at JavaZone mostly consists of software
                    developers and in general talks and workshops should
                    be technical enough that they include code (although
                    that is not a requirement). Talks purely related to
                    practices (agile etc.) are less likely to be accepted.
                </P>
                <P>
                    When you submit your talk, you should indicate whether
                    there will be code in your slides or not. If you are going
                    to perform live coding, please state that as well!
                </P>
            </Column>
            <Column justified={true}>
                <ColumnHeading>Get some inspiration</ColumnHeading>
                <dl className='speakers__inspiration'>
                    <dt className='speakers__inspiration-title'>Speakers workshop</dt>
                    <dd className='speakers__inspiration-description'>We will arrange a workshop for all speakers who consider submitting a talk to JavaZone. This workshop will be held at Teknologihuset March 1st at 17.00. More info at meetup.com/javaBin.</dd>
                    <dt className='speakers__inspiration-title'>Presentation skills workshop</dt>
                    <dd className='speakers__inspiration-description'>We plan to have a professional coach which will give you a lot of tips and tricks on how to hold an amazing presentation. This session will be held in August, and all accepted speakers will be invited.</dd>
                </dl>
            </Column>
        </Block>

        <Block>
            <Column centered={true}>
                <ColumnHeading>Dates & Deadlines</ColumnHeading>
                <p>The good, old timeline</p>
            </Column>
        </Block>

        <Block>
            <Column>
                <ColumnHeading>What’s in it for me?</ColumnHeading>
            </Column>
        </Block>
    </div>
);
