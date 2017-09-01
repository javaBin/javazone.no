import { get } from '../services/workshops';
export const REQUEST_WORKSHOPS = 'FETCH_WORKSHOPS';

function fetchWorkshops() {
    return {
        type: REQUEST_WORKSHOPS
    };
};

export const RECEIVE_WORKSHOPS = 'RECEIVE_WORKSHOPS';
export const RECEIVE_FAILED = 'RECEIVE_FAILED';

function receiveWorkshops(workshops) {
    return {
        type: RECEIVE_WORKSHOPS,
        workshops
    };
};

function receiveFailed() {
    return {
        type: RECEIVE_FAILED
    };
}

export function getWorkshops() {
    return function(dispatch) {
        dispatch(fetchWorkshops());

        return get().then((res) => {
            return res.json();
        }).then((workshops) => {
            dispatch(receiveWorkshops(workshops));
        }).catch(() => {
            dispatch(receiveFailed());
        });
    };
};
