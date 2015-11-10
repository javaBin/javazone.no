import React from 'react';
import {Link, IndexLink} from 'react-router';
import Nav from './nav';

export default (props) => (
    <div className="javazone">
        <div className="javazone__page">
            {props.children}
        </div>
    </div>
);