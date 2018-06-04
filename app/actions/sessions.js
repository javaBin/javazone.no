import { getAllSessions } from '../services/sessions';
import getTransformedSessions from '../data/sessions';
export const REQUEST_SESSIONS = 'FETCH_SESSIONS';

function fetchSessions() {
    return {
        type: REQUEST_SESSIONS
    };
};

export const RECEIVE_SESSIONS = 'RECEIVE_SESSIONS';
export const RECEIVE_FAILED = 'RECEIVE_FAILED';

function receiveSessions(sessions) {
    return {
        type: RECEIVE_SESSIONS,
        sessions
    };
};

function receiveFailed() {
    return {
        type: RECEIVE_FAILED
    };
}

export function getSessions() {
    return function(dispatch) {
        dispatch(fetchSessions());

        return getAllSessions().then((res) => {
            return res.json();
        }).then((json) => {
            dispatch(receiveSessions(json.sessions));
        }).catch(() => {
            dispatch(receiveFailed());
        });
    };
};
