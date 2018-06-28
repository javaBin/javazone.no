import { connect } from 'react-redux';
import { Link } from '../../components/link';
import { store } from '../../store';
import { getSessions } from '../../actions/sessions';
import { Section } from '../../components/Section/Section.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block.js';
import { Clock, Globe, User, Users } from 'react-feather';
import Page from '../../components/Page/Page';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as React from 'react';
import { Container, Heading, LargeHeading, SmallHeading } from '../../components/page';
import { Block, Header, Content, P } from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { without, includes, get, filter, compose, join, map, reduce, orderBy, last, find, groupBy } from 'lodash/fp';
import Loader from '../../components/Loader/Loader.js';
import './Program.less';

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
/*
const getTransformedSessions = (r) => compose(
    groupBySlot,
    orderBy(['dayIndex'], ['asc']),
    groupByDay(r),
    orderBy(['sortIndex', 'timestamp'], ['desc', 'asc']),
    removeWorkshops
);
*/

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
        <Row className='program-slot' key={key}>
            <div className='program-slot-start'>{start}</div>
            {/* {empty ? NoSessions() : Sessions(filteredPresentations, filteredLightning, timestamp, state, toggleFavorite)} */}
        </Row>
    );
};

function Day({slots, day}, key, state, toggleFavorite) {
    return (
        <div className="program-day" key={key} id={day}>
            <Row>
                <h1 className="program-day-header">{day}</h1>
            </Row>
            <Row className="program-day-slots">
                {slots.map((slot, id) => Slot(slot, id, state, toggleFavorite))}
            </Row>
        </div>
    );
};

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

function generateSpeakersString(speakers: []): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length-1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}

type DayProps = {
    sessions: [];
}

function Wedensday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2018-09-12'));
    return (
        filteredList.length > 0 ?
        <div>
            <h1 className="program-day-header">Wedensday</h1>
            {filteredList.map((session, idx) => {
                return <div key={session.sessionId} className="program-simple-session-item">
                    <Row className="program-simple-session-title">
                        <Link href={`/program/${session.sessionId}`}>{session.title}</Link>
                    </Row>
                    <Row>
                        <Col className="program-margin-right">
                            {session.language === 'en' ? 'English' : 'Norwegian'}
                        </Col>
                        <Col className="program-margin-right">
                            {`${session.length} Minutes`}
                        </Col>
                        <Col>
                            {session.speakers.length > 1 ? generateSpeakersString(session.speakers) : session.speakers[0].name}
                        </Col>
                    </Row>
                </div>
            })}
        </div> : null
    );
}

function Thursday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2018-09-13'));
    return (
        filteredList.length > 0 ?
        <div>
            <h1 className="program-day-header">Thursday</h1>
            {filteredList.map((session, idx) => {
                return <div key={session.sessionId} className="program-simple-session-item">
                    <Row className="program-simple-session-title">
                        <Link href={`/program/${session.sessionId}`}>{session.title}</Link>
                    </Row>
                    <Row>
                        <Col className="program-margin-right">
                            {session.language === 'en' ? 'English' : 'Norwegian'}
                        </Col>
                        <Col className="program-margin-right">
                            {`${session.length} Minutes`}
                        </Col>
                        <Col>
                            {session.speakers.length > 1 ? generateSpeakersString(session.speakers) : session.speakers[0].name}
                        </Col>
                    </Row>
                </div>
            })}
        </div> : null
    );
}

type SimpleSessionListProps = {
    sessions: [];
    type: string;
}

function SimpleSessionList(props: SimpleSessionListProps) {
    const filteredList = (props.type !== 'all') ? props.sessions.filter(session => {
        return session.format === props.type;
    }) : props.sessions;
    return (
        <div>
            <Wedensday sessions={filteredList} />
            <Thursday sessions={filteredList} />
        </div>
    );
};

function Filter(sessions, state, toggleFavorite, setAll, setPresentation, setLightningTalk, setWorkshop, toggleWed, toggleThu, toggleNorwegian, toggleEnglish) {
    return (
        <div>
             <Section className='program-filter' pixel alternate>
                <Row className='program-filter'>
                    <Col lg>
                        <div>
                            <div className='program-filter-header'>Day</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${state.day === 'wed' ? 'enabled' : ''}`} onClick={toggleWed}>Wedensday</button>
                                <button className={`program-filter-button ${state.day === 'thu' ? 'enabled' : ''}`} onClick={toggleThu}>Thursday</button>
                            </div>
                        </div>
                        <div>
                            <div className='program-filter-header'>Language</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${state.language === 'no' ? 'enabled' : ''}`} onClick={toggleNorwegian}>Norwegian</button>
                                <button className={`program-filter-button ${state.language === 'en' ? 'enabled' : ''}`} onClick={toggleEnglish}>English</button>
                            </div>
                        </div>
                        <div>
                            <div className='program-filter-header'>Format</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${state.show === 'all' ? 'enabled' : ''}`} onClick={setAll}>All ({sessions.length})</button>
                                <button className={`program-filter-button ${state.show === 'presentation' ? 'enabled' : ''}`} onClick={setPresentation}>Presentations ({sessions.filter(session => session.format === 'presentation').length})</button>
                                <button className={`program-filter-button ${state.show === 'lightning-talk' ? 'enabled' : ''}`} onClick={setLightningTalk}>Lightning Talks ({sessions.filter(session => session.format === 'lightning-talk').length})</button>
                                <button className={`program-filter-button ${state.show === 'workshop' ? 'enabled' : ''}`} onClick={setWorkshop}>Workshops ({sessions.filter(session => session.format === 'workshop').length})</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Section>
            <Section>
                <SimpleSessionList type={state.show} sessions={state.filteredSessions} />
            </Section>
        </div>
    );
};

type ProgramProps = {
    sessions:  [],
    isFetching: boolean,
    failure: any,
    getSessions: Function
};

type ProgramState = {
    myProgram: [];
    filteredSessions: [];
    show: string;
    day: string;
    language: string;
}

class Program extends React.Component<ProgramProps, ProgramState> {

    setAll: Function;
    setPresentation: Function;
    setLightningTalk: Function;
    setWorkshop: Function;
    toggleNorwegian: Function;
    toggleEnglish: Function;
    setMyProgram: Function;
    toggleFavorite: Function;
    toggleWed: Function;
    toggleThu: Function;
    updateFilteredSessions: Function;

    state = {
        myProgram: [],
        filteredSessions: [],
        show: 'all',
        day: '',
        language: ''
    };

    constructor(props: ProgramProps) {
        super(props);
        this.setAll = this.setAll.bind(this);
        this.setPresentation = this.setPresentation.bind(this);
        this.setLightningTalk = this.setLightningTalk.bind(this);
        this.setWorkshop = this.setWorkshop.bind(this);
        this.toggleNorwegian = this.toggleNorwegian.bind(this);
        this.toggleEnglish = this.toggleEnglish.bind(this);
        this.setMyProgram = this.setMyProgram.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.toggleWed = this.toggleWed.bind(this);
        this.toggleThu = this.toggleThu.bind(this);
        this.updateFilteredSessions = this.updateFilteredSessions.bind(this);
    }

    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    }

    componentWillReceiveProps(next, prev) {
        if (next.sessions !== this.props.sessions) {
            this.setState({
                filteredSessions: next.sessions
            });
        }
    }

    updateFilteredSessions() {
        let updatedFilter = [...this.props.sessions];
        if (this.state.day !== '') {
            if (this.state.day === 'wed') {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2018-09-12'));
            } else {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2018-09-13'));
            }
        }
        if (this.state.language !== '') {
            updatedFilter = updatedFilter.filter(session => session.language === this.state.language);
        }
        this.setState({
            filteredSessions: updatedFilter
        });
    }

    toggleWed() {
        this.setState({ day: this.state.day === 'wed' ? '' : 'wed'}, () => this.updateFilteredSessions());
    }

    toggleThu() {
        this.setState({ day: this.state.day === 'thu' ? '' : 'thu'}, () => this.updateFilteredSessions());
    }

    setAll() {
        this.setState({show: 'all'});
    }

    setPresentation() {
        this.setState({show: 'presentation'});
    }

    setLightningTalk() {
        this.setState({show: 'lightning-talk'});
    }

    setWorkshop() {
        this.setState({show: 'workshop'});
    }

    toggleNorwegian() {
        this.setState({language: this.state.language === 'no' ? '' : 'no'}, () => this.updateFilteredSessions());
    }

    toggleEnglish() {
        this.setState({language: this.state.language === 'en' ? '' : 'en'}, () => this.updateFilteredSessions());
    }

    setMyProgram() {
        this.setState({show: 'my'});
    }

    toggleFavorite(id) {
        if (includes(id, this.state.myProgram)) {
            this.setState({myProgram: without([id], this.state.myProgram)});
        } else {
            const prev = this.state.myProgram || [];
            this.setState({myProgram: prev.concat(id)});
        }
    }

    render() {

        const content = this.props.failure
            ? <Failure />
            : this.props.isFetching
                ? <Section class="program-loader" dark><Loader /></Section>
                : Filter(this.state.filteredSessions, this.state, this.toggleFavorite, this.setAll, this.setPresentation, this.setLightningTalk, this.setWorkshop, this.toggleWed, this.toggleThu, this.toggleNorwegian, this.toggleEnglish);

        saveSettings(this.state);

        return (
            <Page name='program'>
                <PageHeader subHeader="Mark your schedule">Javazone Program 2018</PageHeader>
                {content}
            </Page>
        );
    }
};

function mapStateToProps(state) {
    return {
        isFetching: state.sessions.isFetching,
        sessions: state.sessions.sessions,
        failure: state.sessions.failure
    };
}

export default connect(mapStateToProps, { getSessions })(Program);