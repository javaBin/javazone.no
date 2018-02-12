//@flow
import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import { Block, Content, SubHeader, P} from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import { Section } from '../../components/Section/Section';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import Timeline from '../../components/timeline';
import Youtube from '../../components/youtube';
import tickets1 from '../../assets/tickets_1.jpg';
import tickets2 from '../../assets/tickets_2.jpg';
import tickets3 from '../../assets/partners_1.jpg';
import './Tickets.less';

type TicketsProps = {
}

function Tickets(props: TicketsProps) {
    return (
        <Page name='tickets'>
	        <PageHeader subHeader="Come join us in Oslo, September 12-13th">Tickets to JavaZone 2018</PageHeader>  
	        <Section>
	            <CenterBlock header="Get your tickets for JavaZone 2018">
	                    <div className="partner-prices-main">NOK 5.990,-</div>
	                    <P>
	                        The JavaZone Ticket includes full access to the conference <br />
	                        and entry to workshops on Tuesday (limited seating: first come, first served).<br />
	                        The price also includes a 1 year membership in javaBin, the Norwegian Java User Group<br />
	                        <span className="partners__vat">prices ex VAT</span>
	                    </P>
	                    <P>
	                        <a className='button button--transparent' href="https://www.eventbrite.com/e/javazone-2018-tickets-43071469926">Get Your Tickets Now!</a>
	                    </P>
	            </CenterBlock>	            
	        </Section>

            <ImageBlock image={tickets3} alt="Tickets page separator image" />

	        <Section>
	        	<LeftBlock header="Working for one of our partners?">
                    <P>
                         All partners of JavaZone get reduced prices on tickets. Partners can buy tickets at a reduced price until July 1st. The main partner contact person can order tickets by using this <a href="https://goo.gl/forms/mXtFNeaO9d73Mxwq1">invoice request form</a>. Read more about <Link href='/partners'>JavaZone partnership</Link> here.
                    </P>
	            </LeftBlock>

	            <LeftBlock header="Need more than one ticket?">
                    <P>
                        Multiple tickets can be bought at the same time. You can then assign the tickets to the participants via email. Just use our regular webshop and specify the number of tickets you require when buying.
                    </P>
	            </LeftBlock>

	            <LeftBlock header="Need an invoice?">
                    <P>
                        Paying by invoice can be accommodated if required, but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even when paying with credit card.
                        <br />
                        <span className='strikethrough'>Request your invoice here: <a href="https://goo.gl/forms/mXtFNeaO9d73Mxwq1">Invoice request form</a></span>.
                        <br />
                    </P>
	            </LeftBlock>

	            <LeftBlock header="Refund policy">
                    <P>
                        If you need a refund on your ticket, send an email with your request to <a href="mailto:javazone@java.no">javazone@java.no</a>.
                        We'll refund the full ticket price minus a small processing fee (to cover credit card fees or invoice fees) for requests submitted before August 1st.
                        Refund requests received after August 1st will only be accepted if javaBin are able to resell the tickets.
                        For tickets bought in bulk (applies to both partner tickets and large regular orders), a maximum of 5 tickets can be refunded under this policy.
                    </P>
	            </LeftBlock>
            </Section>

        	<ImageBlock image={tickets1} alt="Tickets page separator image" />

        	<Section>
	            <LeftBlock header="The javaBin membership included in the ticket">
                    <P>
                        <br />
                        JavaZone is organized for and by the community. Your ticket includes a membership to javaBin, giving you access to all the javaBin community events and voting rights for a full year after buying the ticket.
                    </P>
                    <P>
                        Previously we used to sell tickets and memberships separately, but you saved a total of 500 NOK by buying both. It seemed silly to force you through two separate web shops to collect this discount, so we combined the two and thereby made the tickets cheaper for everyone. If you still would like to pay extra as before, let us know! ;-)
                    </P>
	            </LeftBlock>
	        </Section>

            <ImageBlock image={tickets2} alt="Tickets page separator image" />

 			<Section>
	            <CenterBlock header="Need more info about JavaZone?">
                    <P>
                        <br />
                        We'll release more information about the conference before the summer, and the detailed program with information about all the talks will be ready in July. Until then, have a look at the video on top and <a href="http://2017.javazone.no">the 2017 website</a> to get a feel for how awesome JavaZone is!
                    </P>
                    <P>
                        Don't wait too long buying your ticket though – last year we all of the 3,100 spots were gone, and we had long waiting lists. We expect a decent amout of interest this year as well.
                    </P>
	            </CenterBlock>
	        </Section>
	    </Page>
    )
}

export default Tickets;
