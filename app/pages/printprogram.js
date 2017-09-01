import { connect } from 'react-redux';
import { getSessions } from '../actions/sessions';
import { Page, Container } from '../components/page';
import { filter, compose, join, map, reduce, orderBy, last, find, groupBy } from 'lodash/fp';

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
        slot = {timestamp: session.timestamp, start: session.start, end: session.end, sessions: { 'presentation': [], 'lightning-talk': []}};
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
    removeWorkshops
);

function mapStateToProps(state) {
    return {
        isFetching: state.sessions.isFetching,
        sessions: state.sessions.sessions
    };
}

const Session = ({title, speakers, icon, room, language, duration, id}, key) => (
    <li key={`${key}-${id}`}>
        {room} {speakers.map(s => s.name).join(', ')}: {title}
    </li>
);

const Sessions = (sessions, lightning) => {
    const groupedLightning = groupBy('room')(lightning);
    return (
        <ul className='list--no-style'>
            {sessions.map((session, id) => Session(session, id))}
            {Object.keys(groupedLightning).map((room, id) => (
                <li key={id}>
                    {room} Lightning Speakers: {groupedLightning[room].map((session, id) => session.speakers.map(s => s.name)).join(', ')}
                </li>
            ))}
        </ul>
    );
};

function Slot({sessions, timestamp, start, end}, key) {
    const filteredPresentations = orderBy(['room'], ['asc'])(sessions.presentation.filter(session => true));
    const filteredLightning = orderBy(['room'], ['asc'])(sessions['lightning-talk'].filter(session => true));
    return (
        <li key={`${key}-${timestamp}`}>
            <div>{start}-{end}</div>
            {Sessions(filteredPresentations, filteredLightning)}
            <br />
        </li>
    );
};

const Day = ({slots, day}, key) => (
    <li key={`${key}-${day}`} id={day}>
        <div>{day}</div><br /><br/>
        <ul className='list--no-style'>
            {slots.map((slot, id) => Slot(slot, id))}
        </ul>
        <br/><br/>
    </li>
);

const Loading = () => (
    <div className='program__loading'>
        Loading...
    </div>
);

const HasProgram = (sessions) => (
    <div>
        <ul className='list--no-style'>
            {sessions.map((session, id) => Day(session, id))}
        </ul>
    </div>
);

const PrintProgram = React.createClass({

    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    },

    render() {
        const content = this.props.isFetching
            ? Loading()
            : HasProgram(getTransformedSessions([])(this.props.sessions));

        return (
            <Page name='print-program'>
                <Container>
                    { content }
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(PrintProgram);
