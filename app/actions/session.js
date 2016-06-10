import { getAllSessions, getSingleSession } from '../services/sessions';
import transformSessions from '../data/sessions';
import { find, map, flatten, compose } from 'lodash/fp';
export const REQUEST_SESSION = 'FETCH_SESSION';

function fetchSession() {
    return {
        type: REQUEST_SESSION
    };
};

export const RECEIVE_SESSION = 'RECEIVE_SESSION';

function receiveSession(session) {
    return {
        type: RECEIVE_SESSION,
        session
    };
};

export function getSession(id) {
    return function(dispatch, getState) {
        const sessions = getState().sessions.sessions;
        if (sessions.length === 0) {
            return getAllSessions().end((err, res) => {
                const transformedSessions = compose(flatten, map('sessions'))(transformSessions(res.body));
                const session = find({id})(transformedSessions);
                dispatch(receiveSession(session));
            });
        } else {
            const transformedSessions = compose(flatten, map('sessions'))(sessions);
            const session = find({id})(transformedSessions);
            dispatch(receiveSession(session));
        }
    }
}