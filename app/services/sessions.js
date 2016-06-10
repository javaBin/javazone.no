import request from 'superagent';

const baseUrl = 'https://javazone.no/javazone-web-api/events/javazone_2015/sessions';

export function getAllSessions() {
    return request.get(baseUrl);
}

export function getSingleSession(url) {
    return request.get(url);
}