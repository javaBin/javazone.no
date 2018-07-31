//@flow
import { connect } from 'react-redux';
import { Link } from '../../components/link';
import { getWorkshops } from '../../actions/workshops';
import { getSessions } from '../../actions/sessions';
import * as React from 'react';
import Loader from '../../components/Loader/Loader.js';
import Page from '../../components/Page/Page.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Section } from '../../components/Section/Section.js';
import Button from '../../components/Button/Button.js';
import { CenterBlock } from '../../components/Block/Block.js';
import './Workshops.less';

function workshopClass(workshop) {
    if (!workshop) {
        return 'button--disabled';
    }

    switch (workshop.status) {
        case 'FREE_SPOTS': 
            return 'button--green';
        case 'FEW_SPOTS': 
            return 'button--yellow';
        case 'FULL': 
            return 'button--red';
        case 'VERY_FULL': 
            return 'button--red';
        case 'CLOSED': 
            return 'button--disabled';
        default: 
            return 'button--disabled';
    }
}

function workshopStatus(workshop) {
    if (!workshop) {
        return '';
    }

    switch (workshop.status) {
        case 'FREE_SPOTS':
            return 'Registration open';
        case 'FEW_SPOTS': 
            return 'Few spots left';
        case 'FULL': 
            return 'Waiting list';
        case 'VERY_FULL': 
            return 'No more spots';
        case 'CLOSED': 
            return 'Registration closed';
        default: 
            return 'Opens at August 6th, 13:00';
    }
}


function generateSpeakersString(speakers: []): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length-1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}

type SimpleSessionListProps = {
    workshops: Array<Object>;
}

function SimpleSessionList(props: SimpleSessionListProps) {
    return (
        props.workshops.map(workshop => {
            return <div key={workshop.sessionId} className="program-simple-session-item">
                <Row>
                    <Col xs={12} sm={10} md={11} lg={11}>
                        <Row className="program-simple-session-title">
                            <Link href={`/program/${workshop.sessionId}`}>{workshop.title}</Link>
                        </Row>
                        <Row>
                            <Col className="program-margin-right">
                                {workshop.language === 'en' ? 'English' : 'Norwegian'}
                            </Col>
                            <Col className="program-margin-right">
                                {`${workshop.length} Minutes`}
                            </Col>
                            <Col>
                                {workshop.speakers.length > 1 ? generateSpeakersString(workshop.speakers) : workshop.speakers[0].name}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={2} md={1} lg={1}>
                        {workshop.status === 'CLOSED'
                        ? null
                        :   
                            <Row className="workshop-register-button" center="xs" middle="xs">
                                <Col>
                                    <Button alternate link={workshop.registerLoc}>Register</Button>
                                </Col>
                            </Row>}
                    </Col>
                </Row>
            </div>
        })
    );
};

type WorkshopsProps = {
    getWorkshops: Function;
    getSessions: Function;
    workshops: Array<Object>;
    sessions: Array<Object>;
    isFetching: boolean;
    failure: boolean;
}

type WorkshopsState = {
}

class Workshops extends React.Component<WorkshopsProps, WorkshopsState> {

    constructor(props: WorkshopsProps) {
        super(props);
    }

    componentWillMount() {
        this.props.getWorkshops();
        this.props.getSessions();
    }

    render() {
        const filteredWorkshops = this.props.sessions.filter(session => session.format === 'workshop');
        const content = this.props.failure 
            ? <Section class="program-loader" dark><Loader /></Section>
            : <SimpleSessionList workshops={filteredWorkshops} />;
        console.log('workshops', filteredWorkshops);
        return (
            <Page name='workshops'>
                <PageHeader subHeader="Bring out the most of your ticket">Workshops</PageHeader>
                <Section>
                    <CenterBlock>
                        <p>
                            For those of you who want to make the most of their JavaZone ticket we offer a selection of hands-on workshops that take place the day before JavaZone officially begins. To ensure a positive learning experience we’ve limited the spaces on each workshop, so you’ll have to register to secure your place. Registration opens on Monday, August 5 at 13:00, so put a reminder in your calendar!
                        </p>
                    </CenterBlock>
                </Section>
                <Section dark>
                    {content}
                </Section>
            </Page>
        );
    }
};

function mapStateToProps(state) {
    return {
        isFetching: state.sessions.isFetching,
        workshops: state.workshops.workshops,
        sessions: state.sessions.sessions,
        failure: state.workshops.failure
    };
}

export default connect(mapStateToProps, { getWorkshops, getSessions })(Workshops);
