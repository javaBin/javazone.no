import { connect } from "react-redux";
import { Link } from "react-router";
import { parseVideoId } from "../util/vimeo";
import { find, isEmpty } from "lodash/fp";
import { getFeedback } from "../actions/feedback";
import { Page, PageHeading, Container } from "../components/page";
import { Block, Header, Content } from "../components/block";
import { CenteredBlock, CenteredHeader } from "../components/centeredblock";
import { Column, ColumnHeading, P } from "../components/textblock";
import header from "../assets/academy.jpg";

const ShowFeedback = (props) => {
    const videoUrl = props.session.video;
    return (
        <Container>
            <Block className='details__block'>
                <Header>Feedback, baby!</Header>
                <Content>
                    <p>
                        Everybody loves feedback. And statistics. During the conference, we collected feedback both
                        physically in form of notes after your talk, and online, in form of ratings.
                        We have compiled this feedback and tried to present it to you in a more structured manner,
                        which hopefully will give you some input on how others saw your performance.
                    </p>
                    <p>
                        Please <a className="feedback__link" href="mailto:program@javazone.no">let us know</a> if anything is unclear, or if you
                        miss something. We hope you can
                        put this to good use, and that we'll see you again next year for another JavaZone. We'll
                        certainly give you a heads up before the "Call for Speakers" opens.
                    </p>
                </Content>
            </Block>

            <Block className='details__block'>
                <Header>Your video</Header>
                <Content>
                    <P>
                        JavaZone is a conference arranged by volunteers, and we believe in sharing of knowledge and
                        making information available to everyone. This is why we release videos of each talk just
                        after (or, during, actually) the conference, completely for free.
                    </P>
                    <P>
                        Your talk can be seen at <a className="feedback__link" href={videoUrl}>{videoUrl}</a> – feel free to share it as
                        much as you'd like. You'll also find some statistics on this page: click the

                        <span className="stats-button">Stats</span> button just below the description, and you will
                        see freshly updated total plays, likes, and comments among others.<br />

                        Note: you need to be logged in to see statistics. Don't worry, registering
                        for a basic account is free.
                    </P>
                </Content>
            </Block>
            <Block className='details__video-block'>
                <iframe
                    className='details__video'
                    src={`https://player.vimeo.com/video/${parseVideoId(videoUrl)}`}
                    frameBorder="0"
                    allowFullScreen></iframe>
            </Block>

            <CenteredBlock>
                <CenteredHeader>Your Feedback</CenteredHeader>
            </CenteredBlock>

            <Block className='details__block'>
                <Header>Vote boxes</Header>
                <Content>
                    You might have noticed the wooden boxes outside the rooms.


                    Those actually worked and here is the result:

                    <p>{JSON.stringify(props.feedback.session.paper)}</p>

                    On average, across all talks, the notes were spread as follows

                    <p>{JSON.stringify(props.feedback.conference.paper)}</p>

                    Sadly, we do not have feedback in gathered from our vote boxes for your talk. If you had a
                    lightning talk, this is the reason.
                </Content>
            </Block>

            <Block className='details__block'>
                <Header>Apps</Header>
                <Content>
                    People were asked to rate your talk from 1 trough 5 on four different topics: relevance,
                    content, quality and overall. New this year was that we added comments to the talks.
                    A total of {99} people gave you feedback online, and these are your results:

                    <p>{JSON.stringify(props.feedback.session.online)}</p>

                    To give you a better context for your rating, this is the average rating across all the
                    talks at this years JavaZone:

                    <p>{JSON.stringify(props.feedback.conference.online)}</p>

                </Content>
            </Block>

            {!isEmpty(props.feedback.comments) &&
                <Block className='details__block'>
                    <Header>Comments</Header>
                    <Content>
                        This is the unfiltered feedbacks that our users have given trough our apps.

                        <br />
                        <ul>
                            {props.feedback.comments.map((comment, index) => <li key={index}>{comment}</li>)}
                        </ul>
                    </Content>
                </Block>
            }

            <Block block={true}>
                <Column center={true}>
                    <ColumnHeading>
                        We hope to see you at JavaZone 2016 – please feel free to spread
                        the word to your local community!
                    </ColumnHeading>
                    <P className='speakers__regards'>
                        Best regards,<br />the JavaZone Program Committee
                    </P>
                </Column>
            </Block>
        </Container>
    );
};

const Loading = () => (
    <div className='program__loading'>
        Hold on! I’m trying to get hold of the feedback right as we speak. Shouldn’t take too long!
    </div>
);

const Feedback = React.createClass({
    displayName: "Feedbacks",

    componentWillMount() {
        this.props.getFeedback(this.props.params.id);
    },

    render() {
        const loading = !(this.props.session && this.props.feedback);
        return (
            <Page name='feedback'>
                <PageHeading background={header}>
                    { !loading && this.props.session.title }
                </PageHeading>
                <Container>
                    <CenteredBlock>
                        <CenteredHeader>JavaZone 2016 Feedback</CenteredHeader>
                    </CenteredBlock>
                    { loading ?
                        <Loading /> :
                        <ShowFeedback
                            session={this.props.session}
                            feedback={this.props.feedback}/>
                    }
                </Container>
            </Page>
        );
    }
});

const toProps = (state, props) => {
    return {
        isFetching: state.session.isFetching,
        session: find({id: props.params.id})(state.sessions.sessions),
        feedback: state.feedback.feedback
    };
};

export default connect(toProps, {getFeedback})(Feedback);
