import { connect } from 'react-redux';
import { store } from '../store';
import { getSession, removeSession } from '../actions/session';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { get } from 'lodash/fp';

const languages = {
    'no': 'Norwegian',
    'en': 'English'
};

const formats = {
    'lightning-talk' : 'Lightning Talk',
    'workshop': 'Workshop',
    'presentation': 'Presentation'
};

function mapStateToProps(state) {
    return {
        session: state.session.session
    };
}

const Speaker = ({navn, bildeUri}, id) => (
    <div className='details__speaker' key={id}>
        <img className='details__speaker-image' src={`${bildeUri}?size=240`} />
        <div className='details__speaker-name'>{navn}</div>
    </div>
);

const Bio = ({navn, bio}, id) => (
    <Block key={id}>
        <Header>{navn}</Header>
        <Content>
            <p>
                {bio}
            </p>
        </Content>
    </Block>
);

const Session = ({tittel, beskrivelse, oppsummering, foredragsholdere, sprak, format}) => (
    <Container>
        <CenteredBlock>
            <div className='details__speakers'>
                {foredragsholdere.map(Speaker)}
            </div>
            <CenteredHeader>{tittel}</CenteredHeader>
            <CenteredContent>
            </CenteredContent>
        </CenteredBlock>

        <Block>
            <Header>About</Header>
            <Content>
                <p className='details__summary'>
                    {oppsummering}
                </p>
                <p className='details__description'>
                    {beskrivelse}
                </p>
            </Content>
        </Block>

        {foredragsholdere.map(Bio)}

        <Block>
            <Header>Format</Header>
            <Content>
                <p>
                    {get(format)(formats)}
                </p>
            </Content>
        </Block>

        <Block>
            <Header>Language</Header>
            <Content>
                <p>
                    {get(sprak)(languages)}
                </p>
            </Content>
        </Block>
    </Container>
);

const Loading = () => (
    <Container>
        <CenteredBlock>
            <CenteredHeader>Loading session...</CenteredHeader>
        </CenteredBlock>
    </Container>
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
        console.log(session);
        const content = session ? Session(session) : Loading();
        return (
            <Page name='details'>
                    {content}
            </Page>
        );
    }
});

export default connect(mapStateToProps, { getSession, removeSession })(Details);