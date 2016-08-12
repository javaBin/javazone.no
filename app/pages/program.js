import { connect } from 'react-redux';
import { Link } from 'react-router';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { without, includes, get, filter, compose, join, map, reduce, orderBy, last, find } from 'lodash/fp';

window.without = without;

const SETTINGS_KEY = 'programsettings_v2';

const formats = {
    'lightning-talk' : 'Lightning Talks',
    'workshop': 'Workshops',
    'presentation': 'Presentations'
};

const defaultSettings = {
    show: 'all',
    myprogram: []
};

const removeNonAssignedTalksAndWorkshops = filter(session => session.starter !== null && session.format !== 'workshop');

const groupByDay = reduce((acc, session) => {
    let key = find({day: session.day}, acc);
    if (!key) {
        key = {
            day: session.day,
            dayIndex: session.dayIndex,
            slots: []
        };
        acc.push(key);
    }
    key.slots.push(session);
    return acc;
}, []);

const groupBySlot = map(({day, slots}) => ({day: day, slots: createSlots([], slots)}));
const createSlots = reduce((acc, session) => {
    let slot = last(acc);
    if (!slot || slot.timestamp !== session.timestamp && session.format === 'presentation') {
        slot = {timestamp: session.timestamp, start: session.start, sessions: []};
        acc.push(slot);
    }
    slot.sessions.push(session);
    return acc;
});

const getTransformedSessions = compose(
    groupBySlot,
    orderBy(['dayIndex'], ['asc']),
    groupByDay,
    orderBy(['sortIndex', 'timestamp'], ['desc', 'asc']),
    removeNonAssignedTalksAndWorkshops
);

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
    return state.show === 'all' || state.show === session.language || includes(session.id, state.myprogram);
}

function isFavorite(id, state) {
    return includes(id, state.myprogram);
}

const Session = ({title, speakers, icon, language, duration, id}, key, state, toggleFavorite) => (
    <li className='sessions__session session' key={key}>
        <i className={`session__icon ${icon}`}></i>
        <span className='session__lang'>{language}</span>
        <Link to={`/program/${id}`} className='session__title'>{title}</Link>
        <button className={`session__favorite session__favorite--${isFavorite(id, state) ? 'checked' : 'unchecked'}`} onClick={() => toggleFavorite(id)}>{isFavorite(id, state) ? '✔' : '+'}</button>
        <div className='session__speakers'>
            <span className='session__mobile-lang'>{language}</span>
            <span className='session__duration'>{duration}</span>
            {speakers}
        </div>
    </li>
);

const Sessions = (sessions, state, toggleFavorite) => (
    <ul className='slot__sessions'>
        {sessions.map((session, id) => Session(session, id, state, toggleFavorite))}
    </ul>
);

const NoSessions = () => (
    <div className='slot__no-sessions'>
        –
    </div>
);

function Slot({sessions, timestamp, start}, key, state, toggleFavorite) {
    const filtered = sessions.filter(session => showSession(session, state));
    return (
        <li className='sessions__slot slot' key={key}>
            <div className='slot__start'>{start}</div>
            {filtered.length ? Sessions(filtered, state, toggleFavorite) : NoSessions()}
        </li>
    );
};

const Day = ({slots, day}, key, state, toggleFavorite) => (
    <li className='sessions__day' key={key} id={day}>
        <div className={`sessions__format-title sessions__format-title--${day.toLowerCase()}`}>{day}</div>
        <ul className='sessions__slots'>
            {slots.map((slot, id) => Slot(slot, id, state, toggleFavorite))}
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

    setAll() {
        this.setState({show: 'all'});
    },

    setNorwegian() {
        this.setState({show: 'no'});
    },

    setEnglish() {
        this.setState({show: 'en'});
    },

    setMyProgram() {
        this.setState({show: 'my'});
    },

    toggleFavorite(id) {
        if (includes(id, this.state.myprogram)) {
            console.log(id, this.state.myprogram, includes(id, this.state.myprogram));
            this.setState({myprogram: without([id], this.state.myprogram)});
        } else {
            const prev = this.state.myprogram || [];
            this.setState({myprogram: prev.concat(id)});
        }
    },

    render() {
        const sessions = getTransformedSessions(this.props.sessions);
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
                            <button className={`filters__toggle filters__toggle--${this.state.show === 'all' ? 'enabled' : 'disabled'}`} onClick={this.setAll}>All</button>
                            <button className={`filters__toggle filters__toggle--${this.state.show === 'no' ? 'enabled' : 'disabled'}`} onClick={this.setNorwegian}>Norwegian</button>
                            <button className={`filters__toggle filters__toggle--${this.state.show === 'en' ? 'enabled' : 'disabled'}`} onClick={this.setEnglish}>English</button>
                            <button className={`filters__toggle filters__toggle--${this.state.show === 'my' ? 'enabled' : 'disabled'}`} onClick={this.setMyProgram}>My Program</button>
                        </div>
                    </div>

                    <ul className='sessions'>
                        {sessions.map((session, id) => Day(session, id, this.state, this.toggleFavorite))}
                    </ul>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);