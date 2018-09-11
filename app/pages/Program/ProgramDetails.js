//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import notFound from '../NotFound/NotFound.js';
import { getSessions } from '../../actions/sessions';
import Page from '../../components/Page/Page.js';
import Loader from '../../components/Loader/Loader.js';
import { Section } from '../../components/Section/Section.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import { LeftBlock } from '../../components/Block/Block.js';
import { PageHeading, Container } from '../../components/page';
import { Block, Header, Content } from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { get, find, compose, constant } from 'lodash/fp';
import { getSession } from '../../actions/session';

const tooSmallHack = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

type ProgramDetailsProps = {
    sessions: [];
    id: string;
    getSessions: Function;
}

type ProgramDetailsState = {
    session: any
}

class ProgramDetails extends React.Component<ProgramDetailsProps, ProgramDetailsState> {

    generateSpeakerString: Function;

    state: ProgramDetailsState = {
        session: {}
    };

    constructor(props: ProgramDetailsProps) {
        super(props);
        this.generateSpeakerString = this.generateSpeakerString.bind(this);
    }

    componentWillReceiveProps(next, prev) {
        const session = next.sessions.filter(session => session.sessionId === this.props.id);
        this.setState({
            session: session[0]
        });
    }

    componentWillMount() {
        this.props.getSessions();
    }

    generateSpeakerString(speakers) {
        if (!speakers) return '';
        let speakersCombined = '';
        speakers.forEach((speaker, idx) => (idx < speakers.length-1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
        return speakersCombined;
    }

    transformFormat(format) {
        if (!format) return '';
        let replaced = format.replace('-', ' ');
        return replaced.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    render() {
        console.log('state', this.state.session);
        const title = this.state.session.title;
        const speakerString = this.generateSpeakerString(this.state.session.speakers);
        const abstract = this.state.session.abstract;
        const speakers = this.state.session.speakers;
        const audience = this.state.session.intendedAudience;
        const room = this.state.session.room;
        const language = this.state.session.language;
        const video = this.state.session.video;
        const format = this.transformFormat(this.state.session.format);
        if (this.state.session.title === undefined) {
            return (
                <Page name='programDetails'>
                    <PageHeader subHeader=''>Program details</PageHeader>
                    <Section className="program-loader" dark><Loader /></Section>
                </Page>
            )
        } else {
            return (
                <Page name='programDetails'>
                    <PageHeader subHeader={speakerString}>{title}</PageHeader>
                    {video ? <Section alternate pixel>
                        <iframe className='program-details-video' src={`https://player.vimeo.com/video/${video}`} frameBorder="0" allowFullScreen></iframe>
                    </Section> : null}
                    <Section>
                        <LeftBlock header="abstract">
                            <p className="text-wrap">
                                {abstract}
                            </p>
                        </LeftBlock>
                        {speakers ? speakers.map(speaker => {
                            return <LeftBlock key={speaker.name} header={speaker.name}>
                                        <p className="text-wrap">
                                            {speaker.bio}
                                        </p>
                                    </LeftBlock>
                        }) : null}
                        <LeftBlock header="intended audience">
                            <p>
                                {audience}
                            </p>
                        </LeftBlock>
                        <LeftBlock header="Location">
                            <p className="too-small">
                                {room}
                            </p>
                        </LeftBlock>
                        <LeftBlock header="Language">
                            <p className="too-small">
                                {language === 'en' ? 'English' : 'Norwegian'}
                            </p>
                        </LeftBlock>
                        <LeftBlock header="Format">
                            <p className="too-small">
                                {format}
                            </p>
                        </LeftBlock>
                    </Section>
                </Page>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        sessions: state.sessions.sessions,
        id: state.routes.page.replace('/program/', '')
    };
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
    return {
        getSessions() {
            dispatch(getSessions())
        }
    }
}

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(ProgramDetails)
};