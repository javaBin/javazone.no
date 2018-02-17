import * as React from 'react';
import Page from '../components/Page/Page';
import PageHeader from '../components/PageHeader/PageHeader';
import { CenterBlock, LeftBlock, ImageBlock } from '../components/Block/Block';
import { Section } from '../components/Section/Section';


const header = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs';

type Page404Props = {
}

function Page404(props: Page404Props) {
    return (
        <Page name='404'>
            <PageHeader subHeader="Well, this is embarrassing...">Void 0</PageHeader>
            <Section>  
                <LeftBlock header="Error 404">
                    <p>
                        We seem to somehow have lost the page you are looking for.
                        If you are a technical person, this is what you might usually
                        refer to as a classical 404 response code. 
                    </p>
                    <p>
                        We are of course
                        using advanced technology to keep things like these from
                        happening, but every now and then technology (or we...) fails. 
                    </p>
                    <p>
                        If you have a lot of time on your hands (or are just really kind),
                        we would really appreciate it if you <a href='mailto:javazone@java.no'>
                        tell us about it</a>.
                    </p>
                </LeftBlock>
            </Section>
        </Page>
    )
}

export default Page404;