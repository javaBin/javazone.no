import { connect } from 'react-redux';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';

function mapStateToProps(state) {
    return {
        sessions: state.sessions.sessions
    };
}

const Session = ({title, speakers}, id) => (
    <div className='program__session session' key={id}>
        {speakers} - {title}
    </div>
);

const Program = React.createClass({
    componentWillMount() {
        this.props.getSessions();
    },

    render() {
        const sessions = this.props.sessions;

        return (
            <Page name='program'>
                <Container>
                    <ul className='program'>
                        {sessions.map(Session)}
                    </ul>
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);