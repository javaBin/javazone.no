import {join, map, mapKeys, find, reduce, compose, get, capitalize, kebabCase} from 'lodash/fp';

const formats = {
    'lightning-talk' : 'Lightning Talks',
    'workshop': 'Workshops',
    'presentation': 'Presentations'
};

const getSpeakers = compose(join(', '), map('navn'));
const getDetails = find({rel: 'detaljer'});
const group = reduce((acc, session) => {
    let key = find({format: session.format}, acc);
    if (!key) {
        key = {format: session.format, sessions: [], className: 'sessions__format-title--' + session.className};
        acc.push(key);
    }

    key.sessions.push(session);
    return acc;
}, []);

const transformSessions = map(session => ({
    title: session.tittel,
    speakers: getSpeakers(session.foredragsholdere),
    format: get(session.format)(formats),
    className: session.format,
    icon: 'icon-energy',
    language: capitalize(session.sprak),
    id: kebabCase(session.tittel),
    details: (function() {
        const a = getDetails(session.links);
        console.trace();
        return a.href;
    })()
}));

export default compose(group, transformSessions);