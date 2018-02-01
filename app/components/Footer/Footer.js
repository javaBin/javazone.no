//@flow
import * as React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PixelBorder } from '../../components/Section/Section';
import { Facebook, Mail, Twitter, Github } from 'react-feather';
import Link from '../Link/Link';
import Button from '../Button/Button';
import './Footer.less';
import border from '../../assets/2018/pixelborder.svg';

type FooterProps = {
    javabinUrl?: string,
    facebookUrl?: string,
    twitterUrl?: string,
    mailUrl?: string,
    githubUrl?: string
}

Footer.defaultProps = {
    javabinUrl: "http://java.no",
    facebookUrl: "https://www.facebook.com/JavaZoneConference",
    twitterUrl: "https://twitter.com/javazone",
    mailUrl: "mailto:javazone@java.no",
    githubUrl: "https://github.com/javaBin"
}

function Footer(props: FooterProps): React.Node {
    return (
        <Grid className="footer" fluid>
            <Row>
                <PixelBorder orientation="top" />
            </Row>
            <Row around="xs" className="footer-content">
                <Col xs={12} sm={8} md={4} lg={4}>
                    <Row center="xs" around="xs">
                        <Col>
                            <a href={props.facebookUrl} target="_blank"><Facebook className="social-icon" size="32" /></a>
                        </Col>
                        <Col>
                            <a href={props.twitterUrl} target="_blank"><Twitter className="social-icon" size="32" /></a>
                        </Col>
                        <Col>
                            <a href={props.mailUrl} target="_blank"><Mail className="social-icon" size="32" /></a>
                        </Col>
                        <Col>
                            <a href={props.githubUrl} target="_blank"><Github className="social-icon" size="32" /></a>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Link href={props.javabinUrl} className="javabin nav-item draw meet">Made by javaBin</Link>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
    /*
    return (
        <Container fullWidth>
            <div className="border">
            </div>
            <div className="row footer">
                <div className="col-xs col-sm col-md col-lg">
                    <div className="box">
                        <Container>
                            <a href={props.facebook}><Facebook className="social-icon" size="32" /></a>
                            <a href={props.twitter}><Twitter className="social-icon" size="32" /></a>
                            <a href={props.mail}><Mail className="social-icon" size="32" /></a>
                            <a href={props.github}><Github className="social-icon" size="32" /></a>
                        </Container>
                    </div>
                    <div className="box">
                        <Container>
                            <Link href={props.javabin} className="javabin nav-item draw meet">Made by javaBin</Link>
                        </Container>
                    </div>
                </div>
            </div>
        </Container>
    )
    */
}

export default Footer;