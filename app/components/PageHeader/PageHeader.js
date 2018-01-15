//@flow
import * as React from 'react';
import Section from '../Section/Section';
import './PageHeader.less';

type PageHeaderProps = {
    subHeader?: string,
    children: React.Node
}

function PageHeader(props: PageHeaderProps) {
    return (
        <Section fullWidth secondary>
            <div className="page-header">
                <h1>{props.children}</h1>
                <h2>{props.subHeader}</h2>
            </div>
        </Section>
    )
}

export default PageHeader;