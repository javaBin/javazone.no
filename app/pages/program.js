import { connect } from 'react-redux';
import { Link } from 'react-router';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { without, includes, get, filter, compose, join, map, reduce, orderBy, last, find, groupBy } from 'lodash/fp';

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

const groupByDay = (r) => reduce((acc, session) => {
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
})(r);

const groupBySlot = map(({day, slots}) => ({day: day, slots: createSlots([])(slots)}));
const createSlots = reduce((acc, session) => {
    let slot = last(acc);
    if ((!slot || slot.timestamp !== session.timestamp) && session.format === 'presentation') {
        slot = {timestamp: session.timestamp, start: session.start, sessions: { 'presentation': [], 'lightning-talk': []}};
        acc.push(slot);
    }
    slot.sessions[session.format].push(session);
    return acc;
});

const getTransformedSessions = (r) => compose(
    groupBySlot,
    orderBy(['dayIndex'], ['asc']),
    groupByDay(r),
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

function showLightning(session, timestamp, state) {
    return state.show === 'all' || state.show === session.language || includes(session.room + timestamp, state.myprogram);
}

function isFavorite(id, state) {
    return includes(id, state.myprogram);
}

const Session = ({title, speakers, icon, room, language, duration, id}, key, state, toggleFavorite) => (
    <li className='sessions__session session' key={key}>
        <i className={`session__icon ${icon}`}></i>
        <span className='session__room'>{room}</span>
        <div className='session__title-wrapper'>
            <span className='session__mobile-room'>{room}</span><Link to={`/program/${id}`} className='session__title'>{title}</Link>
        </div>
        <button className={`session__favorite session__favorite--${isFavorite(id, state) ? 'checked' : 'unchecked'}`} onClick={() => toggleFavorite(id)}>
            <i className={isFavorite(id, state) ? 'icon-check' : 'icon-plus'}></i>
        </button>
        <div className='session__speakers'>
            <span className='session__mobile-lang'>{language}</span>
            <span className='session__duration'>{duration} min</span>
            {speakers}
        </div>
    </li>
);

const Lightning = ({title, duration, language, id}, key) => (
    <div key={key} className='lightning__talk'>
        <Link className='lightning__title' to={`/program/${id}`}>{title}</Link>
        <div>
            <span className='lightning__language'>{language}</span>
            <span className='lightning__duration'>{duration} min</span>
        </div>
    </div>
);

const Sessions = (sessions, lightning, timestamp, state, toggleFavorite) => {
    const groupedLightning = groupBy('room')(lightning);
    return (
        <ul className='slot__sessions'>
            {sessions.map((session, id) => Session(session, id, state, toggleFavorite))}
            {Object.keys(groupedLightning).map((room, id) => (
                <li className='sessions__lightning lightning' key={id}>
                    <button className={`lightning__favorite lightning__favorite--${isFavorite(room + timestamp, state) ? 'checked' : 'unchecked'}`} onClick={() => toggleFavorite(room + timestamp)}>
                        <i className={isFavorite(room + timestamp, state) ? 'icon-check' : 'icon-plus'}></i>
                    </button>
                    <span className='lightning__room'>{room}</span>
                    <div className='lightning__header'>
                        <span className='lightning__mobile-room'>{room}</span>Lightning Talks
                    </div>
                    {groupedLightning[room].map((session, id) => Lightning(session, id))}
                </li>
            ))}
        </ul>
    );
};

const NoSessions = () => (
    <div className='slot__no-sessions'>
        –
    </div>
);

function Slot({sessions, timestamp, start}, key, state, toggleFavorite) {
    const filteredPresentations = orderBy(['room'], ['asc'])(sessions.presentation.filter(session => showSession(session, state)));
    const filteredLightning = orderBy(['room'], ['asc'])(sessions['lightning-talk'].filter(session => showLightning(session, timestamp, state)));
    const empty = !filteredPresentations.length && !filteredLightning.length;
    return (
        <li className='sessions__slot slot' key={key}>
            <div className='slot__start'>{start}</div>
            {empty ? NoSessions() : Sessions(filteredPresentations, filteredLightning, timestamp, state, toggleFavorite)}
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
        console.log(id);
        if (includes(id, this.state.myprogram)) {
            this.setState({myprogram: without([id], this.state.myprogram)});
        } else {
            const prev = this.state.myprogram || [];
            this.setState({myprogram: prev.concat(id)});
        }
    },

    render() {
        const sessions = getTransformedSessions([])(this.props.sessions);
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