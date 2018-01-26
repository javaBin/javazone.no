//@flow
import * as React from 'react';
import Button from '../Button/Button';
import { MapPin, Calendar, Mic, Grid } from 'react-feather';
import Container from '../Container/Container';
import './Stats.less';
import location from '../../assets/2018/icons_Location.svg';
import calendar from '../../assets/2018/icons_Calendar.svg';
import mic from '../../assets/2018/icons_Mic.svg';
import partners from '../../assets/2018/icons_Partners.svg';

type StatsProps = {

}

function Stats(props: StatsProps) {
    return (
        <Container>
            <div className="stats">
                <div className="row center-lg">
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <img className="icon" src={location} alt="Location" />
                            <h2>Oslo Spektrum, Norway</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <img className="icon" src={calendar} alt="Calendar" />
                            <h2>September 12th-13th</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <img className="icon" src={mic} alt="Mic" />
                            <h2>24 Speakers</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <img className="icon" src={partners} alt="Partners" />
                            <h2>36 Stands</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Stats;