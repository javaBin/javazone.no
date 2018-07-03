import { connect } from 'react-redux';
import { Link } from '../../components/link';
import { store } from '../../store';
import { getSessions } from '../../actions/sessions';
import { setLanguage, setShow, setDay, setFilteredList } from '../../actions/filters';
import { Section } from '../../components/Section/Section.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block.js';
import { Clock, Globe, User, Users } from 'react-feather';
import Page from '../../components/Page/Page';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Circle, CheckCircle } from 'react-feather';
import * as React from 'react';
import Button from '../../components/Button/Button.js';
import { Container, Heading, LargeHeading, SmallHeading } from '../../components/page';
import { Block, Header, Content, P } from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { without, includes, get, filter, compose, join, map, reduce, orderBy, last, find, groupBy } from 'lodash/fp';
import Loader from '../../components/Loader/Loader.js';
import './Program.less';

const SETTINGS_KEY = 'programsettings_v2';

const defaultSettings = {
    favorites: []
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


type SessionItemProps = {
    session: {};
    favorites: [];
    addToFav: (session) => {};
}

function SessionItem(props: SessionItemProps) {
    const isFavorite = props.favorites.findIndex(fav => fav.sessionId === props.session.sessionId);
    return (
        <div key={props.session.sessionId} className={`${isFavorite >= 0 ? 'program-simple-session-item-fav' : 'program-simple-session-item'}`}>
            <Row>
                <Col lg={11}>
                    <Row className="program-simple-session-title">
                        <Link href={`/program/${props.session.sessionId}`}>{props.session.title}</Link>
                    </Row>
                    <Row>
                        <Col className="program-margin-right">
                            {props.session.language === 'en' ? 'English' : 'Norwegian'}
                        </Col>
                        <Col className="program-margin-right">
                            {`${props.session.length} Minutes`}
                        </Col>
                        <Col>
                            {props.session.speakers.length > 1 ? generateSpeakersString(props.session.speakers) : props.session.speakers[0].name}
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}>
                     <Row className="program-favorite-button" center="xs" middle="xs">
                        <button onClick={() => {props.addToFav(props.session)}}>
                            {isFavorite >= 0 ? <CheckCircle size={32} /> : <Circle size={32} />}
                        </button>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}


function groupByTimeSlot(sessions) {
    const sorted = sessions.sort(function(a, b) {
        return a.startTime.substr(-5).replace(':', '') > b.startTime.substr(-5).replace(':', '')
    });
    const grouped = sessions.reduce(function(rv, x) {
        (rv[x['startTime']] = rv[x['startTime']] || []).push(x);
        return rv;
    }, {});
    return grouped;
}

type DayProps = {
    sessions: [];
    favorites: [];
    addToFav: (session) => {};
}

function Wedensday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2018-09-12'));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
        <div>
            <h1 className="program-day-header">Wedensday</h1>
            {Object.keys(timeSlots).map((timeSlot, idx) => {
                return <div>
                    <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                    {timeSlots[timeSlot].map((session, idx) => {
                        return <SessionItem favorites={props.favorites} addToFav={props.addToFav} key={session.sessionId} session={session} />
                    })}
                </div>
            })}
        </div> : null
    );
}

function Thursday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2018-09-13'));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
        <div>
            <h1 className="program-day-header">Thursday</h1>
            {Object.keys(timeSlots).map((timeSlot, idx) => {
                return <div>
                    <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                    {timeSlots[timeSlot].map((session, idx) => {
                        return <SessionItem favorites={props.favorites} addToFav={props.addToFav} key={session.sessionId} session={session} />
                    })}
                </div>
            })}
        </div> : null
    );
}

function Tuesday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2018-09-11'));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
        <div>
            <h1 className="program-day-header">Tuesday</h1>
            {Object.keys(timeSlots).map((timeSlot, idx) => {
                return <div>
                    <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                    {timeSlots[timeSlot].map((session, idx) => {
                        return <SessionItem favorites={props.favorites} addToFav={props.addToFav} key={session.sessionId} session={session} />
                    })}
                </div>
            })}
        </div> : null
    );
}

type SimpleSessionListProps = {
    sessions: [];
    favorites: [];
    type: string;
    addToFav: (session) => {};
}

function SimpleSessionList(props: SimpleSessionListProps) {
    const filteredList = (props.type !== 'all') ? props.sessions.filter(session => {
        return session.format === props.type;
    }) : props.sessions;
    return (
        <div className="program-list">
            <Tuesday favorites={props.favorites} addToFav={props.addToFav} sessions={filteredList} />
            <Wedensday favorites={props.favorites} addToFav={props.addToFav} sessions={filteredList} />
            <Thursday favorites={props.favorites} addToFav={props.addToFav} sessions={filteredList} />
        </div>
    );
};

function Filter(sessions, state, props, addToFav, toggleFavorite, setAll, setPresentation, setLightningTalk, setWorkshop, toggleTue, toggleWed, toggleThu, toggleNorwegian, toggleEnglish) {
    return (
        <div className="program-filter-container">
             <Section className='program-filter' pixel alternate>
                <Row className='program-filter'>
                    <Col lg>
                        <div>
                            <div className='program-filter-header'>Day</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${props.day === 'tue' ? 'enabled' : ''}`} onClick={toggleTue}>Tuesday</button>
                                <button className={`program-filter-button ${props.day === 'wed' ? 'enabled' : ''}`} onClick={toggleWed}>Wedensday</button>
                                <button className={`program-filter-button ${props.day === 'thu' ? 'enabled' : ''}`} onClick={toggleThu}>Thursday</button>
                            </div>
                        </div>
                        <div>
                            <div className='program-filter-header'>Language</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${props.language === 'no' ? 'enabled' : ''}`} onClick={toggleNorwegian}>Norwegian</button>
                                <button className={`program-filter-button ${props.language === 'en' ? 'enabled' : ''}`} onClick={toggleEnglish}>English</button>
                            </div>
                        </div>
                        <div>
                            <div className='program-filter-header'>Format</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${props.show === 'all' ? 'enabled' : ''}`} onClick={setAll}>All ({sessions.length})</button>
                                <button className={`program-filter-button ${props.show === 'presentation' ? 'enabled' : ''}`} onClick={setPresentation}>Presentations ({sessions.filter(session => session.format === 'presentation').length})</button>
                                <button className={`program-filter-button ${props.show === 'lightning-talk' ? 'enabled' : ''}`} onClick={setLightningTalk}>Lightning Talks ({sessions.filter(session => session.format === 'lightning-talk').length})</button>
                                <button className={`program-filter-button ${props.show === 'workshop' ? 'enabled' : ''}`} onClick={setWorkshop}>Workshops ({sessions.filter(session => session.format === 'workshop').length})</button>
                                <button className={`program-filter-button ${props.show === 'favorite' ? 'enabled' : ''}`} onClick={toggleFavorite}>My Favorites ({state.favorites.length})</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Section>
            {props.isFetching ? <Section class="program-loader" dark><Loader /></Section> :
            <Section className='program-list'>
                <SimpleSessionList favorites={state.favorites} addToFav={addToFav} type={props.show} sessions={sessions} />
            </Section>}
        </div>
    );
};

type ProgramProps = {
    sessions:  [],
    isFetching: boolean,
    failure: any,
    getSessions: Function,
    setLanguage: Function,
    setShow: Function,
    setDay: Function,
    setFilteredList: Function,
    language: string,
    show: string,
    day: string,
    filteredList: []
};

type ProgramState = {
    favorites: [];
}

class Program extends React.Component<ProgramProps, ProgramState> {

    setAll: Function;
    setPresentation: Function;
    setLightningTalk: Function;
    setWorkshop: Function;
    toggleNorwegian: Function;
    toggleEnglish: Function;
    toggleFavorite: Function;
    toggleTue: Function;
    toggleWed: Function;
    toggleThu: Function;
    updateFilteredSessions: Function;
    addToFav: Function;

    state = getDefaultSettings();

    constructor(props: ProgramProps) {
        super(props);
        this.setAll = this.setAll.bind(this);
        this.setPresentation = this.setPresentation.bind(this);
        this.setLightningTalk = this.setLightningTalk.bind(this);
        this.setWorkshop = this.setWorkshop.bind(this);
        this.toggleNorwegian = this.toggleNorwegian.bind(this);
        this.toggleEnglish = this.toggleEnglish.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.toggleTue = this.toggleTue.bind(this);
        this.toggleWed = this.toggleWed.bind(this);
        this.toggleThu = this.toggleThu.bind(this);
        this.updateFilteredSessions = this.updateFilteredSessions.bind(this);
        this.addToFav = this.addToFav.bind(this);
    }

    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.sessions !== prevProps.sessions) {
            this.updateFilteredSessions();
        }
        if (this.props.language !== prevProps.language || this.props.show !== prevProps.show || this.props.day !== prevProps.day) {
            this.updateFilteredSessions();
        }
    }

    updateFilteredSessions() {
        let updatedFilter = [...this.props.sessions];
        if (this.props.day !== '') {
            if (this.props.day === 'wed') {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2018-09-12'));
            } else if (this.props.day === 'thu') {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2018-09-13'));
            } else {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2018-09-11'));
            }
        }
        if (this.props.language !== '') {
            updatedFilter = updatedFilter.filter(session => session.language === this.props.language);
        }
        this.props.setFilteredList(updatedFilter);
    }

    addToFav(favSession) {
        const exists = this.state.favorites.findIndex(fav => fav.sessionId === favSession.sessionId);
        if (exists >= 0) {
            const removed = [...this.state.favorites];
            removed.splice(exists, 1);
            this.setState({
                favorites: removed
            });
        } else {
            const added = [...this.state.favorites];
            added.push(favSession);
            this.setState({
                favorites: added
            });
        }
    }

    toggleTue() {
        this.props.setDay(this.props.day === 'tue' ? '' : 'tue');
    }

    toggleWed() {
        this.props.setDay(this.props.day === 'wed' ? '' : 'wed');
    }

    toggleThu() {
        this.props.setDay(this.props.day === 'thu' ? '' : 'thu');
    }

    setAll() {
        this.props.setShow('all');
    }

    setPresentation() {
        this.props.setShow('presentation');
    }

    setLightningTalk() {
        this.props.setShow('lightning-talk');
    }

    setWorkshop() {
        this.props.setShow('workshop');
    }

    toggleNorwegian() {
        this.props.setLanguage(this.props.language === 'no' ? '' : 'no');
    }

    toggleEnglish() {
        this.props.setLanguage(this.props.language === 'en' ? '' : 'en');
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
            : Filter(
                this.props.filteredList,
                this.state,
                this.props,
                this.addToFav,
                this.toggleFavorite,
                this.setAll,
                this.setPresentation,
                this.setLightningTalk,
                this.setWorkshop,
                this.toggleTue,
                this.toggleWed,
                this.toggleThu,
                this.toggleNorwegian,
                this.toggleEnglish);

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
        failure: state.sessions.failure,
        language: state.filters.language,
        show: state.filters.show,
        day: state.filters.day,
        filteredList: state.filters.filteredList
    };
}

export default connect(mapStateToProps, { getSessions, setLanguage, setShow, setDay, setFilteredList })(Program);