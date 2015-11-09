import React from 'react';
import {Link, IndexLink} from 'react-router';
import Header from './header';

export default (props) => (
    <div>
        <Header {...props} />
        {props.children}
    </div>
);