//@flow
import * as React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Section } from '../Section/Section';
import './PageHeader.less';

type PageHeaderProps = {
    subHeader?: string,
    subSubHeader?: string,
    children: React.Node
}

function PageHeader(props: PageHeaderProps) {
    return (
        <div className="page-header-wrapper-margin">
            <Section dark>
                <Grid>
                    <Row center="xs">
                        <h1 className="page-header">{props.children}</h1>
                    </Row>
                    <Row center="xs">
                        <h2 className={props.subSubHeader ? "page-subsubheader" : "page-subheader"}>{props.subHeader}</h2>
                    </Row>
                    {props.subSubHeader ?
                    <Row center="xs">
                        <h2 className="page-subheader">{props.subSubHeader}</h2>
                    </Row>
                    : null}
                </Grid>
            </Section>
        </div>
    )
}

export default PageHeader;