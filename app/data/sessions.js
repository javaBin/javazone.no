import {map, mapKeys, find, reduce, flowRight, get} from 'lodash/fp';

const formats = {
    'lightning-talk' : 'Lightning Talks',
    'workshop': 'Workshops',
    'presentation': 'Presentations'
};

const getSpeakers = (session) => map('navn')(session.foredragsholdere).join(', ');
const group = reduce((acc, session) => {
    var key = find({format: session.format}, acc);
    if (!key) {
        key = {format: session.format, sessions: []}
        acc.push(key);
    }

    key.sessions.push(session);
    return acc;
}, []);

const transformSessions = map(session => ({
    title: session.tittel,
    speakers: getSpeakers(session),
    format: get(session.format)(formats),
    icon: 'icon-energy'
}));

export default function(sessions) {
    return flowRight(group, transformSessions)(sessions);
};