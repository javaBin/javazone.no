import {last, orderBy, join, map, find, reduce, compose, get, kebabCase, sortBy, filter} from 'lodash/fp';
import _moment from 'moment';

function moment(d) {
    return _moment(d).utcOffset(2);
}

function unix(d) {
    return _moment(d).valueOf();
}

const sortIndexes = {
    'lightning-talk' : 2,
    'workshop': 1,
    'presentation': 0
};

const removeNonAssignedTalksAndWorkshops = filter(session => session.starter != null && session.format !== 'workshop');

const transformSessions = map(session => ({
    title: session.tittel,
    speakers: getSpeakers(session.foredragsholdere),
    format: session.format,
    language: session.sprak,
    id: kebabCase(session.tittel),
    details: getDetails(session.links).href,
    day: moment(session.starter).format('dddd'),
    timestamp: unix(session.starter),
    start: moment(session.starter).format('HH:mm'),
    duration: moment(session.stopper).diff(moment(session.starter), 'minutes')
}));
const getSpeakers = compose(join(', '), map('navn'));
const getDetails = find({rel: 'detaljer'});

const groupByDay = reduce((acc, session) => {
    let key = find({day: session.day}, acc);
    if (!key) {
        key = {
            day: session.day,
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
    if (!slot || slot.timestamp !== session.timestamp) {
        slot = {timestamp: session.timestamp, start: session.start, sessions: []};
        acc.push(slot);
    }
    slot.sessions.push(session);
    return acc;
});

export default compose(
    orderBy(['day'], ['desc']),
    (id) => {console.log(id); return id},
    groupBySlot,
    groupByDay,
    orderBy(['format', 'timestamp'], ['desc', 'asc']),
    transformSessions,
    removeNonAssignedTalksAndWorkshops
);