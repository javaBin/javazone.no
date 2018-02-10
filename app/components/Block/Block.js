//@flow
import * as React from 'react';
import Section from '../Section/Section';
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

function Block(props: BlockProps) {

    return (
        <Grid>
            <Row between="xs">
                <Col>
                    {props.header}
                </Col>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Grid>

    )

    /*
    return (
        <div className="block row">
            <div className="col-xs col-sm col-md col-lg-4">
                <div className="box block-header">
                    {props.header}
                </div>
            </div>
            <div className="col-xs col-sm col-md col-lg-8">
                <div className="box block-text">
                     {props.children}
                </div>
            </div>
        </div>
    )
    */
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

export { Block, ImageBlock };