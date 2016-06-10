import {map, mapKeys, find, reduce, compose, get, capitalize, kebabCase} from 'lodash/fp';

const formats = {
    'lightning-talk' : 'Lightning Talks',
    'workshop': 'Workshops',
    'presentation': 'Presentations'
};

const getSpeakers = session => map('navn')(session.foredragsholdere).join(', ');
const group = reduce((acc, session) => {
    let key = find({format: session.format}, acc);
    if (!key) {
        key = {format: session.format, sessions: []};
        acc.push(key);
    }

    key.sessions.push(session);
    return acc;
}, []);

const transformSessions = map(session => ({
    title: session.tittel,
    speakers: getSpeakers(session),
    format: get(session.format)(formats),
    icon: 'icon-energy',
    language: capitalize(session.sprak),
    id: kebabCase(session.tittel)
}));

export default compose(group, transformSessions);