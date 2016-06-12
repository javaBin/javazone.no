import {join, map, find, reduce, compose, get, kebabCase, sortBy} from 'lodash/fp';

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
    details: getDetails(session.links).href
}));

export default compose(sortBy('sortIndex'), group, transformSessions);