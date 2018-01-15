//@flow
import * as React from 'react';
import Button from '../Button/Button';
import { MapPin, Calendar, Mic, Grid } from 'react-feather';
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
                            <MapPin size="110" />
                            <h2>Oslo Spektrum, Norway</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <Calendar size="110" />
                            <h2>September 12th-13th</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <Mic size="110" />
                            <h2>24 Speakers</h2>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg-3">
                        <div className="box">
                            <Grid size="110" />
                            <h2>36 Stands</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Stats;