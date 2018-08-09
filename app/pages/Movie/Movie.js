import * as React from 'react';
import Page from '../../components/Page/Page.js';
import CurtainCountdown from '../../components/CurtainCountdown/CurtainCountdown.js';
import * as moment from 'moment'; 
import './Movie.less';

const END_DATE = '2018-08-08 22:00:00';

type MovieProps = {
}

type MovieState = {
    timeRemaining: string;
}

class Movie extends React.Component<MovieProps, MovieState> {

    updateTime: Function;

    state = {
        timeRemaining: ''
    }

    constructor(props: MovieProps) {
        super(props);
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime() {
        const endDate = moment.Moment(END_DATE, 'YYYY-MM-DD HH:mm:ss');
        const now = moment.Moment();
        const seconds = endDate.diff(now);
        const minutes = endDate.diff(now, 'minutes');
        const hours = endDate.diff(now, 'hours');
        const days = endDate.diff(now, 'days');
        const lol = Moment(seconds).format('mm:ss');
        console.log('lol', lol);
        /*
        this.setState({
            timeRemaining: `${days} Days ${hours} ${hours === 1 ? 'Hour' : 'Hours'} ${minutes} ${minutes === 1 ? 'Minute' : 'Minutes'} ${seconds} ${seconds === 1 ? 'Second' : 'Seconds'}`
        });
        */
    }

    componentDidMount() {
        setInterval(() => this.updateTime(), 1000);
    }

    render() {
        console.log('state', this.state);
        return (
            <Page name='movie'>
                <CurtainCountdown timeRemaining={this.state.timeRemaining} />
            </Page>
        );
    }
}

export default Movie;