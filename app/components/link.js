import React from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        navigate(ev) {
            let el = ev.target;
            while (el.tagName !== 'A') {
                el = el.parentElement;
            }
            const url = el.getAttribute('data-url');
            if (!url) {
                return;
            }

            window.history.pushState(null, null, url);
            ev.preventDefault();
            dispatch({
                type: 'ROUTER_NAVIGATE',
                value: url
            });
        }
    };
}

function link({href, children, className, navigate, onClick}) {
    if (onClick) {
        const click = (ev) => { navigate(ev); setTimeout(() => onClick(ev), 200); };
        return <a data-url={href} href={href} className={className} onClick={click}>{children}</a>;
    } else {
        return <a data-url={href} href={href} className={className} onClick={navigate}>{children}</a>;
    }
};

export const Link = connect((state) => state, mapDispatchToProps)(link);
