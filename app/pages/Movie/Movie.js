import * as React from 'react';
import Page from '../../components/Page/Page.js';
import Countdown from 'react-countdown-now';
import Youtube from '../../components/youtube';
import moment from './time-zone-data.js'; 
import './Movie.less';

// Edit this deadline
const END_DATE = '2018-08-13 10:00:00';

class Movie extends React.Component<MovieProps, MovieState> {

    updateTime: Function;

    constructor(props: MovieProps) {
        super(props);
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime({days, hours, minutes, seconds, completed}) {
        const daysString = `${days} ${days === 1 ? 'day' : 'days'}`
        const hoursString = `${hours} ${hours === 1 ? 'hour' : 'hours'}`
        const minutesString = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
        const secondsString = `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`
        const time = `${hoursString} ${minutesString} ${secondsString}`;
        return (
            <div className="movie-container">
                {completed ? <Youtube id='dQw4w9WgXcQ'></Youtube>
                    : <div className="movie-counter">
                        {days !== 0 ? <h1>{daysString}</h1> : null}
                        <h2>{time}</h2>
                    </div>}
            </div>
        )
    }

    render() {
        return (
            <Page name='movie'>
                <Countdown date={moment.tz(END_DATE, "Europe/Oslo").toDate()} zeroPadLength={0} renderer={this.updateTime} />
            </Page>
        );
    }
}

export default Movie;