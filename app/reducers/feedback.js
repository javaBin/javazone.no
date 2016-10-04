import { LOAD_FEEDBACK } from "../actions/feedback";
import { clone, isEmpty } from "lodash/fp";

const initialState = {};

export function feedback(state = initialState, action) {
    switch (action.type) {
    case LOAD_FEEDBACK:
        const fb = clone(action.feedback);
        fb.comments = (fb.comments || []).filter((i) => !isEmpty(i));
        return Object.assign({}, state, {feedback: fb});
    default:
        return state;
    }
};
