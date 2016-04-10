import { Page, PageHeading } from '../components/page';
import { Block, Column, ColumnHeading, P } from '../components/textblock';

const header = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs';

export default () => (
    <Page name='info'>
        <PageHeading background={header}>JavaZone 2016</PageHeading>

        <Block>
            <Column center={true}>
                <ColumnHeading>Oslo Spektrum, September 7-8th 2016</ColumnHeading>
                <P>
                    Info
                </P>
            </Column>
        </Block>
    </Page>
);