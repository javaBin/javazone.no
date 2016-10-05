import { LOAD_FEEDBACK } from "../actions/feedback";
import { cloneDeep, isEmpty, sum} from "lodash/fp";

const initialState = {};

export function feedback(state = initialState, action) {
    switch (action.type) {
    case LOAD_FEEDBACK:
        const fb = cloneDeep(action.feedback);
        fb.comments = (fb.comments || []).filter((i) => !isEmpty(i));
        if (fb.session) {
            fb.session.paper.total = sum([
                fb.session.paper.green,
                fb.session.paper.yellow,
                fb.session.paper.red]);
            fb.conference.paper.total = sum([
                fb.conference.paper.green,
                fb.conference.paper.yellow,
                fb.conference.paper.red]);
        }
        return Object.assign({}, state, {feedback: fb});
    default:
        return state;
    }
};
