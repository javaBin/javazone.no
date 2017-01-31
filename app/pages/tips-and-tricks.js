import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import {Dl, Dt, Dd} from '../components/definition-list';

const TipsAndTricks = () => (
    <Page name='monetary-policy'>
        <Heading>
            <LargeHeading>General CfS tips</LargeHeading>
            <SmallHeading>Make that abstract shine!</SmallHeading>
        </Heading>

        <Container>
            <Block>
                <Header>Tips</Header>
                <Content>
                    <P>
                        There is generally a very high correlation between how much
                        work one puts in to the creation of a proposal and the
                        chance that the proposal is accepted. Even a proposal with
                        an extremely cool theme, entertaining title, and an
                        experienced speaker may be excluded if the description is
                        lacking. We have gathered some tips that should be considered
                        when writing a JavaZone proposal, and a few reasons why your
                        proposal may not have been accepted.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>General advice</Header>
                <Content>
                    <Dl>
                        <Dt>Write a good title</Dt>
                        <Dd>
                            The title is the first thing people will see. A poorly
                            worded title may be the only thing many will see of
                            your proposal. A good title is catchy and concise, and
                            should describe what you will talk about.
                        </Dd>
                        <Dt>Write a catchy abstract</Dt>
                        <Dd>
                            The abstract is what will be featured in the JavaZone
                            program for the public to read. If the program
                            committee doesn't believe that the abstract is good
                            enough to convince people to come to your presentation
                            then the proposal won't be accepted.
                        </Dd>
                        <Dt>Write a detailed outline</Dt>
                        <Dd>
                            The outline is your chance to pitch the proposal to
                            the program committee. This section will not be
                            publicised, but if your outline is thin or just a
                            copy of your abstract then you're not selling yourself
                            well.
                        </Dd>
                        <Dt>Be concise</Dt>
                        <Dd>
                            With an exciting theme it's easy to find many things
                            one wants to present. Don't get carried away. Your
                            proposal outline should explain how you will cover
                            everything in a clear and structured manner.
                        </Dd>
                        <Dt>Include supporting material</Dt>
                        <Dd>
                            If you've held the talk before then please include
                            links to any supporting material that you can show
                            us. This could be video recordings, slide decks, blogs
                            posts, github repositories, photos, etc.
                        </Dd>
                        <Dt>Fill out all mandatory fields properly</Dt>
                        <Dd>
                            Nothing says you haven't put much effort in to your
                            proposal like a submission form filled with 'TODO'
                            or 'TBD' in the required fields. This is fine for the
                            initial submission, but please make sure the required
                            information is filled out properly by the submission
                            deaDline.
                        </Dd>
                        <Dt>Ask someone to review your proposal</Dt>
                        <Dd>
                            If your proposal is full of typos it will be noticed (especially
                            in key fields such as the title). This isn't a point
                            that will necessarily mean the proposal will be rejected, but
                            it doesn't help your case.
                        </Dd>
                        <Dt>Do you plan on doing live coding? Be sure to describe your plan to us</Dt>
                        <Dd>
                            Live coding can make a presentation more entertaining, but
                            it also increases the chances of something going
                            wrong. If the program committee doesn't get the
                            feeling that you have a solid plan for the demonstration
                            then it will hurt your chances to be accepted.
                        </Dd>
                        <Dt>Send in multiple proposals</Dt>
                        <Dd>
                            If you have multiple things you can talk about then
                            submitting 2 or 3 different proposals will increase
                            your chances of finding a place in the schedule.
                        </Dd>
                        <Dt>... but please don't spam us</Dt>
                        <Dd>
                            The program committee reviews hundrends of proposals
                            each year. A few well-written proposals are much more
                            valuable than many half-prepared ideas.
                        </Dd>
                        <Dt>Don't shout</Dt>
                        <Dd>
                            You will definitely be noticed IF YOUR TITLE IS
                            ENTIRELY UPPERCASE (!!!!!!!!), but not necessarily in
                            a positive way.
                        </Dd>
                    </Dl>
                </Content>
            </Block>
        </Container>
    </Page>
);

export default TipsAndTricks;
