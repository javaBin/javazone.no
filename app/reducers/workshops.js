import { REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS } from '../actions/workshops';

const initialState = {
    isFetching: false,
    workshops: []
};

export function workshops(state = initialState, action) {
    switch (action.type) {
    case REQUEST_WORKSHOPS:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_WORKSHOPS:
        return Object.assign({}, state, {isFetching: false, workshops: action.workshops});
    default:
        return state;
    }
}
