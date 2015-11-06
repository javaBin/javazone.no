import React from 'react';
import {Link, IndexLink} from 'react-router';

export default (props) => (
    <div>
        <ul>
            <li><IndexLink to='/'>Home</IndexLink></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
        {props.children}
    </div>
);