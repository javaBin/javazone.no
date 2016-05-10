import { REQUEST_SESSIONS, RECEIVE_SESSIONS } from '../actions/sessions';

const initialState = {
    isFetching: false,
    sessions: []
};

export function sessions(state = initialState, action) {
    switch (action.type) {
    case REQUEST_SESSIONS:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_SESSIONS:
        return Object.assign({}, state, {isFetching: false, sessions: action.sessions});
    default:
        return state;
    }
}
