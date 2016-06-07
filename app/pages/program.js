import { connect } from 'react-redux';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

function mapStateToProps(state) {
    return {
        sessions: state.sessions.sessions
    };
}

const Session = ({title, speakers, icon}, id) => (
    <li className='sessions__session session' key={id}>
        <i className={`session__icon ${icon}`}></i>
        <div className='session__title'>
            {title}
        </div>
        <div className='session__speakers'>{speakers}</div>
    </li>
);

const Format = ({format, sessions}, id) => (
    <li className='sessions__format' key={id}>
        <div className='sessions__format-title'>{format}</div>
        <ul className='sessions__sessions'>
            {sessions.map(Session)}
        </ul>
    </li>
);

const Program = React.createClass({
    componentWillMount() {
        this.props.getSessions();
    },

    render() {
        const sessions = this.props.sessions;
        console.log(sessions);
        return (
            <Page name='program'>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader>JavaZone 2016 – The Program</CenteredHeader>
                        <CenteredContent>
                            <p>
                                The JavaZone Program Committee has been hard at work, and can now present the program for JavaZone 2016. This is not the complete program,
                                talks are still being added as more and more people accept. @Espen eller noen i programkommiteen: Si noe om at vi nå har 2 tracks med lyntaler?
                            </p>
                        </CenteredContent>
                    </CenteredBlock>
                    <ul className='sessions'>
                        {sessions.map(Format)}
                    </ul>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);