import { SET_LANGUAGE, SET_SHOW, SET_DAY, SET_FILTERED_LIST } from '../actions/filters';

const initialState = {
    filteredList: [],
    language: '',
    show: 'all',
    day: ''
};

export function filters(state = initialState, action) {
    switch (action.type) {
    case SET_LANGUAGE:
        return {...state, language: action.language};
    case SET_SHOW:
        return {...state, show: action.show};
    case SET_DAY:
        return {...state, day: action.day};
    case SET_FILTERED_LIST:
        return {...state, filteredList: action.list};
    default:
        return state;
    }
}
