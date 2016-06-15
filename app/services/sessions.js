import request from 'superagent';

const baseUrl = 'https://javazone.no/javazone-web-api/events/javazone_2016/sessions';

export function getAllSessions() {
    return request.get(baseUrl);
}

export function getSingleSession(url) {
    const fixedUrl = url.replace('http:', 'https:');
    return request.get(fixedUrl);
}