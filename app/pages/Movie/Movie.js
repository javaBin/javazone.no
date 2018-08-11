import * as React from 'react';
import Page from '../../components/Page/Page.js';
import Countdown from 'react-countdown-now';
import Youtube from '../../components/youtube';
import moment from './time-zone-data.js';
import teaser from '../../assets/2018/teaser_countdown.jpg';
import './Movie.less';

// Edit this deadline
const END_DATE = '2018-08-13 10:00:00';

class Movie extends React.Component<MovieProps, MovieState> {

    updateTime: Function;

    constructor(props: MovieProps) {
        super(props);
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime({hours, minutes, seconds, completed}) {
        const hoursString = `${hours} ${hours === 1 ? 'hour' : 'hours'}`
        const minutesString = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
        const secondsString = `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`
        let time = `${hoursString} ${minutesString} ${secondsString}`;
        if (hours === 0) {
            time = `${minutesString} ${secondsString}`;
            if (minutes === 0) {
                time = `${secondsString}`;
            }
        }
        return (
            <div className="movie-container">
                {completed ? <Youtube id='dQw4w9WgXcQ'></Youtube>
                    : <div className="movie-counter">
                        <h2>{time}</h2>
                    </div>}
            </div>
        )
    }

    render() {
        return (
            <Page name='movie'>
                <Countdown daysInHours date={moment.tz(END_DATE, "Europe/Oslo").toDate()} zeroPadLength={0} renderer={this.updateTime} />
            </Page>
        );
    }
}

export default Movie;