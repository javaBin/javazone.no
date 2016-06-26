import { connect } from 'react-redux';
import { Link } from 'react-router';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { get } from 'lodash/fp';

const SETTINGS_KEY = 'programsettings';

const formats = {
    'lightning-talk' : 'Lightning Talks',
    'workshop': 'Workshops',
    'presentation': 'Presentations'
};

const defaultSettings = {
    en: true,
    no: true
};

function getDefaultSettings() {
    try {
        const settings = localStorage.getItem(SETTINGS_KEY);
        if (!settings) {
            return defaultSettings;
        }

        return JSON.parse(settings);
    } catch (e) {
        return defaultSettings;
    }
}

function saveSettings(settings) {
    try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
        console.warn('Could not save program filters', e);
    }
}

function mapStateToProps(state) {
    return {
        sessions: state.sessions.sessions
    };
}

function showSession(session, state) {
    return state[session.language];
}

const Session = ({title, speakers, icon, language, id}, key, state) => (
    <li className='sessions__session session' key={key}>
        <i className={`session__icon ${icon}`}></i>
        <span className='session__lang'>{language}</span>
        <Link to={`/program/${id}`} className='session__title'>{title}</Link>
        <div className='session__speakers'>
            <span className='session__mobile-lang'>{language}</span>
            {speakers}
        </div>
    </li>
);

const Format = ({format, sessions, className}, id, state) => (
    <li className='sessions__format' key={id}>
        <div className={`sessions__format-title ${className}`}>{get(format)(formats)}</div>
        <ul className='sessions__sessions'>
            {sessions.filter(session => showSession(session, state)).map(Session)}
        </ul>
    </li>
);

const Program = React.createClass({

    getInitialState() {
        return getDefaultSettings();
    },

    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    },

    toggleNorwegian() {
        if (this.state.en)
            this.setState({no: !this.state.no});
        else
            this.setState({
                no: !this.state.no,
                en: true;
            });
    },

    toggleEnglish() {
         if (this.state.no)
            this.setState({en: !this.state.en});
        else
            this.setState({
                en: !this.state.en,
                no: true;
            });
    },

    render() {
        const sessions = this.props.sessions;
        saveSettings(this.state);
        return (
            <Page name='program'>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader>JavaZone 2016 – Preliminary program</CenteredHeader>
                        <CenteredContent>
                            <p>
                                The JavaZone Program Committee has been hard at work, and can now proudly present the talks planned for JavaZone 2016.
                                We have a broad range of topics, and we’ll also have lightning talks of both 10 and 20 minutes length with two rooms dedicated to lightning talks.
                                <br /><b>All workshops will be held on Tuesday 6th, the day before the main conference.</b>
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

                    <div className='filters'>
                        <div className='filters__header'>Filters</div>
                        <div className='filters__filters'>
                            <button className={`filters__toggle filters__toggle--${this.state.no ? 'enabled' : 'disabled'}`} onClick={this.toggleNorwegian}>Norwegian</button>
                            <button className={`filters__toggle filters__toggle--${this.state.en ? 'enabled' : 'disabled'}`} onClick={this.toggleEnglish}>English</button>
                        </div>
                    </div>

                    <ul className='sessions'>
                        {sessions.map((session, id) => Format(session, id, this.state))}
                    </ul>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);
