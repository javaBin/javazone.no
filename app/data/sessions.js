import {last, orderBy, join, map, find, reduce, compose, get, kebabCase, sortBy, filter} from 'lodash/fp';
import _moment from 'moment';


function moment(d) {
    return _moment(d).utcOffset(2);
}

function unix(d) {
    return _moment(d).valueOf();
}

const getSpeakers = compose(join(', '), map('navn'));
const getDetails = find({rel: 'detaljer'});
const getVideo = compose(get('href'), find({rel: 'video'}));
const getFeedback = compose(get('href'), find({rel: 'feedback'}));
const removeNotSetSessions = filter(session => session.starter !== null);

const getRoom = (room) => (room || '').replace(/Room\s/, '');

const transformSessions = map(session => ({
    title: session.tittel,
    speakers: getSpeakers(session.foredragsholdere),
    format: session.format,
    language: session.sprak,
    id: kebabCase(session.tittel),
    room: getRoom(session.rom),
    details: getDetails(session.links).href,
    day: moment(session.starter).format('dddd'),
    dayIndex: moment(session.starter).format('D'),
    timestamp: unix(session.starter),
    start: moment(session.starter).format('HH:mm'),
    end: moment(session.starter).add(1, 'hour').format('HH:mm'),
    duration: moment(session.stopper).diff(moment(session.starter), session.format === 'workshop' ? 'hours' : 'minutes'),
    time: moment(session.starter).format('MMMM Do, HH:mm'),
    video: getVideo(session.links),
    feedback: getFeedback(session.links)

}));

export default compose(transformSessions, removeNotSetSessions);