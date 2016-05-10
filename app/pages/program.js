import { connect } from 'react-redux';
import { store } from '../store';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, PageBody } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';

function mapStateToProps(state) {
    return {
        sessions: state.sessions.sessions
    };
}

const Program = React.createClass({
    componentWillMount() {
        this.props.getSessions();
    },

    render() {
        const sessions = this.props.sessions;

        return (
            <Page name='program'>
                {JSON.stringify(sessions, null, 4)}
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSessions })(Program);