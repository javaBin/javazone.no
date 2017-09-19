import { connect } from 'react-redux';
import { store } from '../store';
import notFound from './404';
//import { parseVideoId } from '../util/vimeo';
import { getSessions } from '../actions/sessions';
import { Page, PageHeading, Container } from '../components/page';
import { Block, Header, Content } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { get, find, compose, constant } from 'lodash/fp';
import _moment from 'moment';

function moment(d) {
    return _moment(d).utcOffset(2);
}
function parseVideoId(videoUrl) {
    if (!videoUrl) {
        return undefined;
    }

    const parts = videoUrl.split('/');
    if (parts.length < 2) {
        return undefined;
    }

    return parts[parts.length - 1];
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
        sessions: state.sessions.sessions
    };
}

const getVideo = parseVideoId;

const hasVideo = (video) => typeof video !== 'undefined';
const hasSpeakerNotes = speakernoteUrl => typeof speakernoteUrl !== 'undefined';

const Speaker = ({name, pictureUrl}, id) => (
    <div className='details__speaker' key={id}>
        <div className='details__speaker-image' style={{backgroundImage: `url(${pictureUrl})`}}></div>
        <div className='details__speaker-name'>{name}</div>
    </div>
);

const Bio = ({name, bio}, id) => (
    <Block key={id} className='details__block'>
        <Header>{name}</Header>
        <Content>
            <p className='preserve-newlines'>
                {bio}
            </p>
        </Content>
    </Block>
);

const Session = ({title, abstract, oppsummering, speakers, language, format, intendedAudience, starter, stopper, rom, video, speakernoteUrl}) => (
    <Container>
        <CBlock>
            <div className='details__speakers'>
                {speakers.map(Speaker)}
            </div>
        </CBlock>

        <CBlock className='details__block'>
            <CHeader>{title}</CHeader>
            {// <CContent>
            //     {formatStart(starter)} - {formatStop(stopper)} @ {rom}
                    // </CContent>
            }
        </CBlock>

        { hasVideo(video) ?
            <Block className='details__video-block'>
                <iframe className='details__video' src={`https://player.vimeo.com/video/${getVideo(video)}`} frameBorder="0" allowFullScreen></iframe>
            </Block> :
            <span></span>
        }

        <Block className='details__block'>
            <Header>About</Header>
            <Content>
                <p className='details__summary preserve-newlines'>
                    {abstract}
                </p>
            </Content>
        </Block>

        { hasSpeakerNotes(speakernoteUrl) ?
            <CBlock className='details__notes'><CContent><img src={speakernoteUrl}/></CContent></CBlock> :
            <span></span>
        }

        {speakers.map(Bio)}

        <Block className='details__block'>
            <Header>Intended Audience</Header>
            <Content>
                <p>
                    {intendedAudience}
                </p>
            </Content>
        </Block>

        <Block className='details__block'>
            <Header>Language</Header>
            <Content>
                <p>
                    {get(language)(languages)}
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
        <CBlock>
            <CHeader>Loading session...</CHeader>
        </CBlock>
    </Container>
);

const Details = id => props => {
    if (props.sessions.length === 0) {
        props.getSessions();
        return <Page>{ Loading() }</Page>;
    } else {
        const session = find({id: id})(props.sessions);
        console.log(session.speakernoteUrl);
        if (session) {
            return <Page>{ Session(session) }</Page>;
        } else {
            return notFound();
        }
    }
};

export default function(id) {
    return connect(
        mapStateToProps,
        { getSessions }
    )(Details(id));
}
