import { REQUEST_SESSIONS, RECEIVE_SESSIONS, RECEIVE_SESSION_WORKSHOPS, RECEIVE_FAILED } from '../actions/sessions';

const initialState = {
    isFetching: false,
    sessions: [],
    failure: false
};

export function sessions(state = initialState, action) {
    switch (action.type) {
    case REQUEST_SESSIONS:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_SESSIONS:
        return Object.assign({}, state, {isFetching: false, sessions: action.sessions, failure: false});
    case RECEIVE_FAILED:
        return Object.assign({}, state, {isFetching: false, failure: true});
    default:
        return state;
    }
}
