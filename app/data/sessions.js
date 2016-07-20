import {join, map, find, reduce, compose, get, kebabCase, sortBy, filter} from 'lodash/fp';
import _moment from 'moment';

function moment(d) {
    return _moment(d).utcOffset(2);
}

const sortIndexes = {
    'lightning-talk' : 2,
    'workshop': 1,
    'presentation': 0
};

const getSpeakers = compose(join(', '), map('navn'));
const getDetails = find({rel: 'detaljer'});
const group = reduce((acc, session) => {
    let key = find({day: session.day}, acc);
    if (!key) {
        key = {
            day: session.day,
            sessions: []
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
    day: moment(session.starter).format('YYYY-MM-DD'),
    start: session.starter
}));

const removeNonAssignedTalksAndWorkshops = filter(session => session.starter != null && session.format !== 'workshop');

export default compose(sortBy('day'), group, transformSessions, removeNonAssignedTalksAndWorkshops);