//@flow
import * as React from 'react';
import Container from '../Container/Container';
import { Facebook, Mail, Twitter, Github } from 'react-feather';
import Button from '../Button/Button';
import './Footer.less';
import border from '../../assets/2018/pixelborder.svg';

type FooterProps = {
    javabin: string,
    facebook: string,
    twitter: string,
    mail: string,
    github: string
}

Footer.defaultProps = {
    javabin: "http://java.no",
    facebook: "https://www.facebook.com/JavaZoneConference",
    twitter: "https://twitter.com/javazone",
    mail: "mailto:javazone@java.no",
    github: "https://github.com/javaBin"
}

function Footer(props: FooterProps) {
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
                            <a className="javabin draw meet" href={props.javabin}>Made by javaBin</a>
                        </Container>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;