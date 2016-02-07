export const FETCH_WORKSHOPS = 'FETCH_WORKSHOPS';

export function fetchWorkshops() {
    return {
        type: FETCH_WORKSHOPS
    }
};

export const RECEIVE_WORKSHOPS = 'RECEIVE_WORKSHOPS';

export function receiveWorkshops(workshops) {
    return {
        type: RECEIVE_WORKSHOPS,
        workshops
    }
}