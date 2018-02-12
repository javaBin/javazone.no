import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import { Link } from '../components/link';
import { Section } from '../components/Section/Section';
import { CenterBlock, LeftBlock, ImageBlock } from '../components/Block/Block';
import { Header } from '../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../components/Button/Button';
import Page from '../components/Page/Page';
import PageHeader from '../components/PageHeader/PageHeader';
import {Dl, Dt, Dd} from '../components/definition-list';

type TipsAndTricksProps = {
}

function TipsAndTricks(props: TipsAndTricksProps) {
    return (
        <Page name='monetary-policy'>
            <PageHeader subHeader="Make that abstract shine">Tips & Tricks</PageHeader>

            <Section>
                <LeftBlock header="Increase the chance of your talk being accepted">
                    <P>
                        There is generally a very high correlation between how much
                        work one puts in to the creation of a proposal and the
                        chance that the proposal is accepted. Even a proposal with
                        an extremely cool theme, entertaining title, and an
                        experienced speaker may be excluded if the description is
                        lacking. We have gathered some tips that should be considered
                        when writing a JavaZone proposal, and a few reasons why
                        proposals may be rejected.
                    </P>
                </LeftBlock>

                <LeftBlock header="Things to think about when writing your abstract">
                    <Dl>
                        <Dt>Create a good title</Dt>
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
                        <Dt>Provide a detailed outline</Dt>
                        <Dd>
                            The outline is your chance to pitch the proposal to
                            the program committee. This section will not be
                            published, but if your outline is thin or just a
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
                        <Dt>Include supporting materials</Dt>
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
                            deadline.
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
                            then it might hurt your chances to be accepted.
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
                            valuable than a bucket full of half-prepared ideas.
                        </Dd>
                        <Dt>Don't shout</Dt>
                        <Dd>
                            You will definitely be noticed IF YOUR TITLE IS
                            ENTIRELY UPPERCASE (!!!!!!!!), but not necessarily in
                            a positive way.
                        </Dd>
                    </Dl>
                </LeftBlock>

                <LeftBlock header="Why was my talk rejected?">
                        <P>
                            Even though we are rooting for your talk to be accepted, the fact is that some talks must be rejected.
                            Read through these tips to understand why this might happen. Even better, if you are reading this before the Call for Speakers deadline,
                            you can go through your proposal and make sure you do your best to awoid these common pitfalls.
                        </P>
                        <Dl>
                            <Dt>Not Enough information</Dt>
                            <Dd>
                                The program committee was not sure what you're going
                                to present, or there was not enough information
                                about the technology / things you want to talk about
                                to decide how awesome the presentation will be.
                            </Dd>
                            <Dt>The proposal is too thin</Dt>
                            <Dd>
                                The abstract doesn't convey the feeling that you have
                                put a lot of work into it, or that you have thought
                                through your presentation.
                            </Dd>
                            <Dt>You want to talk about more than we think you'll have time to cover</Dt>
                            <Dd>
                                10-minute lightning talk proposals that appear to
                                require double that time will be discounted. The
                                same applies for proposals that try to cover
                                everything possible instead of focusing on a specific
                                area. If you want to cover a breadth of material
                                then be sure to convey to us that you have thought
                                through the timeline for your talk. We must feel
                                that you believe that it will work, something that
                                can be achieved with a clear and detailed outline.
                            </Dd>
                            <Dt>The abstract was not catchy enough</Dt>
                            <Dd>
                                If the committee ends up with 600 or so proposals
                                to go through, time becomes a factor. This is
                                especially true in the first pass, and in the
                                early stages. If your abstract catches the fancy
                                of just one or more of the committee members, your
                                proposal is likely to be thumbs-upped to the next
                                phase. If not, it tends to drop out of the race
                                early. It will help your chances to describe accurately
                                and concisely what you want to talk about, and why
                                people should come and listen to you.
                            </Dd>
                            <Dt>The theme did not fit in with what we want to include in the program this year</Dt>
                            <Dd>
                                Even though JavaZone has place for many
                                themes, there are some proposals that don't
                                fit. Some proposals are rejected because we feel
                                the presentation would be better served at a
                                different conference.
                            </Dd>
                            <Dt>Your co-presenter had a different proposal accepted</Dt>
                            <Dd>
                                If you intend to present with a co-presenter, and
                                she happens to have had a separate proposal already
                                accepted then we may have to reject your joint
                                proposal.
                            </Dd>
                            <Dt>You were unlucky</Dt>
                            <Dd>
                                We often receive multiple good proposals covering
                                exactly the same theme. The program committee then
                                has to decide between these multiple excellent submissions.
                                In 2016 we received many great proposals covering
                                "how we do devops in the cloud". Limited space in the
                                program meant that many of these ended up being
                                rejected.
                            </Dd>
                        </Dl>
                </LeftBlock>
            </Section>
        </Page>
    )
}

export default TipsAndTricks;
