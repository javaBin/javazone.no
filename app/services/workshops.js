import request from 'superagent';

export function get() {
    return request.get('https://javazone.no/moosehead/data/workshopList');
}
