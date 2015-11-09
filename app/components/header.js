import React from 'react';
import {Link, IndexLink} from 'react-router';

export default () => (
    <nav>
        <ul>
            <li><IndexLink to='/'>Home</IndexLink></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
    </nav>
);