import { connect } from 'react-redux';
import { Link } from '../components/link';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container, Heading, LargeHeading, SmallHeading } from '../components/page';
import { Block, Header, Content, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { without, includes, get, filter, compose, join, map, reduce, orderBy, last, find, groupBy } from 'lodash/fp';

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

function getFormat(f) {
    if (f === 'presentation') {
        return 'icon-screen-desktop';
    } else if (f === 'workshop') {
        return 'icon-wrench';
    } else {
        return 'icon-energy';
    }
}

const removeWorkshops = filter(session => session.format !== 'workshop');

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

const dummyGroupBySlot = map(({day, slots}) => {
    return {day: day, slots: [{sessions: {'presentation': slots, 'lightning-talk': []}}]};
});

const getTransformedSessions = (r) => compose(
    groupBySlot,
    orderBy(['dayIndex'], ['asc']),
    groupByDay(r),
    orderBy(['sortIndex', 'timestamp'], ['desc', 'asc']),
    removeWorkshops
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
        isFetching: state.sessions.isFetching,
        sessions: state.sessions.sessions,
        failure: state.sessions.failure
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

function hasVideo(video) {
    return typeof video !== 'undefined';
}

const Session = ({title, speakers, icon, room, language, duration, id, video, format}, key, state, toggleFavorite) => (
    <li className='sessions__session session' key={key}>
        <i className={`session__icon ${icon}`}></i>
        {hasVideo(video) ?
            <Link href={`/program/${id}`} className='session__video-title'><span className='session__video'><i className='icon-control-play'></i></span></Link> :
            <span className='session__room'>{room}</span>}
        <div className='session__title-wrapper'>
            {hasVideo(video) ?
                <Link href={`/program/${id}`} className='session__video-title'><span className='session__mobile-video'><i className='icon-control-play'></i></span></Link> :
                <span className='session__mobile-room'>{room}</span>
            }
            <Link href={`/program/${id}`} className='session__title'>{title}</Link>
        </div>
        <button className={`session__favorite session__favorite--${isFavorite(id, state) ? 'checked' : 'unchecked'}`} onClick={() => toggleFavorite(id)}>
            <i className={isFavorite(id, state) ? 'icon-check' : 'icon-plus'}></i>
        </button>
        <div className='session__speakers'>
            <span className='session__mobile-lang'>{language}</span>
            <span className='session__duration'>{duration} min</span>
            {speakers.map(speaker => speaker.name).join(', ')}
        </div>
    </li>
);

const Lightning = ({title, duration, language, speakers, id, video}, key) => (
    <div key={key} className='lightning__talk'>
        {hasVideo(video) ?
            <Link className='lightning__title' href={`/program/${id}`}><span className='session__video session__video--lightning'><i className='icon-control-play'></i></span></Link> :
            <span></span>}
        <Link className='lightning__title' href={`/program/${id}`}>{title}</Link>
        <div>
            <span className='lightning__language'>{language}</span>
            <span className='lightning__duration'>{duration} min</span>
            <span className='lightning__speakers'>{speakers.map(s => s.name).join(', ')}</span>
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

const Loading = () => (
    <div className='program__loading'>
        Hold on! I’m trying to get hold of the program right as we speak. Shouldn’t take too long!
    </div>
);

const Failure = () => (
    <div className='program__loading'>
        <h2 className='program__loading-header'>Woooops!</h2>
        It seems something is seriously wrong here. We are most likely informed and working on it, so just try again in a while.
    </div>
);

function showEmptyMyProgram(state) {
    return state.show === 'my' && state.myprogram.length === 0;
}

const EmptyMyProgram = () => (
    <div className='program__empty'>
        <p>
            What’s this, you say? Well, it’s your program! Switch over to "All", "Norwegian" or "English",
            and start adding stuff to it with the <i className='icon-plus'></i> button. Keep in mind that this
            is saved to your browsers localStorage, so you should do it on the device you will be using during JavaZone.
            If you want to remove something from your program, just hit the <i className='icon-check'></i> button.
        </p>
    </div>
);

const HasProgram = (sessions, state, toggleFavorite, setAll, setNorwegian, setEnglish) => (
    <div>
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
                <button className={`filters__toggle filters__toggle--${state.show === 'all' ? 'enabled' : 'disabled'}`} onClick={setAll}>All</button>
                <button className={`filters__toggle filters__toggle--${state.show === 'no' ? 'enabled' : 'disabled'}`} onClick={setNorwegian}>Norwegian</button>
                <button className={`filters__toggle filters__toggle--${state.show === 'en' ? 'enabled' : 'disabled'}`} onClick={setEnglish}>English</button>
                <button className={`filters__toggle filters__toggle--${state.show === 'my' ? 'enabled' : 'disabled'}`} onClick={}>My Program</button>
            </div>
        </div>

        <ul className='sessions'>
            {showEmptyMyProgram(state) ? EmptyMyProgram() : sessions.map((session, id) => Day(session, id, state, toggleFavorite))}
        </ul>
    </div>
);

class Program extends React.Component {

    constructor(props) {
        super(props);
        this.state = getDefaultSettings();
        this.setAll = this.setAll.bind(this);
        this.setNorwegian = this.setNorwegian.bind(this);
        this.setEnglish = this.setEnglish.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    }

    setAll() {
        this.setState({show: 'all'});
    }

    setNorwegian() {
        this.setState({show: 'no'});
    }

    setEnglish() {
        this.setState({show: 'en'});
    }

    toggleFavorite(id) {
        if (includes(id, this.state.myprogram)) {
            this.setState({myprogram: without([id], this.state.myprogram)});
        } else {
            const prev = this.state.myprogram || [];
            this.setState({myprogram: prev.concat(id)});
        }
    }

    render() {
        const content = this.props.failure
            ? <Failure />
            : this.props.isFetching
                ? Loading()
                : HasProgram(getTransformedSessions([])(this.props.sessions), this.state, this.toggleFavorite, this.setAll, this.setNorwegian, this.setEnglish);

        saveSettings(this.state);

        return (
            <Page name='program'>
                <Container>
                    {content}
                </Container>
            </Page>
        );
    }
};

export default connect(mapStateToProps, { getSessions })(Program);
