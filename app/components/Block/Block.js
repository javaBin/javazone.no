//@flow
import * as React from 'react';
import { Section } from '../Section/Section.js';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Block.less';

type BlockProps = {
    header?: string,
    alternate?: bool,
    image?: string,
    centerHeader?: bool,
    children: React.Node
}

type ImageBlockProps = {
    image: string,
    alt: string
}

type CenterBlockProps = {
    header?: string,
    textAlign?: string,
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
                <Row center="xs" around="xs">
                    <Col className="block-text-center">
                        {props.children}
                    </Col>
                </Row>
            </div>
        </Grid>
    )
}

function LeftBlock(props: BlockProps) {

    let leftBlockClass = classnames({
        'block': true,
        'block-alternate': props.alternate
    })

    let leftBlockHeaderClass = classnames({
        'block-header': true,
        'block-header-margin-right': !props.centerHeader,
    })

    return (
        <Grid>
            <Row className={leftBlockClass} center="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row center="xs">
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <h1 className={leftBlockHeaderClass}>{props.header}</h1>
                            {props.image ? 
                                <div className="block-image-wrapper">
                                    <div className="block-image">
                                        <img src={props.image} />
                                    </div>
                                </div>
                                 : 
                                 null}
                        </Col>
                        <Col className="block-text" xs={12} sm={12} md={6} lg={8}>
                            {props.children}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>

    )
}

function RightBlock(props: BlockProps) {
    return (
        <Grid>
            <Row className="block" center="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row center="xs">
                        <Col className="block-text" xs={12} sm={12} md={8} lg={8}>
                            {props.children}
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 className="block-header block-header-margin-left">{props.header}</h1>
                        </Col>
                    </Row>
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