//import sessions from '../sessions.json';
const baseUrl = 'https://sleepingpill.javazone.no/public/allSessions/javazone_2018';
//const baseUrl = `${sessions}`;

export function getAllSessions() {
    return fetch(baseUrl);
}

export function getSingleSession(url) {
    const fixedUrl = url.replace('http:', 'https:');
    return fetch(fixedUrl);
}
