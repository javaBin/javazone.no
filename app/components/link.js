import React from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        navigate(ev) {
            const url = ev.target.getAttribute('data-url');
            if (!url) {
                return;
            }

            window.history.pushState(null, null, urls);
            ev.preventDefault();
            dispatch({
                type: 'ROUTER_NAVIGATE',
                value: url
            });
        }
    };
}

function link({href, children, className, navigate}) {
    return <a data-url={href} href={href} className={className} onClick={navigate}>{children}</a>;
};

export const Link = connect((state) => state, mapDispatchToProps)(link);
