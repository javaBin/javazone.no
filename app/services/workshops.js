import request from 'superagent';

export function get() {
    return request.get('http://javazone.no/moosehead/data/workshopList');
}
