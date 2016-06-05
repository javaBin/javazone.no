import {map} from 'lodash';

const getSpeakers = (session) => map(session.foredragsholdere, 'navn').join(', ');

function transformSession(session) {
    return {
        title: session.tittel,
        speakers: getSpeakers(session)
    };
}

export default function(sessions) {
    console.log(sessions[0]);
    return sessions.map(transformSession);
};