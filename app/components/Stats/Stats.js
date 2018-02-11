//@flow
import * as React from 'react';
import Button from '../Button/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from '../Container/Container';
import './Stats.less';
import location from '../../assets/2018/icons_combined_Location.svg';
import calendar from '../../assets/2018/icons_combined_Calendar.svg';
import mic from '../../assets/2018/icons_combined_Mic.svg';
import partners from '../../assets/2018/icons_combined_Partners.svg';

type StatsProps = {
}

type StatItemProps = {
    image: string,
    children: string
}

function StatItem(props: StatItemProps) {
    return (
        <div className="stat-item">
            <img className="stat-item-image" src={props.image} alt="statImage" />
            <h2>{props.children}</h2>
        </div>
    )
}

function Stats(props: StatsProps) {

    return (
        <Grid className="stats">
            <Row around="xs">
                <Col xs={3}>
                    <StatItem image={location}>Oslo Sepktrum, Norway</StatItem>
                </Col>
                <Col xs={3}>
                    <StatItem image={calendar}>September 12th-13th</StatItem>
                </Col>
                <Col xs={3}>
                    <StatItem image={mic}>24 Speakers</StatItem>
                </Col>
                <Col xs={3}>
                    <StatItem image={partners}>36 Stands</StatItem>
                </Col>
            </Row>
        </Grid>
    )

    /*
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
    */
}

export default Stats;