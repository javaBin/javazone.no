import { getAllSessions } from '../services/sessions';
import getTransformedSessions from '../data/sessions';

export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_SHOW = 'SET_SHOW';
export const SET_DAY = 'SET_DAY';
export const SET_FILTERED_LIST = 'SET_FILTERED_LIST';

export function setLanguage(language) {
    return {
        type: SET_LANGUAGE,
        language
    }
};

export function setShow(show) {
    return {
        type: SET_SHOW,
        show
    }
};

export function setDay(day) {
    return {
        type: SET_DAY,
        day
    }
};

export function setFilteredList(list) {
    return {
        type: SET_FILTERED_LIST,
        list
    }
};