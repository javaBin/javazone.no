import { connect } from 'react-redux';
import { Link } from 'react-router';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { get } from 'lodash/fp';

const formats = {
    'lightning-talk' : 'Lightning Talks',
    'workshop': 'Workshops',
    'presentation': 'Presentations'
};

function mapStateToProps(state) {
    return {
        sessions: state.sessions.sessions
    };
}

const Session = ({title, speakers, icon, language, id}, key) => (
    <li className='sessions__session session' key={key}>
        <i className={`session__icon ${icon}`}></i>
        <span className='session__lang'>{language}</span>
        <Link to={`/program/${id}`} className='session__title'>{title}</Link>
        <div className='session__speakers'>{speakers}</div>
    </li>
);

const Format = ({format, sessions, className}, id) => (
    <li className='sessions__format' key={id}>
        <div className={`sessions__format-title ${className}`}>{get(format)(formats)}</div>
        <ul className='sessions__sessions'>
            {sessions.map(Session)}
        </ul>
    </li>
);

const Program = React.createClass({
    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    },

    render() {
        const sessions = this.props.sessions;
        return (
            <Page name='program'>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader>JavaZone 2016 – Preliminary program</CenteredHeader>
                        <CenteredContent>
                            <p>
                                The JavaZone Program Committee has been hard at work, and can now proudly present the talks planned for JavaZone 2016.
                                We have a broad range of topics, and we’ll also have lightning talks of both 10 and 20 minutes length with two rooms dedicated to lightning talks.
                            </p>
                            <p>
                                <b>This is not the complete program</b>, talks are still being added as more and more people accept.
                                We’ll publish the finished program over the summer, with info about timeslots and rooms as well.
                            </p>
                            <p>
                                Does the program entice you? Well, make sure to <a href="/tickets">get your ticket</a> sooner rather than later,
                                as we might actually be totally sold out this year – it almost happened last year.
                            </p>
                        </CenteredContent>
                    </CenteredBlock>
                    <ul className='sessions'>
                        {sessions.map(Format)}
                    </ul>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);