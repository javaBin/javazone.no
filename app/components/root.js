import React from 'react';
import {Link, IndexLink} from 'react-router';
import Nav from './nav';

export default (props) => (
    <div>
        <Nav {...props} />
        {props.children}
    </div>
);