import request from 'superagent';

export function get() {
    return request.get('https://javazone.no/javazone-web-api/events/javazone_2015/sessions');
}