import { get } from '../services/workshops';
export const REQUEST_WORKSHOPS = 'FETCH_WORKSHOPS';

function fetchWorkshops() {
    return {
        type: REQUEST_WORKSHOPS
    };
};

export const RECEIVE_WORKSHOPS = 'RECEIVE_WORKSHOPS';

function receiveWorkshops(workshops) {
    return {
        type: RECEIVE_WORKSHOPS,
        workshops
    };
};

export function getWorkshops() {
    return function(dispatch) {
        dispatch(fetchWorkshops());

        return get().end((err, res) => {
            dispatch(receiveWorkshops(JSON.parse(res.text)));
        });
    };
};
