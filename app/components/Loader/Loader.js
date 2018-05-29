//@flow
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import './Loader.less';

export default function Loader() {
    return (
        <Grid className="loader">
            <Row>
                <Col center="xs">
                    <div className="sk-cube-grid">
                        <div className="sk-cube sk-cube1"></div>
                        <div className="sk-cube sk-cube2"></div>
                        <div className="sk-cube sk-cube3"></div>
                        <div className="sk-cube sk-cube4"></div>
                        <div className="sk-cube sk-cube5"></div>
                        <div className="sk-cube sk-cube6"></div>
                        <div className="sk-cube sk-cube7"></div>
                        <div className="sk-cube sk-cube8"></div>
                        <div className="sk-cube sk-cube9"></div>
                    </div>
                    <h4 className="loading-text">Loading</h4>
                </Col>
            </Row>
        </Grid>
    )
}