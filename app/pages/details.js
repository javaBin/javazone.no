import { connect } from 'react-redux';
import { store } from '../store';
import { parseVideoId } from '../util/vimeo';
import { getSession, removeSession } from '../actions/session';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content } from '../components/block';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { get, find, compose } from 'lodash/fp';
import _moment from 'moment';

function moment(d) {
    return _moment(d).utcOffset(2);
}

const languages = {
    'no': 'Norwegian',
    'en': 'English'
};

const formats = {
    'lightning-talk' : 'Lightning Talk',
    'workshop': 'Workshop',
    'presentation': 'Presentation'
};

function formatStart(time) {
    return moment(time).format('dddd, HH:mm');
}

function formatDuration(starter, stopper) {
    return moment(stopper).diff(moment(starter), 'minutes');
}

function formatStop(time) {
    return moment(time).format('HH:mm');
}

function mapStateToProps(state) {
    return {
        session: state.session.session
    };
}

const getVideo = compose(parseVideoId, get('href'), find({rel:'video'}));

function hasVideo(links) {
    const video = getVideo(links);
    return typeof video !== 'undefined';
}

const Speaker = ({navn, bildeUri}, id) => (
    <div className='details__speaker' key={id}>
        <img className='details__speaker-image' src={`${bildeUri}?size=240`} />
        <div className='details__speaker-name'>{navn}</div>
    </div>
);

const Bio = ({navn, bio}, id) => (
    <Block key={id} className='details__block'>
        <Header>{navn}</Header>
        <Content>
            <p className='preserve-newlines'>
                {bio}
            </p>
        </Content>
    </Block>
);

const Session = ({tittel, beskrivelse, oppsummering, foredragsholdere, sprak, format, tiltenktPublikum, starter, stopper, rom, links}) => (
    <Container>
        <CenteredBlock>
            <div className='details__speakers'>
                {foredragsholdere.map(Speaker)}
            </div>
        </CenteredBlock>

        <CenteredBlock className='details__block'>
            <CenteredHeader>{tittel}</CenteredHeader>
            <CenteredContent>
                {formatStart(starter)} - {formatStop(stopper)} @ {rom}
            </CenteredContent>
        </CenteredBlock>

        { hasVideo(links) ?
            <Block className='details__video-block'>
                <iframe className='details__video' src={`https://player.vimeo.com/video/${getVideo(links)}`} frameBorder="0" allowFullScreen></iframe>
            </Block> :
            <span></span>
        }

        <Block className='details__block'>
            <Header>About</Header>
            <Content>
                <p className='details__summary preserve-newlines'>
                    {oppsummering}
                </p>
                <p className='details__description preserve-newlines'>
                    {beskrivelse}
                </p>
            </Content>
        </Block>

        {foredragsholdere.map(Bio)}

        <Block className='details__block'>
            <Header>Intended Audience</Header>
            <Content>
                <p>
                    {tiltenktPublikum}
                </p>
            </Content>
        </Block>

        <Block className='details__block'>
            <Header>Language</Header>
            <Content>
                <p>
                    {get(sprak)(languages)}
                </p>
            </Content>
        </Block>

        <Block className='details__block'>
            <Header>Format</Header>
            <Content>
                <p>
                    {get(format)(formats)}
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