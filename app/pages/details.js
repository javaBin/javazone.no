import { connect } from 'react-redux';
import { store } from '../store';
import { getSession, removeSession } from '../actions/session';
import { Page, PageHeading, Container } from '../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../components/textblock';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';

function mapStateToProps(state) {
    return {
        session: state.session.session
    };
}

const Session = ({tittel}) => (
    <CenteredBlock>
        <CenteredHeader>{tittel}</CenteredHeader>
        <CenteredContent>
            <p>
                Test
            </p>
        </CenteredContent>
    </CenteredBlock>
);

const Loading = () => (
    <CenteredBlock>
        <CenteredHeader>Loading session...</CenteredHeader>
    </CenteredBlock>
);

const Details = React.createClass({
    componentWillMount() {
        this.props.getSession(this.props.params.id);
    },

    componentWillUnmount() {
        this.props.removeSession();
    },

    render() {
        const session = this.props.session;
        const content = session ? Session(session) : Loading();
        return (
            <Page name='program'>
                <Container>
                    {content}
                </Container>
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSession, removeSession })(Details);