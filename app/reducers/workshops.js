import { REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS, RECEIVE_FAILED } from '../actions/workshops';

const initialState = {
    isFetching: false,
    workshops: [],
    failure: false
};

export function workshops(state = initialState, action) {
    switch (action.type) {
    case REQUEST_WORKSHOPS:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_WORKSHOPS:
        return Object.assign({}, state, {isFetching: false, workshops: action.workshops, failure: false});
    case RECEIVE_FAILED:
        return Object.assign({}, state, {isFetching: false, failure: true});
    default:
        return state;
    }
}
