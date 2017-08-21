import { connect } from 'react-redux';
import { Link } from '../components/link';
import { getWorkshops } from '../actions/workshops';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, BackgroundImage, P } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { assignInAll, join, map, filter, find, sortBy, includes, reduce, compose, get, curry } from 'lodash/fp';

const workshops = [
    'js-ws-001',
    'js-ws-002',
    'jz-ws-003',
    'jz-ws-004',
    'jz-ws-005',
    'jz-ws-006',
    'jz-ws-007',
    'jz-ws-008'
];

const sortIndexes = {
    'lightning-talk' : 2,
    'presentation': 1,
    'workshop': 0
};

function isWorkshop(session) {
    return session.format === 'workshop';
}

const groupByFormat = reduce((acc, session) => {
    let key = find({format: session.format}, acc);
    if (!key) {
        key = {
            format: session.format,
            sessions: [],
            className: `sessions__format-title--${session.format}`,
            sortIndex: get(session.format)(sortIndexes)
        };
        acc.push(key);
    }

    key.sessions.push(session);
    return acc;
}, []);

const isJzWorkshop = workshopTitles => workshop =>
      includes(workshop.title, workshopTitles);

function workshopUrl(workshop) {
    if (!workshop) {
        return '#';
    }
    return `https://javazone.no/moosehead/#/register/${workshop.id}`;
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
        return 'Opens at September 1st, 12.00';
    }

    switch (workshop.status) {
    case 'FREE_SPOTS': return 'I want to attend!';
    case 'FEW_SPOTS': return 'Few spots left';
    case 'FULL': return 'Waiting list';
    case 'VERY_FULL': return 'No more spots';
    case 'CLOSED': return 'Registration closed';
    default: return 'Opens at September 1st, 12.00';
    }
}

const Workshop = (workshop, key) => (
    <li className='workshops__workshop workshop' key={key}>
        <span className='workshop__lang workshop__lang--desktop'>{workshop.language}</span>
        <div className='workshop__info'>
            <span className='workshop__lang workshop__lang--mobile'>{workshop.language}</span>
            <Link href={`/program/${workshop.details}`} className='workshop__title'>{workshop.title}</Link>
            <div className='workshop__starts'>
                {workshop.time} – {workshop.duration} hours
            </div>
            <div className='workshop__speakers'>
                {compose(join(', '), map(s => s.name))(workshop.speakers)}
            </div>
        </div>
        <a className={`${workshopClass(workshop)} workshop__status button`} href={workshopUrl(workshop)}>{workshopStatus(workshop)}</a>
    </li>
);

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops,
        sessions: state.sessions.sessions
    };
}

function merge(workshops, sessions) {
    if (workshops.length === 0 || !sessions || sessions.length === 0) {
        return [];
    }

    return workshops.map((workshop) => {
        const s = find((session) => session.title === workshop.title, sessions);
        const merged = assignInAll([{}, s, workshop]);
        merged.details = s.id;
        return merged;
    });
}

const Workshops = React.createClass({
    componentWillMount() {
        this.props.getWorkshops();
        this.props.getSessions();
    },

    render() {
        const workshops = filter(s => s.format === 'workshop')(this.props.sessions);
        const workshopTitles = map(w => w.title)(workshops);
        const jzWorkshops = filter(isJzWorkshop(workshopTitles))(this.props.workshops);
        const mergedWorkshops = merge(jzWorkshops, workshops);
        return (
            <Page name='workshops'>
                <Container>
                    <CBlock>
                        <CHeader>Welcome to the JavaZone 2017 Workshops!</CHeader>
                        <CContent>
                            <p>
                                For those of you who want to make the most of their JavaZone ticket we offer a selection of hands-on workshops that take place the day before JavaZone officially begins. To ensure a positive learning experience we’ve limited the spaces on each workshop, so you’ll have to register to secure your place. Registration opens at noon on Friday the 1st of September, so put a reminder in your calendar!
                            </p>
                        </CContent>
                    </CBlock>

                    <div className='workshop-list'>
                        <div className='workshop-list__title'>Workshops</div>
                        <ul className='workshop-list__workshops'>
                            {mergedWorkshops.map(Workshop)}
                        </ul>
                    </div>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getWorkshops, getSessions })(Workshops);
