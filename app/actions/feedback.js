import { isEmpty, find } from 'lodash/fp';
import { getAllSessions } from '../services/sessions';
import { getFeedbackApi } from '../services/devnull';
import getTransformedSessions from '../data/sessions';
import { RECEIVE_SESSIONS } from './sessions';

export const LOAD_FEEDBACK = 'LOAD_FEEDBACK';

const loadOrGetSessions = (getState) => {
    return new Promise(
        (resolve, reject) => {
            const sessions = getState().sessions.sessions;
            if (sessions.length > 0) {
                resolve(sessions);
            } else {
                getAllSessions()
                    .end((err, res) => {
                        err ?
                            reject(err) :
                            resolve(getTransformedSessions(res.body));
                    });
            }
        });
};

const loadOrGetFeedback = (getState, sessions, id) => {
    const feedback = getState().feedback;
    return new Promise(
        (resolve, reject) => {
            if (!isEmpty(feedback)) {
                resolve(feedback);
            } else {
                const session = find({id})(sessions);
                getFeedbackApi(session.feedback)
                    .end((err, res) => err ?
                        reject(err) :
                        resolve({
                            feedback: res.body,
                            sessions
                        }
                        ));
            }
        });
};

export function getFeedback(id) {
    return (dispatch, getState) => {
        loadOrGetSessions(getState)
            .then((sessions) => loadOrGetFeedback(getState, sessions, id))
            .then((res) => {
                dispatch({type: RECEIVE_SESSIONS, sessions: res.sessions});
                dispatch({type: LOAD_FEEDBACK, feedback: res.feedback});
            })
            .catch((err) => console.warn('Failed to load feedbacks', err));
    };
};
