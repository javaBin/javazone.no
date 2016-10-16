import React from "react";
import className from "classname";

export const Meter = (props) => {
    const pillarHeight = {height: (props.value / props.max * 100)};
    const between = (v, min, max) => (v.height >= min && v.height < max);
    const c = className(
        "meter__pillar",
        {
            "meter__pillar--green": between(pillarHeight, 60, 101),
            "meter__pillar--yellow": between(pillarHeight, 25, 60),
            "meter__pillar--red": between(pillarHeight, 0, 25)
        });
    return (
        <div className="meter__container">
            <div className={c} style={pillarHeight}></div>
        </div>
    );
};
Meter.desplayName = "Meter";
Meter.propTypes = {
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    value: React.PropTypes.number
};
