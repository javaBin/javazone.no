//@flow
import * as React from 'react';
import Section from '../Section/Section';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Block.less';

type BlockProps = {
    header?: string,
    children: React.Node
}

type ImageBlockProps = {
    image: string,
    alt: string
}

type CenterBlockProps = {
    header?: string,
    textAlign: string,
    children: React.Node
}

function CenterBlock(props: CenterBlockProps) {

    let centerBlockClass = classnames({
        'block': true,
        'center-block-text-center': true 
    })

    let headerRow = props.header ? <Row center="xs"><h1 className="block-header">{props.header}</h1></Row> : null;

    return (
        <Grid>
            <div className={centerBlockClass}>
                {headerRow}
                {props.children}
            </div>
        </Grid>
    )
}

function LeftBlock(props: BlockProps) {

    return (
        <Grid>
            <Row className="block">
                <Col xs={4}>
                    <h1 className="block-header block-header-margin-right">{props.header}</h1>
                </Col>
                <Col className="block-text" xs={8}>
                    {props.children}
                </Col>
            </Row>
        </Grid>

    )
}

function RightBlock(props: BlockProps) {
    return (
        <Grid>
            <Row className="block">
                <Col className="block-text" xs={8}>
                    {props.children}
                </Col>
                <Col xs={4}>
                    <h1 className="block-header block-header-margin-left">{props.header}</h1>
                </Col>
            </Row>
        </Grid>

    )
}

function ImageBlock(props: ImageBlockProps) {
    return (
        <div>
            <div className="image-block">
                <img src={props.image} alt={props.alt} />
            </div>
        </div>
    )
}

export { LeftBlock, CenterBlock, RightBlock, ImageBlock };