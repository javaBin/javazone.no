//@flow
import * as React from 'react';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import { Section } from '../../components/Section/Section';
import { Pitch } from '../../components/page';
import { Link } from '../../components/link';
import {Dl, Dt, Dd} from '../../components/definition-list';
import Timeline from '../../components/timeline';
import Youtube from '../../components/youtube';
import speakers1 from '../../assets/speakers_1.jpg';
import speakers2 from '../../assets/speakers_2.jpg';
import speakers3 from '../../assets/speakers_3.jpg';
import './Speakers.less';

type SpeakerProps = {
}

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <p justify={"true"} className='format__description'>{props.description}</p>
    </li>
);

const lightnings = {
    icon: 'icon-energy',
    title: 'Lightning talks',
    length: '10 or 20 minutes',
    description: 'Are you presenting a great new idea, or want to give the audience a teaser for a cool topic? Then you should strongly consider the lightning talk format.  Note that the 10-20 minute time limit is strictly enforced!'
};

const presentations = {
    icon: 'icon-graduation',
    title: 'Presentations',
    length: '45 or 60 minutes',
    description: 'Presentations at JavaZone can be either 45 or 60 minutes long. This gives you room to elaborate on an idea. When submitting your talk, please indicate clearly in the outline how much time is reserved for questions.'
};

const workshops = {
    icon: 'icon-screen-desktop',
    title: 'Workshops',
    length: '2 hours, 4 hours, 8 hours',
    description: 'We will continue the popular workshop concept with a range of sessions on Tuesday September 11th. The format for the workshops is in-depth, hands-on and interactive.'
};

function Speakers(props: SpeakerProps) {
    return (
        <Page name='speakers'>
            <PageHeader subHeader="Speak at JavaZone 2018">Call for speakers</PageHeader>
            <Section>
	            <CenterBlock header="About JavaZone">
                    <p>
                   		JavaZone 2018 will be the 17th consecutive JavaZone conference, and will consist of a day of pre-conference workshops on September 11th, followed by two days of lightning talks and presentations on September 12th and 13th.
					</p>
					<p>
                        Last year's event was completely sold out, with more than 3100 attendees enjoying 141 sessions.
                    </p>
                    <p>
                        JavaZone hosts both internationals and home-grown Norwegian talent as speakers. We'd love to have you join us in 2018!
                    </p>
                    <p>
                        <br />
                        Our call for speakers is now closed, but you can still see (and edit) the talks you have submitted.
                    </p>
                    <p>
                    	<br />
	                    <a className='button button--transparent' href="http://submit.javazone.no">See your submitted sessions</a>
	                </p>
	            </CenterBlock>
	        </Section>

            <ImageBlock image={speakers1} alt="Speakers page separator image" />

	        <Section>
		        <LeftBlock header="What is it like speaking at JavaZone?">
                    <p>
                        Over the last decade JavaZone has grown to become one of the most important Java events in Europe! You can see for yourself – 1174 videos from previous years talks are available for free at <a href='https://vimeo.com/javazone'>Vimeo</a>, and the <a href='https://2017.javazone.no/program'>full program from JavaZone 2017</a> is also available.
                    </p>
                    <p>
                        We can brag as much as we want, but JavaZone would be nothing without all the great speakers! That's why we need your help to make sure that JavaZone 2018 will be at least as awesome as the earlier events. If you think you have something interesting to share, please submit your talk or workshop at the latest on April 8th 2018.
                    </p>
                    <p>
                        JavaZone is committed to diversity, and we are especially interested in quality submissions from groups that are under-represented in tech.
                    </p>
	            </LeftBlock>
	        </Section>

            <ImageBlock image={speakers2} alt="Speakers page separator image" />

	        <Section>
	            <CenterBlock>
		            <div className='speakers__formats'>
	                    <span className='icon-clock'></span>
	                </div>
	            </CenterBlock>

				<LeftBlock header="Formats and Durations">
                    <p>
                        You should think about which format your talk will work
                        best in. Are you presenting a new idea, or do you require
                        more time to elaborate on your subject? How hands-on do
                        you want to be? We have three formats you can present
                        your material in.
                    </p>
	            </LeftBlock>
	            <CenterBlock>
	                <ul className='presentation-formats'>
	                    <Format {...lightnings} />
	                    <Format {...presentations} />
	                    <Format {...workshops} />
	                </ul>
	            </CenterBlock>

	            <LeftBlock header="Audience and Topics">
	                    <p>
	                        JavaZone is a conference for developers and technical architects, with an emphasis on technical talks. However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
	                    </p>
	                    <p>
                            Despite our conference's name, we do not limit our content to Java technology. We will consider all talks based on their relevance to developers and technical architects. We do however set a focus on technology surrounding the JVM when selecting talks.
                        </p>
	            </LeftBlock>

	            <LeftBlock header="Get Some Inspiration">
                    <Dl className='speakers__inspiration'>
                        <Dt className='speakers__inspiration-title'>Speakers workshop</Dt>
                        <Dd className='speakers__inspiration-description'>On the 6th of March we will be <a href='https://www.meetup.com/javaBin/events/247318304/'>hosting a workshop for all those considering submitting a talk to JavaZone</a>.</Dd>
                        <Dt className='speakers__inspiration-title'>Presentation skills workshop</Dt>
                        <Dd className='speakers__inspiration-description'>JavaZone has a strong tradition of nurturing local speaker talent. To help with this we arrange a presentation skills workshop in August. This workshop is held in Oslo and is free for all accepted speakers. This workshop will be held in Norwegian.</Dd>
                    </Dl>
	            </LeftBlock>

	            <LeftBlock header="Ongoing Evaluation of Talks">
                    <p>
                        Each year we receive hundreds of submissions and we consider each submission as it arrives. Due to the big amount of submission we can however not guarantee that you hear from us immediately. We do however answer all submissions and try to do so no later than in July.
                    </p>
                    <p>
                        Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit, the more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers tsunami!
                    </p>
                </LeftBlock>
                <CenterBlock>
                    <p>
                        <Button link='/speakers/tips'>
                            Some tips and tricks about your submission
                        </Button>
                    </p>
	            </CenterBlock>
	        </Section>

            <ImageBlock image={speakers3} alt="Speakers page separator image" />

            <Section>
	            <CenterBlock header="Dates & Deadlines for JavaZone 2018">
	                <p>
	                </p>
                    <Timeline />
	            </CenterBlock>

	            <LeftBlock header="What’s in it for me?">
	                    <Dl className='speakers__accepted'>
	                        <Dt className='speakers__accepted-title'>Accepted presentations and workshops</Dt>
	                        <Dd className='speakers__accepted-description'>You get free admission to the conference. Additionally you are also invited to the speakers' dinner, held on September 11th. Finally, you have first priority on the limited number of slots for JourneyZone, our annual speaker adventure.</Dd>
	                        <Dt className='speakers__accepted-title'>Accepted lightning talks</Dt>
	                        <Dd className='speakers__accepted-description'>You are invited to the speakers' dinner, held on September 11th, and will also be invited to apply for a place at JourneyZone. Note that you have to provide your own ticket to JavaZone.</Dd>
	                        <Dt className='speakers__accepted-title'>Coverage of Expenses</Dt>
	                        <Dd className='speakers__accepted-description'>Please see our <Link href='/speakers/monetary-policy'>reimbursement policy</Link> if you have any questions regarding coverage of other expenses.</Dd>
	                    </Dl>
	            </LeftBlock>

            	<LeftBlock header="Important principles">
                    <p>
                        JavaZone is proud to be an independent and community-driven conference. It is organized by volunteers from javaBin (the Norwegian Java User Group) and is run as a non-profit organisation. This means that we have three important principles for selecting talks:
                    </p>
                    <ul className='speakers__list'>
                        <li className='speakers__principle'>We do not sell speaker slots.</li>
                        <li className='speakers__principle'>We do not accept sales pitches masked as presentations</li>
                        <li className='speakers__principle'>We do not differentiate between speakers from partners and independent speakers</li>
                    </ul>
                    <p>
                        If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                    </p>
	            </LeftBlock>

	            <CenterBlock>
	                    <p>
	                        <a href='http://submit.javazone.no' className='button button--transparent'>
	                            <span className='button__icon icon-check'></span> Submit a session!
	                        </a>
	                    </p>
	            </CenterBlock>

	            <CenterBlock header="We hope to see you at JavaZone 2018 – please feel free to spread the word to your local community!">
	                    <p className='speakers__regards'>
	                        <br />
	                        Best regards,<br />the JavaZone Program Committee
	                    </p>
	            </CenterBlock>
	        </Section>
        </Page>
    )
}

export default Speakers;