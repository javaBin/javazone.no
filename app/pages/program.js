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

const Session = ({title, speakers, icon, language, duration, id}, key, state) => (
    <li className='sessions__session session' key={key}>
        <i className={`session__icon ${icon}`}></i>
        <span className='session__lang'>{language}</span>
        <Link to={`/program/${id}`} className='session__title'>{title} ({duration}min)</Link>
        <div className='session__speakers'>
            <span className='session__mobile-lang'>{language}</span>
            {speakers}
        </div>
    </li>
);

const Slot = ({sessions, timestamp, start}, key, state) => (
    <li className='sessions__slot slot' key={key}>
        <div className='slot__start'>{start}</div>
        <ul className='slot__sessions'>
            {sessions.map((session, id) => Session(session, id, state))}
        </ul>
    </li>
);

const Day = ({slots, day}, key, state) => (
    <li className='sessions__day' key={key} id={day}>
        <div className={`sessions__format-title`}>{day}</div>
        <ul className='sessions__slots'>
            {slots.map((slot, id) => Slot(slot, id))}
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
        this.setState({no: !this.state.no});
    },

    toggleEnglish() {
        this.setState({en: !this.state.en});
    },

    render() {
        const sessions = this.props.sessions;
        console.log(sessions);
        saveSettings(this.state);
        return (
            <Page name='program'>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader>JavaZone 2016 – Program</CenteredHeader>
                    </CenteredBlock>

                    <div className='days'>
                        <div className='days__header'>Days</div>
                        <div className='days__days'>
                            <a href='#Wednesday' className='days__day'>Wednesday</a>
                            <a href='#Thursday' className='days__day'>Thursday</a>
                        </div>
                    </div>

                    <div className='filters'>
                        <div className='filters__header'>Filters</div>
                        <div className='filters__filters'>
                            <button className={`filters__toggle filters__toggle--${this.state.no ? 'enabled' : 'disabled'}`} onClick={this.toggleNorwegian}>Norwegian</button>
                            <button className={`filters__toggle filters__toggle--${this.state.en ? 'enabled' : 'disabled'}`} onClick={this.toggleEnglish}>English</button>
                        </div>
                    </div>

                    <ul className='sessions'>
                        {sessions.map((session, id) => Day(session, id, this.state))}
                    </ul>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);