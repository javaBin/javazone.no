import header from '../assets/badges.jpg';

import { Block, Column, ColumnHeading, P } from '../components/textblock';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

export default () => (
    <div className='page academy'>
        <div className='page__header page__header-centered' style={headerStyle}>
            <h1 className='page__title'>Early Bird Tickets</h1>
        </div>

        <div className='textblock textblock--centered'>
            <div className='textblock__column textblock__column--centered'>
                <div className='textblock__text textblock__text--fill'>
                    <h2 className='textblock__title'>Join us for the 15th JavaZone, <br />buy your ticket today!</h2>
                    <p>
                        The tickets for JavaZone 2016 are availiable to an extra special Early Bird price until April 1st 2016. Buy your ticket now and save more than 10%. What's not to like?
                    </p>
                </div>
            </div>
        </div>

        <Block>
            <Column center={true}>
                <P>
                    <a href='https://www.eventsystems.no/es/event/javazone2016' className='button button--green'>Buy your ticket today!</a>
                </P>
            </Column>
        </Block>

        <Block>
            <Column>
                <ColumnHeading>Special ticket types</ColumnHeading>
                <dl className='speakers__accepted'>
                    <dt className='speakers__accepted-title'>Working for one of our partners?</dt>
                    <dd className='speakers__accepted-description'>Partners may buy tickets at reduced prices until July 1st. Read more about partnerships of JavaZone and contact us at partner@java.no to buy tickets.</dd>
                    <dt className='speakers__accepted-title'>Need more than one ticket?</dt>
                    <dd className='speakers__accepted-description'>Multiple tickets might be bought at the same time. You can then assign the tickets to the participants by using their email. You can manage your tickets by logging into our webshop.</dd>
                    <dt className='speakers__accepted-title'>Need an invoice?</dt>
                    <dd className='speakers__accepted-description'>Paying by invoice can be accommodated if you need that, but please consider buying the tickets using the webshop if you can. You'll get a receipt which can be used for reimbursements even though you pay with your personal credit card.</dd>
                </dl>
            </Column>
            <Column>
                <ColumnHeading>Special javaBin Member price</ColumnHeading>
                <P>
                    If you are a member of javaBin, you can buy your ticket to a reduced price. Both ticket types gives full access to the conference, but javaBin-tickets are discounted by NOK 1000,–
                </P>
                <P>
                    We fully recommend that you consider a membership before buying your ticket. Anyone is welcome to join javaBin, we already have more than 2.000 members from all over the country.
                </P>
                <P>
                    You can read more and buy your membership at <a href="http://java.no/index.html?page=medlemskap">java.no</a>.
                </P>
            </Column>
        </Block>

        <Block>
            <Column center={true}>
                <P>
                    <a href='https://www.eventsystems.no/es/event/javazone2016' className='button button--green'>Buy your ticket today!</a>
                </P>
            </Column>
        </Block>

    </div>
);
