import { Page, PageHeading } from '../components/page';
import { Block, Column, ColumnHeading, P } from '../components/textblock';

const header = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs';

export default () => (
    <Page name='404'>
        <PageHeading background={header}>Void 0</PageHeading>

        <Block>
            <Column center={true}>
                <ColumnHeading>Well, this is embarrassing..</ColumnHeading>
                <P>
                    We seem to somehow have lost the page you are looking for.
                    If you are a technical person, this is what you might usually
                    refer to as a classical 404 response code. We are of course
                    using advanced technology to keep things like these from
                    happening, but every now and then technology (or we..) fails. If you
                    have a lot of time on your hands (or are just really kind),
                    we would really appreciate it if you <a href='mailto:javazone@java.no'>tell us about it</a>.
                </P>
            </Column>
        </Block>
    </Page>
);