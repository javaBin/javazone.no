//@flow
import * as React from 'react';
import Container from '../Container/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';
import './Section.less';

type Orientation = "top" | "bottom";

type PixelBorderProps = {
    orientation: Orientation
}

function PixelBorder(props: PixelBorderProps): React.Node {
    let pixelBorderClass = `pixel-border-${props.orientation}`;
    return (
        <div className={pixelBorderClass}></div>
    )
}

type SectionProps = {
    fluid?: bool,
    alternate?: bool,
    pixel?: bool,
    dark?: bool,
    children: React.Node 
}

Section.defaultProps = {
    fluid: false,
    alternate: false,
    pixel: false,
    dark: false
}

function Section(props: SectionProps) {

    let sectionClass = classnames({
        'section': !props.pixel,
        'section-alternate': props.alternate && !props.dark,
        'section-dark': props.dark && !props.alternate
    })

    return (
        <div className="section-container">
            {props.pixel ? <Row>
                <PixelBorder orientation="top" />
            </Row> : null}
            <Grid className={sectionClass} fluid>
                <Grid fluid={props.fluid}>
                    <Row>
                        {props.children}
                    </Row>
                </Grid>
            </Grid>
            {props.pixel ? <Row>
                <PixelBorder orientation="bottom" />
            </Row> : null}
        </div>
    )
}

export { Section, PixelBorder };