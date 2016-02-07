import { FETCH_WORKSHOPS, RECEIVE_WORKSHOPS } from '../actions/workshops';

const initialState = {
    isFetching: false,
    workshops: []
};

export function workshops(state = initialState, action) {
    switch (state.type) {
        case 'FETCH_WORKSHOPS':
            return Object.assign({}, state, {isFetching: true});
        case 'RECEVIVE_WORKSHOPS':
            return Object.assign({}, state, {isFetching: true, workshops: action.workshops});
        default:
            return state;
    }
}
