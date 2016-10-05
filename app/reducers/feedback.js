import { LOAD_FEEDBACK } from "../actions/feedback";
import { cloneDeep, isEmpty, sum} from "lodash/fp";

const initialState = {};

export function feedback(state = initialState, action) {
    switch (action.type) {
    case LOAD_FEEDBACK:
        const fb = cloneDeep(action.feedback);
        fb.comments = (fb.comments || []).filter((i) => !isEmpty(i));
        if (fb.session) {
            fb.session.paper.total = sum(
                fb.session.green,
                fb.session.yellow,
                fb.session.red);
            fb.conference.paper.total = sum(
                fb.conference.green,
                fb.conference.yellow,
                fb.conference.red);
        }
        return Object.assign({}, state, {feedback: fb});
    default:
        return state;
    }
};
