import {last, orderBy, join, map, find, reduce, compose, get, kebabCase, sortBy, filter} from 'lodash/fp';
import _moment from 'moment';


function moment(d) {
    return _moment(d).utcOffset(2);
}

function unix(d) {
    return _moment(d).valueOf();
}

//const getSpeakers = compose(join(', '), map('name'));
//const getDetails = find({rel: 'detaljer'});
//const getVideo = compose(get('href'), find({rel: 'video'}));
const removeNotSetSessions = filter(session => session.starter !== null);

const getRoom = (room) => (room || '').replace(/Room\s/, '');

const transformSessions = map(session => ({
    title: session.title,
    speakers: session.speakers,//getSpeakers(session.speakers),
    format: session.format,
    language: session.language,
    id: session.sessionId,
    day: 'Program',
    dayIndex: 0,
    intendedAudience: session.intendedAudience,
    abstract: session.abstract,
    room: getRoom(session.room),
    day: moment(session.startTimeZulu).format('dddd'),
    dayIndex: moment(session.startTimeZulu).format('D'),
    timestamp: unix(session.startTimeZulu),
    start: moment(session.startTimeZulu).format('HH:mm'),
  end: moment(session.endTimeZulu).format('HH:mm'),
    duration: moment(session.endTimeZulu).diff(moment(session.startTimeZulu), session.format === 'workshop' ? 'hours' : 'minutes'),
    time: moment(session.startTimeZulu).format('MMMM Do, HH:mm'),
    //video: getVideo(session.links)
}));

export default compose(transformSessions, removeNotSetSessions);
