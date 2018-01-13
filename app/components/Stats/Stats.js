//@flow
import * as React from 'react';
import Button from '../Button/Button';
import { MapPin, Calendar, MessageCircle, Grid } from 'react-feather';
import Container from '../Container/Container';
import './Stats.less';

type StatsProps = {

}

function Stats(props: StatsProps) {
    return (
        <Container>
            <div className="stats">
                <div className="row center-lg">
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <h2>Location</h2>
                            <MapPin size="110" />
                            <h2>Oslo Spektrum, Norway</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <h2>Date</h2>
                            <Calendar size="110" />
                            <h2>September 12th-13th</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <h2>Speakers</h2>
                            <MessageCircle size="110" />
                            <h2>24</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <h2>Stands</h2>
                            <Grid size="110" />
                            <h2>36</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Stats;