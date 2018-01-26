//@flow
import * as React from 'react';
import Container from '../Container/Container';
import classnames from 'classnames';
import './Section.less';

type SectionProps = {
    fullWidth?: bool,
    pixel?: bool,
    secondary?: bool,
    children: React.Node 
}

Section.defaultProps = {
    fullWidth: false,
    pixel: false,
    secondary: false
}

function Section(props: SectionProps) {

    let sectionClass = classnames({
        'pixel': props.pixel,
        'secondary-bg': props.secondary 
    })

    return (
        <Container fullWidth={props.fullWidth}>
            {props.pixel ? <div className="border"></div> : null}
            <div className={sectionClass}>
                {props.children}
            </div>
            {props.pixel ? <div className="border-bottom"></div> : null}
        </Container>
    )
}

export default Section;