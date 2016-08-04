import {join, map, find, reduce, compose, get, kebabCase, sortBy} from 'lodash/fp';import _moment from 'moment';

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

const getSpeakers = compose(join(', '), map('navn'));
const getDetails = find({rel: 'detaljer'});
const group = reduce((acc, session) => {
    let key = find({format: session.format}, acc);
    if (!key) {
        key = {
            format: session.format,
            sessions: [],
            className: `sessions__format-title--${session.format}`,
            sortIndex: get(session.format)(sortIndexes)
        };
        acc.push(key);
    }

    key.sessions.push(session);
    return acc;
}, []);

const transformSessions = map(session => ({
    title: session.tittel,
    speakers: getSpeakers(session.foredragsholdere),
    format: session.format,
    icon: 'icon-energy',
    language: session.sprak,
    id: kebabCase(session.tittel),
    details: getDetails(session.links).href,
    time: moment(session.starter).format('MMMM Do, HH:mm'),
    duration: moment(session.stopper).diff(moment(session.starter), 'hours'),
    timestamp: unix(session.starter)
}));

export default compose(sortBy('sortIndex'), group, transformSessions);