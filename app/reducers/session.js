import { REQUEST_SESSION, RECEIVE_SESSION } from '../actions/session';

const initialState = {
    isFetching: false,
    session: null
};

export function session(state = initialState, action) {
    switch (action.type) {
    case REQUEST_SESSION:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_SESSION:
        return Object.assign({}, state, {isFetching: false, session: action.session});
    default:
        return state;
    }
}
