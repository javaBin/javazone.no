import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getWorkshops } from '../actions/workshops';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { find, sortBy } from 'lodash/fp';

const workshops = [
    "internet_of_things_for_everyone",
    "advanced_docker_workshop",
    "let_the_good_times_flow__buildin",
    "angular2_med_typescript",
    "introduction_to_react_native",
    "alt_du_ikke_visste_om_chrome_dev",
    "vr_for_alle",
    "law_and_order_in_la__to_process_"
];

function isWorkshop(workshop) {
    return workshops.includes(workshop.id);
}

const mooseheadId = title => title.toLowerCase().replace(/[^a-zæøå0-9\s]/g, '').replace(/\s/g, '_').substr(0, 32);

function workshopUrl(workshop) {
    if (!workshop) {
        return '#';
    }
    return `https://javazone.no/moosehead/#/register/${workshop.mooseheadId}`;
}

function workshopClass(workshop) {
    if (!workshop) {
        return 'button--disabled';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'button--green';
    case 'FEW_SPOTS': return 'button--yellow';
    case 'FULL': return 'button--red';
    case 'VERY_FULL': return 'button--red';
    case 'CLOSED': return 'button--disabled';
    default: return 'button--disabled';
    }
}

function workshopStatus(workshop) {
    if (!workshop) {
        return 'Opens at 12th august, 12.00';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'I want to attend!';
    case 'FEW_SPOTS': return 'Few spots left';
    case 'FULL': return 'Waiting list';
    case 'VERY_FULL': return 'No more spots';
    case 'CLOSED': return 'Registration closed';
    default: return 'Opens at 12th august, 12.00';
    }
}

const Workshop = (workshop, key) => (
    <li className='workshops__workshop workshop' key={key}>
        <span className='workshop__lang workshop__lang--desktop'>{workshop.language}</span>
        <div className='workshop__info'>
            <span className='workshop__lang workshop__lang--mobile'>{workshop.language}</span>
            <Link to={`/program/${workshop.id}`} className='workshop__title'>{workshop.title}</Link>
            <div className='workshop__starts'>
                {workshop.time} – {workshop.duration} hours
            </div>
            <div className='workshop__speakers'>
                {workshop.speakers}
            </div>
        </div>
        <a className={`${workshopClass(workshop)} workshop__status button`} href={workshopUrl(workshop)}>{workshopStatus(workshop)}</a>
    </li>
)

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops,
        sessions: state.sessions.sessions
    };
}

function merge(workshops, sessions) {
    if (workshops.length === 0 || !sessions || sessions.sessions.length === 0) {
        return [];
    }

    return workshops.map((workshop) => {
        const s = find((session) => mooseheadId(session.title) === workshop.id, sessions.sessions);
        s.mooseheadId = workshop.id;
        s.status = workshop.status;
        return s;
    });
}

const Kids = React.createClass({
    componentWillMount() {
        this.props.getWorkshops();
        this.props.getSessions();
    },

    render() {
        const workshops = sortBy('timestamp', merge(this.props.workshops.filter(isWorkshop), this.props.sessions[1]));

        return (
            <Page name='workshops'>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader>JavaZone 2016 – Workshops</CenteredHeader>
                        <CenteredContent>
                            <p>
                                This year, as last year, we have a full day dedicated to workshops before JavaZone officially begins. There are a limited number of seats for the workshops, so registration is required. First come, first served. Registration opens Tuesday August 12th at 12.00.
                            </p>
                        </CenteredContent>
                    </CenteredBlock>

                    <div className='workshop-list'>
                        <div className='workshop-list__title'>Workshops</div>
                        <ul className='workshop-list__workshops'>
                            {workshops.map(Workshop)}
                        </ul>
                    </div>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getWorkshops, getSessions })(Kids);
