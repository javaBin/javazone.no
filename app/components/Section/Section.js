//@flow
import * as React from 'react';
import Container from '../Container/Container';
import classnames from 'classnames';
import './Section.less';

type SectionProps = {
    fullWidth?: bool,
    pixel?: bool,
    children: React.Node 
}

Section.defaultProps = {
    fullWidth: false,
    pixel: false
}

function Section(props: SectionProps) {

    let sectionClass = classnames({
        'pixel': props.pixel
    })

    return (
        <Container fullWidth={props.fullWidth}>
            {props.pixel ? <div className="pixel-border-top"></div> : null}
            <div className={sectionClass}>
                {props.children}
            </div>
            {props.pixel ? <div className="pixel-border-bottom"></div> : null}
        </Container>
    )
}

export default Section;